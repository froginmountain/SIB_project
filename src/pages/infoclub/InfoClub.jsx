import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { clublists } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import Clublist from '../../components/Clublist'
import './infoclub.css'

const InfoClub = () => {
  return (
    <>
      <Header title="동아리 목록" image={HeaderImage}>
        현재 등록된 동아리들에 대한 정보를 제공합니다.
      </Header>
      <section className="clublists">
        <div className="container clublists__container">
          {
            clublists.map(({ id, image, name, descr, socials }) => {
              return <Clublist key={id} image={image} name={name} descr={descr} socials={
                [
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] }
                ]
              } />
            })
          }
        </div>
      </section>
    </>
  )
}

export default InfoClub