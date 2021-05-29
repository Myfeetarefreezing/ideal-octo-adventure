import { useState } from "react";


export default function Dropdown(props) {
  const { faq } = props;
  const { answer, question } = faq;
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = (e) => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div className="dropDownWrapper">
        <div className="d-flex justify-content-between titleDiv">
          <div>{question}</div>
          <button
            className="glyphicon glyphicon-menu-down"
            onClick={handleOpen}
          />
        </div>
        <div className={isOpen ? "showQ" : "hideQ"}>
          <div className="iconsWrapper">
            <p>{answer[0]}</p>
            <div key={answer[0]}>
              <img src={answer[1].icon} className="icons" alt="Doughnuts" />
              <h5>{answer[1].text}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
