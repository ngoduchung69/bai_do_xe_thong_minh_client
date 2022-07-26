import { Wrapper, HeaderBox, MenuBox, MenuItem } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { UserProvider } from "../../PageContext";

const HomePageLayout = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = (url) => {
    navigate(url);
  };
  return (
    <Wrapper>
      <UserProvider>
        <HeaderBox>
          <MenuBox>
            <MenuItem
              onClick={() => redirect("/stores")}
              selected={location.pathname === "/stores"}
            >
              Stores
            </MenuItem>
            <MenuItem
              onClick={() => redirect("/consents")}
              selected={location.pathname === "/consents"}
            >
              Consents
            </MenuItem>
          </MenuBox>
        </HeaderBox>
        {props.children}
      </UserProvider>
    </Wrapper>
  );
};

export default HomePageLayout;
