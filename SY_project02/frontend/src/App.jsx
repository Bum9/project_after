import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Test } from "./pages/Test";
import { NotFound } from "./pages/NotFound";
import { Login } from "./components/auth/Login";
import { Users } from "./pages/Users";
import LoginCheck from "./components/auth/LoginCheck";
import Detail from "./components/Detail/Detail";
import DetailEach from "./components/DetailEach/DetailEach";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main name={""} />} />
        <Route path="/login" element={<Login name={"login"} />} />
        <Route path="/test" element={<Test name={"test"} />} />
        <Route path="/users" element={<Users name={"users"} />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/loginCheck" element={<LoginCheck name={"login"} />} />
        <Route path="/detail" element={<Detail name={"detail"} />} />
        <Route path="/detail/1" element={<DetailEach name={"detailEach"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
