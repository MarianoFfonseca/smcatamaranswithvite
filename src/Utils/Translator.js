import EsScript from "../components/PopUp/EsScripts.json";
import EnScript from "../components/PopUp/EnScripts.json";
export default function Translator(idex, lang) {
  if (lang === "es") {
    return EsScript[idex];
  } else {
    return EnScript[idex];
  }
}
