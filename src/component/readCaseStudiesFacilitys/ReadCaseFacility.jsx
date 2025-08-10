import "./readCaseFacility.css";

const ReadCaseFacility = ({ pragraph, heading }) => {
  return (
    <div className="readCaseFacility">
      <p className="paragraph">{pragraph}</p>
      <h6 className="heading6">{heading}</h6>
    </div>
  );
};

export default ReadCaseFacility;
