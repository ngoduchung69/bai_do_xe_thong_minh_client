import { ButtonContainer, Error } from "../../assets/styles/home/home-styles";
import TextBox from "../../components/TextBox";
import SelectBox from "../../components/SelectBox";
import ButtonBox from "../../components/ButtonBox";
import useLocalStorage from "../../customHooks/useLocalStorage";
import { useContext, useState } from "react";
import { UserContext } from "../../PageContext";
import { useNavigate } from "react-router-dom";

const Form = ({ changeScreenStatus }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUserType, userType } = useContext(UserContext);

  const handleNext = () => {
    if (name == "store" && password == "1") {
      setUserType("store");
    } else if (name == "customer" && password == "1") {
      setUserType("customer");
    }
    navigate("/stores");
  };

  return (
    <>
      <TextBox
        onChange={(value) => setName(value)}
        feedbackStatus={{}}
        id={"name"}
        label={"Name"}
      />
      <br />
      <TextBox
        onChange={(value) => setPassword(value)}
        feedbackStatus={{}}
        id={"password"}
        label={"Password"}
        type={"password"}
      />
      <ButtonContainer>
        <ButtonBox onClick={handleNext} content={"Next"} />
      </ButtonContainer>
    </>
  );
};

export default Form;
