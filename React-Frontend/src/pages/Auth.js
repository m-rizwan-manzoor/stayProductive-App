import { useEffect, useState } from "react";
import AuthErrorPage from "./AuthErrorPage";

function Auth(props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    var token = localStorage.getItem("token");

    if (token) {
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
