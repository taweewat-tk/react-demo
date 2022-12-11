import Arrow from "../../assets/svg/arrow.svg";
import Button from "../../common/base-ui/button-component";
const Login = () => {
  return (
    <div className="container pt-4 max-w-3xl relative h-screen">
      <img src={Arrow} alt="arrow-svg" />
      <div>
        <div className="text-2xl font-semibold my-8 tracking-wider">
          ยินดีต้อนรับกลับมา
        </div>
        <div className="text-lg font-normal text-black/70 mb-2">
          เข้าสู่ระบบโดยใช้หมายเลขโทรศัพท์
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="border-black/5 border-2 border-solid rounded-md py-3 text-lg w-full mb-2"
          />
        </div>
        <Button bgColor="#f9a401">ดำเนินการต่อ</Button>
        <div className="text-center text-black/30">
          โดยระบบจะส่ง sms เพื่อยืนยันในขั้นตอนถัดไป
        </div>
      </div>

      <div className="container absolute inset-x-0 bottom-0 w-full ">
        <div className="text-center text-black/30 mb-5">หรือ</div>
        <Button bgColor="#07ca48">เข้าสู่ระบบโดยใช้ Line</Button>
        <Button bgColor="#267dfd">เข้าสู่ระบบโดยใช้ Facebook</Button>
        <div className="text-center">เพิ่งเริ่มใช้ ใช่ไหม</div>
        <div className="text-[#1f6ae6] font-semibold text-xl text-center mb-4">
          สมัครสมาชิก
        </div>
      </div>
    </div>
  );
};
export default Login;
