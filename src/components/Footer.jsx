import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaDiscord } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    심플한 것이 최고다라는 모토하에 뭉친 SIB 그룹입니다.
                </p>
                <div className="footer__socials">
                    <a href="https://github.com/froginmountain/SIB_project" target="_blank" rel='noreferrer noopener'><FaGithub/></a>
                    <a href="https://discord.gg/zm6ntnuy" target="_blank" rel='noreferrer noopener'><FaDiscord/></a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>주요 기능</h4>
                <Link to ="/infoclub">동아리 목록</Link>
                <Link to ="https://docs.google.com/forms/d/e/1FAIpQLSf7zxX8qEWz47YI3nw5sx4eGqOfIeYbbiccZfYh4lZtSw1tlw/viewform?usp=sf_link">동아리 신청</Link>
                <Link to ="/board">게시판 (개발중)</Link>
            </article>
            <article>
                <h4>정보</h4>
                <Link to ="/review">동아리 리뷰 (개발중)</Link>
                <Link to ="/sendfix">동아리 정보 수정요청</Link>
                <Link to ="/events">현재 진행중인 이벤트</Link>
                <Link to ="/s"></Link>
            </article>
            <article>
                <h4>연결</h4>
                <Link to ="/contract">소셜 커뮤니티</Link>
                <Link to ="/bugfix">개선사항 제보</Link>
                <Link to ="/faq">고객센터</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 CNU SIP Project &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer