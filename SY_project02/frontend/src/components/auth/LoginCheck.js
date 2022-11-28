import axios from "axios";
import React, { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";

const LoginCheck = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    axios.get("http://localhost:8001/join", {}).then((result) => {
      setdata(result.data.data);
    });
  }, []);

  const loginHandler = (e) => {
    console.log(data);
    const p1 = [];
    const p2 = [];
    e.preventDefault();

    data.forEach((value) => p1.push(value.email));
    data.forEach((value) => p2.push(value.password));
    console.log(p1);
    console.log(p2);
    if (p1.includes(email)) {
      let num = p1.indexOf(email);
      if (password === p2[num]) {
        console.log("로그인 성공");
        navigate("/");
      } else {
        console.log("비밀번호가 다릅니다");
      }
    } else {
      console.log("아이디가 없습니다.");
    }
  };

  return (
    <div>
      <Link to="/">;</Link>

      <form>
        <label htmlFor="name">ID: </label>
        <input type="text" value={email} onChange={emailChangeHandler} />
        <br />
        <label htmlFor="name">PW:</label>
        <input
          type="password"
          value={password}
          onChange={passwordChangeHandler}
        />
        <button onClick={loginHandler}>확인</button>
      </form>
    </div>
  );
};

export default LoginCheck;
