import styled from "styled-components";
import { Input, Space } from "antd";
import StoreBox from "./StoreBox";
import { useState } from "react";
import IndividualStore from "./IndivialStore";

const { Search } = Input;

const StoresPage = () => {
  const [storeDisplay, setStoreDisplay] = useState(true);
  const [chosenStore, setChosenStore] = useState({});
  const toggleStoreDisplay = (store) => {
    setStoreDisplay(!storeDisplay);
    setChosenStore(store);
  };
  return (
    <>
      {storeDisplay ? (
        <Wrapper>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={() => {}}
          />
          <StoreBox toggleStoreDisplay={toggleStoreDisplay} />
        </Wrapper>
      ) : (
        <IndividualStore chosenStore={chosenStore} />
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 70%;
`;

export default StoresPage;
