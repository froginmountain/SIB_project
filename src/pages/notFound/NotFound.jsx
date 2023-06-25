import {Link} from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>페이지를 찾을 수 없습니다. 알수없는 오류 : 404</h2>
        <Link to="/" className='btn'>홈으로 이동</Link>
      </div>
    </section>
  )
}

export default NotFound