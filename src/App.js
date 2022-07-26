import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/Home";
import ConsentsPage from "./views/Consents";
import HomePageLayout from "./Layouts/HomePageLayout";
import { UserProvider } from "./PageContext";
import StoresPage from "./views/Store";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <UserProvider>
              <HomePage />
            </UserProvider>
          }
        />
        <Route
          exact
          path="/stores"
          element={
            <HomePageLayout>
              <StoresPage />
            </HomePageLayout>
          }
        />
        <Route
          path="/consents"
          element={
            <HomePageLayout>
              <ConsentsPage />
            </HomePageLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
