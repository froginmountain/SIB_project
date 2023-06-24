import {SiOpenaigym, clubweb} from 'react-icons/si'

import { AiOutlineUser } from "react-icons/ai"



export const links = [
    {
        name: "홈",
        path: '/'
    },
    // {
    //     name: "소개",
    //     path: '/about'
    // },
    {
        name: "동아리 목록",
        path: '/infoclub'
    },
    {
        name: "동아리 신청",
        path: '/verifyclub'
    },
    // {
    //     name: "커뮤니티",
    //     path: '/board'
    // },
    // {
    //     name: "로그인",
    //     path: '/register'
    // }
]







export const programs = [
    {
        id: 1,
        icon: <AiOutlineUser/>,
        title: "SIB",
        info: "심플한게 베스트.",
        path: "/programs/1"
    },
    {
        id: 2,
        icon: <AiOutlineUser/>,
        title: "GoKakao",
        info: "교내 코딩 전문 동아리입니다.",
        path: "/programs/2"
    },
    {
        id: 3,
        icon: <AiOutlineUser/>,
        title: "전남대 총동아리",
        info: "모든 동아리들의 정보를 가지고 있습니다.",
        path: "/programs/3"
    },
    {
        id: 4,
        icon: <AiOutlineUser/>,
        title: "GG",
        info: "교내 게임 모임 동아리입니다.",
        path: "/programs/4"
    }
]

export const values = [
    {
        id: 1,
        icon: <AiOutlineUser/>,
        title: "Easy",
        desc: "매우 친숙한 인터페이스로 사용하기 쉽습니다."
    },
    {
        id: 2,
        icon: <AiOutlineUser/>,
        title: "Simple",
        desc: "동아리에 대한 일관된 정보를 제공합니다."
    },
    {
        id: 3,
        icon: <AiOutlineUser/>,
        title: "Perfect",
        desc: "동아리에 대한 모든 정보를 완벽하게 제공합니다."
    },
    {
        id: 4,
        icon: <AiOutlineUser/>,
        title: "Usefuly",
        desc: "유용한 정보를 쉽게 접할 수 있습니다."
    },
]








export const faqs = [
    {
        id: 1,
        question: "동아리를 운영중인데 어떻게 등록하나요?",
        answer: "동아리 등록 신청 탭을 클릭하신 후, 구글 폼으로 양식을 작성하여 보내주시면 동아리 인증 검수 후에 동아리가 정상적으로 등록됩니다."
    },
    {
        id: 2,
        question: "동아리에 대한 정보를 어떻게 확인할 수 있나요?",
        answer: "동아리 목록 페이지에서 관심있는 동아리를 클릭하신 후, 해당 동아리의 상세 보기 버튼을 이용하여 이용하실 수 있습니다."
    }
]






const club1 = require('./images/club1.jpg')
const club2 = require('./images/club2.jpg')
const club3 = require('./images/club3.jpg')
const club4 = require('./images/club4.jpg')


export const clublists = [
    {
        id: 1,
        image: club1,
        name: '코딩클럽',
        descr: '새로운 어플리케이션을 개발할 사람을 모집합니다. 실력 상관없이 열심히 할 사람은 모두 환영!',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/']
    },
    {
        id: 2,
        image: club2,
        name: '음사모',
        descr: '음악을 사랑하는 사람의 모임, 밴드활동이나 음악을 듣기 좋아하는 누구나 모두 가능',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/']
    },
    {
        id: 3,
        image: club3,
        name: 'LOAONE',
        descr: '교내 로스트아크 를 플레이하는 모든 학생들은 신청하세요! / 다른 게임도 플레이합니다',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/']
    },
    {
        id: 4,
        image: club4,
        name: 'First Travle',
        descr: '정기적으로 각 지역을 탐방하는 모험을 즐기는 동아리입니다.',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/']
    }

]