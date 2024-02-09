import { Outlet, Navigate, useLocation} from "react-router-dom";
import AuthConsumer from "../auth/AuthProvider";

function PrivateRoutes({children}){
  const [authed] = AuthConsumer();
  const location = useLocation()

  return authed.auth === true ? (
    children
  ) : (
    <Navigate to={"/login"} replace={{path: location.pathname}}/>
  )
  // let auth = {'token': false};
  // return (
  //   auth.token ? <Outlet /> : <Navigate to="/auth" />
  // )
}

export default PrivateRoutes