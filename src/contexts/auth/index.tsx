import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthType } from "../../types/AuthType";
import { ChildrenNode } from "../../types/ChildrenTypes";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthContext = createContext<AuthType>(null!);

export const AuthProvider = ({ children }: ChildrenNode) => {
  
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const api = useApi();
  const navigate = useNavigate();


  const signIn = async (user: string, password: string) => {
    setLoading(true);
    try {
      const data = await api.signIn(user, password);
      if (
        data.message ===
        "Você será levado para a página de redefinição de senha."
      ) {
        toast.warning(data.message);
        setTimeout(() => {
          navigate("/forget-pass");
        }, 3000);
      }

      if(data.firstLogin) {
        setTokenFsLogin(data.token);
        toast.success(data.message);
        navigate("/first-login")
      }

      if (data.user) {
        setAccessToken(data.user.token)
        setTokenDB(data.user.token);
        setUser(data.user);
        setUserDB(data.user);
        return true;
      }
      setLoading(false);
      setMessage("");
      return false;
    } catch (error: any) {
      
      // toast.error(error.response.data.message);
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setTokenDB("");
    setLoading(false)
    return localStorage.removeItem("auth-user");
  };

  const setUserDB = (user: string) => {
    const auth = localStorage.setItem("auth-user", JSON.stringify(user));
    return auth;
  };

  const setTokenDB = (token: string) => {
    const accessToken = localStorage.setItem("access-token", JSON.stringify(token));
    return accessToken;
  }

  const setTokenFsLogin = (token: string) => {
    const accessToken = localStorage.setItem("token-first-login", JSON.stringify(token));
    return accessToken;
  }

  useEffect(() => {
    const isLoggedUser = localStorage.getItem("auth-user");
    
    if (isLoggedUser) {
      const foundUser = JSON.parse(isLoggedUser);
      setUser(foundUser);
    }
   
  }, []);

  useEffect(() => {

    const haveAtoken = localStorage.getItem("access-token");
   
    if (haveAtoken) {
         const foundToken = JSON.parse(haveAtoken);
         setAccessToken(foundToken);
    }
    
    // Application in production
    if(haveAtoken === "") {
      setUser(null);
      setUserDB("")
      setLoading(false)
    }

    // In 2 hours I gonna tear down user inactive
    setInterval(() => {
      setUser(null);
      setUserDB("")
    }, 3600000 * 2)

  }, [])

  return (
    <AuthContext.Provider value={{ accessToken, user, signIn, loading, logout, message }}>
      {children}
    </AuthContext.Provider>
  );
};
