import styled from "styled-components";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const IndividualStore = ({ chosenStore }) => {
  const { imageSrc, storeName, address } = chosenStore;
  return (
    <>
      <StyledCard title="Information" type="inner" style={{ width: "90%" }}>
        <Wrapper>
          <ImgBox>
            <Img src={imageSrc} />
          </ImgBox>
          <ContentBox>
            <h1>{storeName}</h1>
            <Address>{address}</Address>
          </ContentBox>
        </Wrapper>
      </StyledCard>
      <StyledCard
        type="inner"
        title="Parking"
        style={{ width: "90%" }}
        extra={<a href="#">2/6</a>}
      >
        <Container>
          <CarBox>
            <PlusOutlined />
          </CarBox>
        </Container>
      </StyledCard>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  width: 20%;
  height: 400px;
  cursor: pointer;
`;

const StyledCard = styled(Card)`
  width: 90%;
  margin: 20px;
`;

const Address = styled.div`
  color: lightgray;
`;

const ContentBox = styled.div`
  padding: 20px;
`;

const Img = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 20px;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export default IndividualStore;
