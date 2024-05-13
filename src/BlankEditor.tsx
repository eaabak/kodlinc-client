import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { useParams } from "react-router-dom";
import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";
import { MonacoBinding } from "y-monaco";
import * as monaco from "monaco-editor";

import CollaborationSidebar from "./components/collaborationSidebar";
import Aside from "./components/aside";
import { Footer } from "./components/footer";
import { useTheme } from "./ThemeProvider";

const BlankEditor: React.FC = () => {
  const params = useParams<{ slug: string }>();
  const { resolvedTheme } = useTheme();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [position, setPosition] = useState<{
    lineNumber: number;
    column: number;
  } | null>(null);
  const [collaborators, setCollaborators] = useState<any[]>([]);

  const initializeEditor = async (
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    try {
      editorRef.current = editor;
      const doc = new Y.Doc();
      const model = editor.getModel();
      const type = doc.getText("monaco");

      if (model) {
        const wsProvider = new WebsocketProvider(
          "ws://localhost:6561",
          params?.slug || "",
          doc
        );

        wsProvider.on("status", ({ status }: { status: string }) => {
          if (status === "connected") {
            console.log("Connection established successfully!");
          }
        });

        new MonacoBinding(type, model, new Set([editor]), wsProvider.awareness);

        editor.onMouseDown(handleEditorMouseDown);

        wsProvider.awareness.on("update", () => {
          const states = wsProvider.awareness.getStates();
          const newCollaborators = Array.from(states).map(
            ([clientId, state]) => ({
              clientId,
            })
          );
          setCollaborators(newCollaborators);
        });
      }
    } catch (error) {
      console.error("Error in initializeEditor:", error);
    }
  };

  const handleEditorMouseDown = () => {
    const editor = editorRef.current;
    if (editor) {
      const position = editor.getPosition();
      if (position) {
        setPosition({
          lineNumber: position.lineNumber,
          column: position.column,
        });
      }
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <Aside />
        <div className="flex-grow h-full text-base">
          <Editor
            key={params.slug}
            height="100%"
            theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
            onMount={initializeEditor}
          />
        </div>
        <CollaborationSidebar collaborators={collaborators} />
      </div>
      <Footer position={position} />
    </div>
  );
};

export default BlankEditor;
