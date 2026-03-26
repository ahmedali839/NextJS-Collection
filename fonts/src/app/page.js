import { Poppins } from "next/font/google";
import { inter, lora, sourceCodePro400, sourceCodePro700 } from "./styles/font";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className={`text-6xl ${poppins.className}`}>
        <div>
          {" "}
          Hello<span className="h-20 w-10 d-none  border-l-8 mx-2"></span> Yar..
        </div>
      </h1>
      <h1 className={`text-6xl ${inter.className}`}>
        <div>
          {" "}
          Hello<span className="h-20 w-10 d-none  border-l-8 mx-2"></span> Yar..
        </div>
      </h1>
      <h1 className={`text-6xl ${lora.className}`}>
        <div>
          {" "}
          Hello<span className="h-20 w-10 d-none  border-l-8 mx-2"></span> Yar..
        </div>
      </h1>
      <h1 className={`text-6xl ${sourceCodePro700.className}`}>
        <div>
          {" "}
          Hello<span className="h-20 w-10 d-none  border-l-8 mx-2"></span> Yar..
        </div>
      </h1>
      <h1 className={`text-6xl ${sourceCodePro400.className}`}>
        <div>
          {" "}
          Hello<span className="h-20 w-10 d-none  border-l-8 mx-2"></span> Yar..
        </div>
      </h1>
    </div>
  );
}
