import port1 from "../../assets/port1.jpg"
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.jpg';
import port4 from '../../assets/port4.png';
import port5 from '../../assets/port5.jpg';
import port6 from '../../assets/port6.jpg';
import port7 from '../../assets/port7.jpg';
import "./Portfolio.scss"

const portfolios = [
    {
        id: 1,
        category: 'React Js',
        link1: 'https://amartya982.github.io/blog/',
        link2: 'https://amartya982.github.io/blog/',
        icon1: 'G',
        icon2: 'Y',
        image: port1,
        title: 'Blog'
    },
    {
        id: 2,
        category: 'React Js',
        link1: 'https://amartya982.github.io/spotify_clone/',
        
        icon1: 'G',
        icon2: 'Y',
        image: port2,
        title: 'spotify clone'
    },
    {
        id: 3,
        category: 'React Js',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port3,
        title: 'Reading list'
    },
    {
        id: 4,
        category: 'Javascript',
        link1: 'https://tictoe.vercel.app/',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port4,
        title: 'Tic Tac Toe'
    },
    {
        id: 5,
        category: 'React Js',
        link1: 'https://react-restaurant-website-v1-main-ten.vercel.app/',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port5,
        title: 'Restaurant Website'
    },
    {
        id: 6,
        category: 'React Js',
        link1: 'https://weather-app-eosin-two.vercel.app/',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port6,
        title: 'Weather Api'
    },
    {
        id: 7,
        category: 'React Js',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port7,
        title: 'Amazon Clone'
    }
]

export default portfolios;