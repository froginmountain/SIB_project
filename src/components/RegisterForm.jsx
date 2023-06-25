import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Image from '../images/main__header.png'
import Session from 'react-session-api';

const RegisterForm = () => {

  function getisLogin() {
    alert(Session.get("isLogin"));
  };

  function setisLogin() {
    let c = !(Session.get("isLogin"));
    Session.set("isLogin", c);
  };

  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  const handlChange = (e) => {
    setAccount({
      ...account,
      [e.target.getAttribute('name')]: e.target.value,
    });
  };

  const onclick = () => {
    const temp = {
      id: account.id,
      pw: account.password
    };
    fetch("http://localhost:5000/insert", {
      method: "post", //통신방법
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(temp),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  const onCheck = () => {
    const temp = {
      id: account.id,
      pw: account.password
    };
    console.log(temp.id);
    console.log(temp.pw);
    fetch("http://localhost:5000/select", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(temp),
    })
      .then(res => res.json())
      .then(json => {
        // 여기서 받은 JSON 데이터를 원하는 대로 처리합니다.
        if(Object.values(json)[0] === 1) {
          console.log("로그인 성공");
          setisLogin();
        }
      })
      .catch((err) => {
        console.log("오류:", err);
      });
  };

  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <div className="login-wrapper">
            <h2>Login</h2>

            <br />
            <input type="text" name="id" placeholder="아이디" onChange={handlChange}></input>
            <br />
            <br />
            <input type="password" name="password" placeholder="패스워드" onChange={handlChange}></input>
            <br />
            <br />
            <input className='login_button' type="submit" value="로그인" onClick={onCheck}></input>
            <button onClick={onCheck}>로그인 확인</button>


            <a className='register_button' href='/about'>회원가입</a>

            <div>
              <input name="text" onChange={handlChange}></input>
              <button onClick={onCheck}>전송</button>
              <br />
              <button onClick={setisLogin}>로그인 설정</button>
              <button onClick={getisLogin}>로그인 상태 확인</button>
              <h3>{account.id}</h3>
            </div>

          </div>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}
export default RegisterForm