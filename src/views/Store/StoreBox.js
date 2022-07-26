import styled from "styled-components";

const stores = [
  {
    imageSrc:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
    storeName: "Vì Sao",
    address: "21 Lê Đức Thọ",
    available: true,
  },
  {
    imageSrc:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
    storeName: "Vì Sao",
    address: "21 Lê Đức Thọ",
    available: true,
  },
  {
    imageSrc:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
    storeName: "Vì Sao",
    address: "21 Lê Đức Thọ",
    available: false,
  },
];

const StoreBox = () => {
  return (
    <>
      {stores.map((store) => (
        <Wrapper>
          <ImgBox>
            <Img src={store.imageSrc} />
          </ImgBox>
          <ContentBox>
            <h2>{store.storeName}</h2>
            <Note>{store.address}</Note>
          </ContentBox>
          <AvailableBox>
            <Available color={store.available}>
              {store.available ? "Còn Chỗ" : "Hết Chỗ"}
            </Available>
          </AvailableBox>
        </Wrapper>
      ))}
    </>
  );
};

const AvailableBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Available = styled.div`
  font-size: 20px;
  color: ${(props) => (props.color ? "Green" : "Red")};
`;

const Note = styled.div`
  color: lightgray;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 5px;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 10px 10px 10px 10px;
  background-color: white;
  display: grid;
  grid-template-columns: 10% 70% 20%;
  grid-gap: 20px;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  &:hover {
      box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b;
  }
`;

export default StoreBox;
