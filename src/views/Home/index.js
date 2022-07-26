import {
  Container,
  Title,
  Wrapper,
} from "../../assets/styles/home/home-styles";
import { useState } from "react";
import Form from "./Form";
import ReceiveSpeech from "./ReceiveSpeech";

const HomePage = () => {
  const [screenStatus, setScreenStatus] = useState(false);
  const changeScreenStatus = () => {
    setScreenStatus(!screenStatus)
  }
  return (
    <Wrapper> 
      <Container>
        <Title>Login</Title>
          <Form changeScreenStatus={changeScreenStatus} />
      </Container>
    </Wrapper>
  );
};

export default HomePage;
