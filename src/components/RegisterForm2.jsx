import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Image from '../images/main__header.png'
import { useCookies } from 'react-cookie';


const RegisterForm = () => {

  const [id, setId] = useState("");

  // 기존 쿠키 저장
  const [cookies, setCookies, removeCookies] = useCookies(["id"]);

  // 쿠키 저장
  function cookieSave(e) {
    const value = e.target.value;
    console.log("changeID :", value);
    setId(value);
    setCookies("id", value, { path: '/' });
  }

  // 쿠키 삭제
  function cookieDelete() {
    console.log("쿠키 삭제");
    removeCookies("id");
  }

  // 쿠키 불러오기
  function cookieLoad() {
    console.log("쿠키 불러오기");
    console.log(cookies.id);
    return cookies.id;
  }

  const [account, setAccount] = useState({
    id: "",
    password: "",
    major: "",
    email: "",
    club: "",
    clubadmin: 0,
    fulladmin: 0,
  });

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = () => {
    const temp = {
      id: account.id,
      pw: account.password,
      mj: account.major,
      em: account.email,
      clu: account.club,
      clubadmin: account.clubadmin,
      fulladmin: account.fulladmin
    };
    fetch("http://localhost:5000/insert", {
      method: "get",
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

  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <div className="login-wrapper">
            <h2>Register</h2>
            <form action='/' method='get'>
            <br />
            <input type="text" name="id" placeholder="아이디" onChange={handleChange}></input>
            <br />
            <input type="password" name="password" placeholder="패스워드" onChange={handleChange}></input>
            <br />
            <input type="text" name="major" placeholder="전공학과" onChange={handleChange}></input>
            <br />
            <input type="text" name="email" placeholder="이메일" onChange={handleChange}></input>
            <br />
            <input type="text" name="club" placeholder="동아리" onChange={handleChange}></input>
            <br />
            <input className='login_button' type="submit" value="회원가입" onClick={onClick}></input>
            <br />
            </form>

            <a className='register_button' href='/register'>로그인</a>

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

export default RegisterForm;
