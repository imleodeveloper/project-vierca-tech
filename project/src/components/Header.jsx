import '../index.css';
import imgHeader from '../assets/img/VierCa-Tech-logo.webp';
import { useLayoutEffect , useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Header = () =>{


    const [isMobile, setIsMobile] = useState(false);

    const toggleActive = () => {
        setIsMobile(!isMobile);
    };
    const closeMenu = () => {
        setIsMobile(false);
    };

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".info-nav",{
            x: 0,
            y: -100,
            opacity: 0,
            rotate: "0deg",
            duration: 1,
            display: "none",
            scrollTrigger:{
                trigger: ".article-home",
                scrub: true,
                //markers: true,
                start: "top 100px",
                end: "bottom 500px",
            }
        });
    })

    return(
        <header>

            <div className="nav-fixed">
                <nav>
                    <div className="logo-nav">
                        <img src={imgHeader} alt="Logo VierCa Tech - Header" title="Logo VierCa Tech" />
                    </div>         

                    <div className="bar-nav">
                        <div className={`toggle-nav ${isMobile ? "active" : ""}`} onClick={toggleActive}>
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <div className="line-3"></div>
                        </div>
                        <ul className={isMobile ? "menu-mobile active" : "menu-mobile"} onMouseLeave={toggleActive}>
                            <li>
                                <a href="#nav-home" className="link-nav" onClick={closeMenu}>Home</a>
                            </li>                    
                        
                            <li>
                                <a href="#nav-about" className="link-nav" onClick={closeMenu}>Sobre nós</a>
                            </li> 

                            <li>
                                <a href="#nav-services" className="link-nav" onClick={closeMenu}>Serviços</a>
                            </li>                   
                        
                            <li>
                                <a href="#nav-clients" className="link-nav" onClick={closeMenu}>Clientes</a>
                            </li>                
                        
                            <li>
                                <a href="#nav-contato" className="link-nav" onClick={closeMenu}>Contato</a>
                            </li>
                        </ul>
                    </div>         
                </nav>
                <div className="info-nav">
                    <div className="div-info-nav">
                        <ul>
                            <li><i className="mdi mdi-email"></i><a href="mailto:viercatech@gmail.com">viercatech@gmail.com</a></li>
                            <li><i className="mdi mdi-phone-classic"></i><a href="tel:+5511967381402" target="_blank" rel="noopener noreferrer">(11) 96738-1402</a></li>
                        </ul>
                    </div>
                    <div className="social-info-nav">
                        <ul>
                            <li><a href="https://www.linkedin.com/company/106129417/" target="_blank" rel="noopener noreferrer"><i className="mdi mdi-linkedin"></i></a></li>
                            <li><a href="https://api.whatsapp.com/send/?phone=5511967381402&text=Ol%C3%A1%20VierCa%20Tech,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><i className="mdi mdi-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;