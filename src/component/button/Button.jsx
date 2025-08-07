import "./button.css";

const Button = ({
  children,
  variant = "",
  bgColor,
  textColor,
  width,
  height,
  borderRadius,
  fontSize,
  className = "",
  ...rest
}) => {
  const coustomStyle = {
    backgroundColor: bgColor,
    color: textColor,
    width: width,
    height: height,
    fontSize: fontSize,
  };

  return (
    <a
      href="#"
      variant={variant}
      style={coustomStyle}
      className={`${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Button;
