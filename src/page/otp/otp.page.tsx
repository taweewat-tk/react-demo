import ThaiFlag from "../../assets/img/thai-flag.webp";
import Button from "../../common/base-ui/button.component";
import InputNumber from "../../common/base-ui/input-number.component";
import TextLink from "../../common/base-ui/text-link.component";
import Title from "../../common/base-ui/title.component";

const Otp = () => {
  const phoneNumber = sessionStorage.getItem("phoneNumber");

  return (
    <>
      <Title>ยืนยันรหัส 6 หลัก</Title>
      <div className="text-base font-light text-black/90 mb-2">
        โปรดกรอกรหัสยืนยัน 6 หลักที่ส่งไปยังหมายเลข
      </div>
      <div className="flex items-center mb-4">
        <div>
          <img src={ThaiFlag} alt="thai-flag-otp" width={20} />
        </div>
        <a
          href="tel:PHONE_NUM"
          className="text-[#1f6ae6] font-semibold text-lg ml-1"
        >
          +66{phoneNumber}
        </a>
      </div>
      <div className="flex gap-2 mb-4">
        {[...Array(6)].map((_) => (
          <InputNumber />
        ))}
      </div>
      <Button type="submit" bgColor="#f9a401">
        เข้าสู่ระบบ
      </Button>
      <div className="flex items-center justify-center">
        <div className="mr-2 text-base font-light">ยังไม่ได้รับรหัสใช่ไหม</div>
        <TextLink>ขอรหัสใหม่</TextLink>
      </div>
      <div className="container absolute inset-x-0 bottom-0 w-full ">
        <div className="text-center mb-4 text-base font-light">
          เมื่อเข้าสู่ระบบคุณได้ยอมรับ
          เงื่อนไขและข้อตกลงและนโยบายความเป็นส่วนตัวของ ปลาวาฬ แล้ว
        </div>
      </div>
    </>
  );
};
export default Otp;
