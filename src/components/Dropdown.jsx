import { useEffect, useState } from "react";
import Animated from "react-mount-animation";

export default function Dropdown(props) {
  const { faq , delay} = props;
  const { answer, question } = faq;
  const [isOpen, setisOpen] = useState(false);
  const [isMounted, setisMounted] = useState(false);
  const mountAnimation = `0% {transform: translate(-100px, 0)} 100% {transform: translate(0px, 0)}`

  const handleOpen = (e) => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    setisMounted(true);
  }, []);

  return (
    <Animated.div show={isMounted} mountAnim={mountAnimation} delay={delay}>
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
    </Animated.div>
  );
}
