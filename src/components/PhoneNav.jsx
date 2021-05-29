import { useHistory } from "react-router-dom";

export default function PhoneNav(props) {
  const { title } = props;
  const franchise = useHistory();

  const handleBack = () => {
    if (title === "FAQ") franchise.push("/");
    else {
      console.log("Yay");
    }
  };

  return (
    <>
      <div className="navWrapper">
        <button
          className="glyphicon glyphicon-menu-left backBtn textStyle1"
          onClick={handleBack}
        />
        <h2 className="textStyle1">{title}</h2>
      </div>
      <div className="divider"></div>
    </>
  );
}
