import { useState } from "react";
import d1 from "../imgs/d1.png";
import d2 from "../imgs/d2.png";
import d3 from "../imgs/d3.png";
import d4 from "../imgs/d4.png";
import d5 from "../imgs/d5.png";
import d6 from "../imgs/d6.png";

export default function Dropdown(props) {
  const { title } = props;
  const [isOpen, setisOpen] = useState(false);
  const arrOfIcons = [d1, d2, d3, d4, d5, d6];
  const handleOpen = (e) => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div className="dropDownWrapper">
        <div className="d-flex justify-content-between titleDiv">
          <div>{title}</div>
          <button
            className="glyphicon glyphicon-menu-down"
            onClick={handleOpen}
          />
        </div>
        <div className={isOpen ? "showQ" : "hideQ"}>
          {title === "Allergen Info" ? (
            <ul className="iconsWrapper">
              {arrOfIcons.map((icon) => {
                return (
                  <li>
                    <img src={icon} className="icons" alt="Doughnuts" />
                    <h5>This is donut</h5>
                  </li>
                );
              })}
            </ul>
          ) : (
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra. Aenean sed adipiscing diam donec adipiscing"
          )}
        </div>
      </div>
    </>
  );
}
