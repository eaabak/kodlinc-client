import { Editor } from "@monaco-editor/react";
import axios from "axios";
import { detectLanguage } from "./utils/detectLanguage";
import Footer from "./components/footer";
import Aside from "./components/aside";
import { useTheme } from "./ThemeProvider";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./components/loading";
import NotFound from "./NotFound";
import * as Y from "yjs";
import { MonacoBinding } from "y-monaco";
import * as monaco from "monaco-editor";
import { WebsocketProvider } from "y-websocket";

function EditorPage() {
  const params = useParams();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(0);
  const { resolvedTheme } = useTheme();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://kodlinc-api.metafron.com/getData/${params.slug}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setData(response.data);
      } catch (error: any) {
        if (error.response?.status === 404) {
          setStatus(404);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params?.slug]);

  if (status === 404) {
    return <NotFound text="No code for such a ID was found" />;
  }

  const code = data?.base64_string ? decodeBase64(data.base64_string) : "";

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh] dark:bg-[#1e1e1e] bg-white">
        <Loading width={128} height={128} />
      </div>
    );
  }

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: any
  ) => {
    try {
      editorRef.current = editor;
      const doc = new Y.Doc();
      const model: any = editor.getModel();
      const type = doc.getText("monaco");
      model.setValue(code);
      const wsProvider = new WebsocketProvider(
        "ws://localhost:6561",
        "editor-users",
        doc
      );
      wsProvider.on("status", (event: { status: string }) => {
        if (event.status === "connected") {
          console.log("Bağlantı başarıyla kuruldu!");
        }
      });

      const binding = new MonacoBinding(
        type,
        model,
        new Set([editor]),
        wsProvider.awareness
      );
    } catch (error) {
      console.error("Error in handleEditorDidMount:", error);
    }
  };

  return (
    <>
      <div className="flex">
        <Aside />
        <div className="flex-grow h-[calc(100vh_-_57px)] text-base">
          <Editor
            key={code}
            height="100%"
            language={detectLanguage(code)}
            theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
            onMount={handleEditorDidMount}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

const decodeBase64 = (base64String: string): string => {
  return atob(base64String);
};

export default EditorPage;
