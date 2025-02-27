import { BrowserRouter, Routes, Route } from "react-router";
import AuthPage from "../pages/AuthPage/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
