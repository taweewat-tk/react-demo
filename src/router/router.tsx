import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../common/base-ui/layout";
import { ROUTE } from "../common/constant/routes";
import Login from "../page/login/login.page";
import Otp from "../page/otp/otp.page";

const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTE.LOGIN}
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path={ROUTE.OTP}
        element={
          <Layout>
            <Otp />
          </Layout>
        }
      />
      <Route path={"*"} element={<Navigate to={ROUTE.LOGIN} replace />} />
    </Routes>
  );
};
export default Router;
