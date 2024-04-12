"use client";

import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Aside from "@/components/aside";
import Loading from "@/components/loading";
import { useTheme } from "next-themes";
import axios from "axios";
import { notFound } from "next/navigation";
import { detectLanguage } from "@/utils/detectLanguage";

const EditorPage: React.FC = (params: any) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(0);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://kodlinc.metafron.com/getData/${params?.params?.slug[0]}`,
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
  }, [params?.params?.slug]);

  useEffect(() => {
    if (status === 404) {
      notFound();
    }
  }, [status]);

  const code = data?.base64_string ? decodeBase64(data.base64_string) : "";

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Loading width={128} height={128} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        <div className="flex-grow h-[calc(100vh_-_57px)] text-base">
          <Editor
            key={code}
            height="100%"
            language={detectLanguage(code)}
            value={code}
            theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

function decodeBase64(base64String: string): string {
  return Buffer.from(base64String, "base64").toString();
}

export default EditorPage;
