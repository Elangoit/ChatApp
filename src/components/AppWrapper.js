import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";


import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1> Online LiveChat  </h1>
        <h5> LiveChat is a complete online service platform that chat with your friends</h5>
      </div>

      <div className="app-container">{children}</div>
{isAuth && (
  <div className="sign-out">
    <button className="btn btn-danger" onClick={signUserOut}> Sign Out</button>
  </div>
)}

      <footer>
        <div className="rights">
       <b> © ElAnGo 2023. All rights reserved.</b>

        </div>
    </footer>
    </div>
  );
};