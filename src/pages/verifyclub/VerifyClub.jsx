import './verifyClub.css'
import {Link} from 'react-router-dom'
import Image from "../../images/clubinfo.png"

const VerifyClub = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
        <h4>동아리 정보 등록 신청</h4>
        <h1>활동하는 동아리의 정보를 등록하고 공유하세요!</h1>
        <p>

        </p>
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf7zxX8qEWz47YI3nw5sx4eGqOfIeYbbiccZfYh4lZtSw1tlw/viewform?usp=sf_link" className='btn lg'>등록하기</Link>
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

export default VerifyClub