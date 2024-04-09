"use client";
import React, { useEffect, useState } from "react";
import { Editor, useMonaco } from "@monaco-editor/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { detectLanguage } from "@/utils/detectLanguage";
import { useTheme } from "next-themes";
import Aside from "@/components/aside";
import axios from "axios";

function decodeBase64(base64String: string): string {
  const buffer = Buffer.from(base64String, "base64");
  return buffer.toString();
}

const EditorPage: React.FC = (params: any) => {
  const [base64String, setBase64String] = useState(params?.params?.slug[0]);
  const { resolvedTheme } = useTheme();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kodlinc.metafron.com/getData/ec2e5b7f-e103-4c97-a52e-8e31318c133f",
          {
            method: "GET",
            mode: "no-cors", // CORS desteği ekleniyor
            headers: {
              "Content-Type": "application/json",
              // İsteğe ekstra başlıklar eklemek isterseniz buraya ekleyebilirsiniz
            },
          }
        );
        console.log('response', response)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.text(); // veya response.json() kullanabilirsiniz
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const code: string = decodeBase64(base64String);
  console.log("data", data);

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
