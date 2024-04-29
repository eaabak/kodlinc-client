import Logo404 from "./components/logo-404";

interface NotFoundProps {
  text: string;
}

export default function NotFound({ text }: NotFoundProps) {
  return (
    <div className="dark:bg-[#1e1e1e] bg-white flex flex-col justify-center items-center h-[100vh] gap-4">
      <div className="flex items-center">
        <Logo404 />
      </div>
      <div className={`w-[50%] text-center mt-4`}>
        <span className="dark:text-[#e6e6e6] text-[#24292ead] text-xl leading-4 custom-font-family">
          {text}
        </span>
      </div>
    </div>
  );
}
