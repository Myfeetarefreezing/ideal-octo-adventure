import ReactModal from "react-modal";
import logo from "../imgs/sk8ter_b0i.png";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Franchise(props) {
  const { setTitle } = props;
  const FAQ = useHistory();

  const [missing, setMissing] = useState(null);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    name: null,
    city: null,
    email: null,
    phone: null,
    note: null,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    const copy = { ...inputs };
    copy[key] = value;
    setInputs(copy);
  };

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMissing(null);
    for (let data in inputs) {
      if (
        inputs[data] === null ||
        inputs[data] === undefined ||
        inputs[data] === ""
      ) {
        const capitalized = capitalize(data)
        setMissing(capitalized);
        handleShow();
        return;
      }
    }
    FAQ.push('/FAQ')
  };

  useEffect(() => {
    setTitle("Franchise");
  }, []);

  const Modalstyle = {
    content: {
      height: "346px",
      width: "346px",
      borderRadius: "194px",
      background: "rgba(255, 250, 249, 1)",
    },
  };

  return (
    <>
      <div className="d-flex flex-column">
        <div className="donutsBox">
          <h3>Join our DONUTS!</h3>
          <p>
            6 Donuts. different flavors for your choice6 Donuts. different 6
            Donuts. different flavors for your choice6 Donuts. different
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column px-2 gap-3 mx-3"
      >
        <input
          onChange={handleChange}
          className="formInput"
          id="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          className="formInput"
          id="city"
          type="text"
          placeholder="City"
        />
        <input
          onChange={handleChange}
          className="formInput"
          id="phone"
          type="number"
          placeholder="number"
        />
        <input
          onChange={handleChange}
          className="formInput"
          id="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          className="formInput"
          id="note"
          type="text"
          placeholder="Add a note"
        />
        <button id="sendButton" type="submit">
          Send
        </button>
      </form>

      <ReactModal
        style={Modalstyle}
        isOpen={show}
        onRequestClose={handleClose}
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <div className="modalContent">
          <img src={logo} alt="helo" />
          <p>{missing} is missing!</p>
        </div>
      </ReactModal>
    </>
  );
}
