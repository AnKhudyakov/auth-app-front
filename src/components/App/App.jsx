import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage variant = "login" />} />
          <Route path="/register" element={<AuthPage variant = "register"/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
