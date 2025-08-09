import "./customHeadPra.css";

const CustomHeadPra = ({ custonPragarph, custonHeading }) => {
  return (
    <div>
      <h3 className="heading3 customHeadingEdit">{custonHeading}</h3>
      <p className="pragraph customPragraphEdit">{custonPragarph}</p>
    </div>
  );
};

export default CustomHeadPra;
