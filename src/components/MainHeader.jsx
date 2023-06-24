import {Link} from 'react-router-dom'
import Image from '../images/main__header.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
        <h4>전남대학교 종합 동아리 플랫폼</h4>
        <h1>마음에 드는 동아리에 가입하고 자유롭게 활동하세요!</h1>
        <p>

        </p>
        <Link to="/infoclub" className='btn lg'>찾아보기</Link>
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

export default MainHeader