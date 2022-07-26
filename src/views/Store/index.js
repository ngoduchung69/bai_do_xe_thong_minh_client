import styled from "styled-components";
import { Input, Space } from "antd";
import StoreBox from "./StoreBox";

const { Search } = Input;

const StoresPage = () => {

  return (
    <Wrapper>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={() => {}}
      />
      <StoreBox />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
`;

export default StoresPage;
