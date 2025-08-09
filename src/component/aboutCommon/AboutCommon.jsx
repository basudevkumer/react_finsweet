import "./aboutCommon.css";

const AboutCommon = ({pragraphOne,heading,pragraphTwo}) => {
  return (
    <div className="aboutCommonMain">
      <p className={`pragraph `}>{pragraphOne}</p>
      <h3 className="heading3 aboutCommonHeading">{heading}</h3>
       <p className={`pragraph `}>{pragraphTwo}</p>
    </div>
  );
};

export default AboutCommon;
