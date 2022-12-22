import { useEffect, useState } from "react";
import AuthErrorPage from "./AuthErrorPage";

function Auth(props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    var logged = localStorage.getItem("loggedUser");
    var loggedUser = JSON.parse(logged);

    if (loggedUser) {
      setIsLogin(true);
    }
  }, []);
  return (
    <>
      {isLogin ? (
        props.children
      ) : (
        <AuthErrorPage/>
      )}
    </>
  );
}

export default Auth;
