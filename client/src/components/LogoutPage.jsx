import * as React from "react";
import { Navigate } from "react-router-dom";
import { useUIContext } from "../context/context";
import { toast } from "react-toastify";

const LogoutPage = () => {
  const {setCurrentUser, setUserToken } = useUIContext()
  
  React.useEffect(()=>{
    setCurrentUser(null);
    setUserToken(null);
    toast.success(`Successfully Logged Out!`)
  }, [])
  return <Navigate to="/"/>;
};

export default LogoutPage;