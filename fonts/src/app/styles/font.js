import { Inter, Lora, Source_Sans_3 } from "next/font/google";

// define your variable fonts
const inter = Inter({
  preload: false,
});
const lora = Lora({
  preload: false,
});
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({ weight: "400", preload: false });
const sourceCodePro700 = Source_Sans_3({ weight: "700", preload: false });
export { inter, lora, sourceCodePro400, sourceCodePro700 };
