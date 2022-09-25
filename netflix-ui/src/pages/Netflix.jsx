import React, {useState} from 'react'
import Navbar from '../comnponents/Navbar';
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay} from "react-icons/fa";
import { AiOutlineInfoCircle} from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function Netflix() {
    const [isScrolled, setisScrolled] = useState(false);
    window.onscroll = ()=>{
        setisScrolled(window.pageYOffset === 0 ? false: true)
        return () => (window.onscroll == null)
    }
    const navigate = useNavigate();
  return (
    <Container>
        <Navbar isScrolled={isScrolled} />
        <div className="hero">
            <img src={backgroundImage} alt="background-movie" className='background-image' />
        </div>
        <div className="container">
            <div className="logo">
                <img src={MovieLogo} alt="movie-logo" />
            </div>
            <div className="buttons flex">
                <button className='flex j-center a-center' onClick={()=>navigate('/player')}>
                    <FaPlay /> Play
                </button>
                <button className='flex j-center a-center'>
                    <AiOutlineInfoCircle /> More Info
                </button>
            </div>
        </div>
    </Container>
  )
}

export default Netflix
const Container = styled.div`
    background-color: black;
    .hero{
        position: relative;
        .background-image{
            filter: brightness(60%);
        }
        img{
            height: 100vh;
            wifth: 100vw;
            object-fit: cover;
        }
    }    
        .container{
            position: absolute;
            bottom: 5rem;
            .logo{
                img{
                    height: 100%;
                    width: 100%;
                    margin-left: 5rem;
                }
            }
            .buttons{
                margin: 5rem;
                gap: 2rem;
                button{
                    font-size: 1.4rem;
                    gap: 1rem;
                    border-radius: 0.2rem;
                    padding: 0.5rem;
                    padding-left: 2rem;
                    padding-right: 2.4rem;
                    border: none;
                    cursor: pointer;
                    transition: 0.3s ease-in-out;
                    &:hover{
                        opacity: 0.8;
                    }
                    &:nth-of-type(2){
                        background-color: rgba(109,109,110,0.7);
                        color: white;
                        svg{
                            font-size: 1.8rem;
                        }
                    }
                }
            }
        }
`;