import Button from "../../common/base-ui/button.component";
import ThaiFlag from "../../assets/img/thai-flag.webp";
import TextLink from "../../common/base-ui/text-link.component";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../common/constant/routes";
import { useState } from "react";
import InputPhoneNumber from "../../common/base-ui/input-phonenumber.component";
import Title from "../../common/base-ui/title.component";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = () => {
    sessionStorage.setItem("phoneNumber", phoneNumber);
    navigate(ROUTE.OTP);
  };

  return (
    <>
      <div>
        <Title>ยินดีต้อนรับกลับมา</Title>
        <div className="text-base font-light text-black/90 mb-2">
          เข้าสู่ระบบโดยใช้หมายเลขโทรศัพท์
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative flex">
            <div className="border-black/5 border-2 border-r-0 rounded-tl-md rounded-bl-md flex items-center px-3">
              <img src={ThaiFlag} alt="thai-flag-login" width={20} />
              <div className="font-light text-lg ml-1 mr-2">+66</div>
            </div>
            <InputPhoneNumber onChange={setPhoneNumber} />
          </div>
          <Button type="submit" bgColor="#f9a401">
            ดำเนินการต่อ
          </Button>
        </form>
        <div className="text-center text-black/30 font-normal text-base">
          โดยระบบจะส่ง sms เพื่อยืนยันในขั้นตอนถัดไป
        </div>
      </div>
      <div className="container absolute inset-x-0 bottom-0 w-full ">
        <div className="text-center text-black/30 mb-5 font-normal text-base">
          หรือ
        </div>
        <Button bgColor="#07ca48">เข้าสู่ระบบโดยใช้ Line</Button>
        <Button bgColor="#267dfd">เข้าสู่ระบบโดยใช้ Facebook</Button>
        <div className="text-center mt-4 font-light text-black/90">
          เพิ่งเริ่มใช้ ใช่ไหม
        </div>
        <TextLink className="mb-4">สมัครสมาชิก</TextLink>
      </div>
    </>
  );
};
export default Login;
