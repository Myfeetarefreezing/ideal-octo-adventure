import { useEffect } from "react";
import Dropdown from "./Dropdown";

export default function FAQ(props) {
  const { setTitle } = props;
  useEffect(() => {
    setTitle("FAQ");
  });

  const arrOfTitles = [
    "Allergen Info",
    "Wheres my donut",
    "who is Samuel L. Jackson",
    "who is speedy gonzales",
    "How old am I",
  ];

  return (
    <>
      <div className="d-flex flex-column gap-3 faqWrapper">
        {arrOfTitles.map((title) => {
          return <Dropdown title={title} />;
        })}
      </div>
    </>
  );
}
