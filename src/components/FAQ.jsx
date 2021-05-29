import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Dropdown from "./Dropdown";
import Animated from "react-mount-animation";

const base = "http://localhost:5050/";

export default function FAQ(props) {
  const { setTitle } = props;
  const [faqList, setfaqList] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [isMounted, setisMounted] = useState(false);
  const mountAnimation = `60% {transform: translate(0px, 0)} 85% {transform: translate(10px, 0)}`;
  let delay = 0;

  const initialLoad = async () => {
    setisMounted(true);
    setTitle("FAQ");
    setSpinner(true);
    const getList = await axios.get(base + "list");
    setfaqList(getList.data);
    setSpinner(false);
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <Animated.div show={isMounted} mountAnim={mountAnimation}>
      <div className="d-flex flex-column gap-3 textStyle1 faqWrapper">
        {spinner ? (
          <div className="spinnerWrapper">
            <Spinner animation="border" variant="dark" />
          </div>
        ) : (
          faqList.map((faq) => {
            delay = delay + 0.15;
            return <Dropdown key={faq.question} faq={faq} delay={delay} />;
          })
        )}
      </div>
    </Animated.div>
  );
}
