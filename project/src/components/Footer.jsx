import '../index.css';
import imgFooter from '../assets/img/VierCa-Tech-logo.png';


const Footer = () =>{
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <div className="footer-logo">
                        <img src={imgFooter} alt="Logo LVC Digital - Footer" title="Logo LVC Digital - Footer"/>
                    </div>
                    <div className="footer-text">
                        <p>Tecnologia e inovação para impulsionar seu negócio com inteligência.</p>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-title">
                        <h2>Navegação</h2>
                    </div>
                    <div className="footer-list">
                        <ul>
                        <li><a href="#nav-home">Home</a></li>
                        <li><a href="#nav-about">Sobre nós</a></li>
                        <li><a href="#nav-services">Serviços</a></li>
                        <li><a href="#nav-clients">Clientes</a></li>
                        <li><a href="#nav-contato">Contato</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-title">
                        <h2>Contate-nos</h2>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li><i className="mdi mdi-whatsapp"></i><a href="https://api.whatsapp.com/send/?phone=5511967381402&text=Ol%C3%A1%20VierCa%20Tech,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">(11) 96738-1402</a></li>
                            <li><i className="mdi mdi-email-outline"></i><a href="mailto:viercatech@gmail.com">viercatech@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-rights">
                    <p><strong>VierCa Tech</strong> - <strong>Desenvolvimento Web e Assistência Técnica - SP &copy; 2025</strong></p>
                    <small><b>Copyright 2025 &copy; VierCa Tech - Todos os direitos reservados.</b></small>
                </div>
            </div>
        </footer>
    )
}

export default Footer;