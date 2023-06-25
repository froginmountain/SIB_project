import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../images/logo.png';
import { links, links2 } from '../data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import './navbar.css';
import { useCookies } from 'react-cookie';

const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [tlink, setTlink] = useState(links);
  const [cookies, setCookies, removeCookie] = useCookies(['id']);
  const navigate = useNavigate();

  const cookieDelete = () => {
    removeCookie('id');
    navigate('/');
  };

  useEffect(() => {
    // 쿠키 값 변경 시 tlink 업데이트
    if (document.cookie.includes('id')) {
      const value = document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, '$1');
      if (value !== '') {
        setTlink(links2);
      } else {
        setTlink(links);
      }
    }
  }, []);

  const handleNavLinkClick = (name) => {
    if (name === '로그아웃') {
      cookieDelete();
    }
    setIsNavShowing(false);
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
          {tlink.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active-nav' : '')}
                  onClick={() => handleNavLinkClick(name)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing((prev) => !prev)}>
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
