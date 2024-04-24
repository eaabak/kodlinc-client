import { Editor } from "@monaco-editor/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./components/loading";
import NotFound from "./NotFound";
import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";
import { MonacoBinding } from "y-monaco";
import * as monaco from "monaco-editor";
import { detectLanguage } from "./utils/detectLanguage";
import Aside from "./components/aside";
import Footer from "./components/footer";
import { useTheme } from "./ThemeProvider";
import config from "./config";

const EditorPage: React.FC = () => {
  const params = useParams<{ slug: string }>();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<number>(0);
  const { resolvedTheme } = useTheme();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${config.apiUrl}/getData/${params.slug}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setData(response.data);
        setIsLoading(false);
        setStatus(response.status);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          setStatus(404);
        }
      }
    };

    fetchData();
  }, [params?.slug]);

  if (status === 404) {
    return <NotFound text="No code for such an ID was found" />;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen dark:bg-[#1e1e1e] bg-white">
        <Loading width={128} height={128} />
      </div>
    );
  }

  const code = data?.base64_string ? decodeBase64(data.base64_string) : "";

  const handleEditorDidMount = async (
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: any
  ) => {
    try {
      editorRef.current = editor;
      const doc = new Y.Doc();
      const model = editor.getModel();
      const type = doc.getText("monaco");
  
      if (model) {
        model.setValue(code);
  
        const wsProvider = new WebsocketProvider(
          "ws://localhost:6561",
          "editor-users",
          doc
        );
        wsProvider.on("status", ({ status }: { status: string }) => {
          if (status === "connected") {
            console.log("Connection established successfully!");
          }
        });
  
        new MonacoBinding(type, model, new Set([editor]), wsProvider.awareness);
      }
    } catch (error) {
      console.error("Error in handleEditorDidMount:", error);
    }
  };
  

  return (
    <div className="flex">
      <Aside />
      <div className="flex-grow h-[calc(100vh-_57px)] text-base">
        <Editor
          key={code}
          height="100%"
          language={detectLanguage(code)}
          theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
          onMount={handleEditorDidMount}
        />
      </div>
      <Footer />
    </div>
  );
};

const decodeBase64 = (base64String: string): string => {
  return atob(base64String);
};

export default EditorPage;
