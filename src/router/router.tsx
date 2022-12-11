import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE } from "../common/constant/routes";
import Login from "../page/login/login.page";
import Otp from "../page/otp/otp.page";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route path={ROUTE.OTP} element={<Otp />} />
      <Route path={"*"} element={<Navigate to={ROUTE.LOGIN} replace />} />
    </Routes>
  );
};
export default Router;
