export function getValue(id: string){
  const inputElement = document.getElementById(id) as HTMLInputElement | null;
  const value = inputElement?.value;
  return value? value : "";
}