import { FC } from "react";

interface InputProps {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  type: string;
  isMultiLine?: boolean;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  isMultiLine = false,
}) => {
  const styles = {
    border: "none",
    outline: "none",
    padding: "10px 20px",
    borderRadius: "2rem",
    boxShadow: "0px 5px 20px 0px rgb(69 67 96 / 10%);",
    color: "#454360",
    backgroundColor: "white",
  };

  if (!isMultiLine)
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-100"
        placeholder={placeholder}
        style={styles}
      />
    );
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="w-100"
      placeholder={placeholder}
      rows={5}
      style={styles}
    />
  );
};

export default Input;
