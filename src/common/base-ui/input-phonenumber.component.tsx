type InputPhoneNumberProps = {
  onChange: (value: string) => void;
};
const InputPhoneNumber = ({ onChange }: InputPhoneNumberProps) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      className="border-black/5 border-2 border-solid rounded-tr-md rounded-br-md p-2 text-lg w-full font-light"
      minLength={9}
      maxLength={9}
      required
    />
  );
};
export default InputPhoneNumber;
