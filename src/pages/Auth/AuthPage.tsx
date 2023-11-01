import { handleAuthClick, handleSignOutClick } from "../../utils/Firebase/firebase";

export default function AuthPage(){
  return(
    <div className="p-4 space-x-4">
      <button className="button-primary" onClick={handleAuthClick}>Sign in</button>
      <button className="button-secondary" onClick={handleSignOutClick}>Sign out</button>
    </div>
  )
}