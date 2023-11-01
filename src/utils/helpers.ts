export function getValue(id: string){
  const inputElement = document.getElementById(id) as HTMLInputElement | null;
  const value = inputElement?.value;
  return value? value : "";
}

export function getInitials(fName: string, lName: string){
  return fName.charAt(0).toUpperCase() + lName.charAt(0).toUpperCase();
}