import XLSX from "xlsx";

export default function parseXLSX(file: string) {
  const arquivo = XLSX.readFile(file);

  const parsedData = XLSX.utils.sheet_to_json(
    arquivo.Sheets[arquivo.SheetNames[0]]
  );

  return parsedData as any[];
}
