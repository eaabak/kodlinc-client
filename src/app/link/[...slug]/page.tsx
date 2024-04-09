"use client";
import React, { useEffect, useState } from "react";
import { Editor, useMonaco } from "@monaco-editor/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { detectLanguage } from "@/utils/detectLanguage";
import { useTheme } from "next-themes";
import Aside from "@/components/aside";

function decodeBase64(base64String: string): string {
  const buffer = Buffer.from(base64String, "base64");
  return buffer.toString();
}

const EditorPage: React.FC = (params: any) => {
  const monaco = useMonaco();
  const [base64String, setBase64String] = useState(params?.params?.slug[0]);
  const { resolvedTheme } = useTheme();

  // useEffect(() => {
  //   if (monaco) {
  //     monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
  //       noSemanticValidation: true,
  //       noSyntaxValidation: true,
  //     });
  //   }
  // }, [monaco]);

  const code: string = decodeBase64(base64String);


  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        <div className="w-[calc(100%_-_48px)] h-[calc(100vh_-_57px)] text-base m-0">
          <Editor
            height="100%"
            language={detectLanguage(params?.searchParams?.fileExtension)}
            value={code}
            theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditorPage;
