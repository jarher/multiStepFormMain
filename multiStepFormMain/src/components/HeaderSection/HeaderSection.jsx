/* eslint-disable react/prop-types */
import "./headerSection.css";

export default function HeaderSection({title, description}) {
  return (
    <>
      <h1 className="sectionTitle">{title}</h1>
      <p className="sectionDescription">{description}</p>
    </>
  );
}
