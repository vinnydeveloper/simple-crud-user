import parseXLSX from "./leitores/xlsx";
export default function parseFile(file: string): any[] {
  "usuario.final.xlsx";
  const extensao = file.split(".").pop();

  let data = [];
  switch (extensao) {
    case "xlsx":
      data = parseXLSX(file);
      break;
    default:
      console.log("arquivo não mapeado");
  }

  return data;
}
