import { useEffect, useRef, useState } from "react";


const Projects = () => {

    const [expandedProject, setExpandedProject] = useState(null);

    const projectItem = [
        {
            id: 1,
            cliente: "ALLI Contabilidade",
            img: "/src/assets/img/clients/site-alli-project.webp",
            titleImg: "Projeto para ALLI Contabilidade",
            alt: "Foto Home Page da ALLI Contabilidade",
            info1: `Landing Page desenvolvido para a abertura da empresa ALLI Contabilidade.`,
            info2: "31 de Janeiro de 2025",
            site: "https://www.allicontabilidade.com.br/",
            nameSite: "www.allicontabilidade.com.br",
            stacks: "HTML5, CSS3, React e JavaScript.",
            HTML5: "mdi mdi-language-html5",
            CSS3: "mdi mdi-language-css3",
            JS: "mdi mdi-language-javascript",
            REACT: "mdi mdi-react"
        },
        {
            id: 2,
            cliente: "Meca Importações",
            img: "/src/assets/img/clients/site-meca-project.webp",
            titleImg: "Projeto para Meca Importações",
            alt: "Foto Home Page da Meca Importações",
            info1: `Landing Page desenvolvido para empresa Meca Importações.`,
            info2: "16 de Janeiro de 2025",
            site: "https://www.mecaimportacoes.com.br/",
            nameSite: "www.mecaimportacoes.com.br",
            stacks: "HTML5, CSS3, React, JavaScript, GSAP, APIs: ViaCEP e ReCAPTCHA.",
            HTML5: "mdi mdi-language-html5",
            CSS3: "mdi mdi-language-css3",
            JS: "mdi mdi-language-javascript",
            REACT: "mdi mdi-react"
        },
        {
            id: 3,
            cliente: "RX Consultoria",
            img: "/src/assets/img/clients/site-rx-project.webp",
            titleImg: "Projeto para RX Consultoria",
            alt: "Foto Home Page da RX Consultoria",
            info1: `Landing Page desenvolvido para empresa RX Consultoria.`,
            info2: "5 de Abril de 2025",
            site: "https://www.rxconsultoria.com.br/",
            nameSite: "www.rxconsultoria.com.br",
            stacks: "Desenvolvido via plataforma WIX.",
            XML: "mdi mdi-xml"
        },
        {
            id: 4,
            cliente: "Lustra Ômega",
            img: "/src/assets/img/clients/site-lustra-project.webp",
            titleImg: "Projeto para Lustra Ômega",
            alt: "Foto Home Page da Lustra Ômega",
            info1: `Landing Page desenvolvido para empresa Lustra Ômega.`,
            info2: "14 de Abril de 2025",
            site: "https://www.lustraomega.com.br/",
            nameSite: "www.lustraomega.com.br",
            stacks: "HTML5, CSS3, JavaScript, API: ReCAPTCHA.",
            HTML5: "mdi mdi-language-html5",
            CSS3: "mdi mdi-language-css3",
            JS: "mdi mdi-language-javascript"
        },
        {
            id: 5,
            cliente: "LVC Agência",
            img: "/src/assets/img/clients/site-lvc-project.webp",
            titleImg: "Projeto de Ebook para LVC Agência",
            alt: "Foto Home Page do Ebook para LVC Agência",
            info1: `Landing Page de Ebook desenvolvido para empresa LVC Agência.`,
            info2: "01 de Maio de 2025",
            site: "https://planejamento-e-habitos-para-vencer.netlify.app",
            nameSite: "Acesse o site aqui!",
            stacks: "HTML5, CSS3, JavaScript",
            HTML5: "mdi mdi-language-html5",
            CSS3: "mdi mdi-language-css3",
            JS: "mdi mdi-language-javascript"
        },
    ];


    const expandedRef = useRef(null);

    useEffect(() => {
        if(expandedProject && expandedRef.current) {
            expandedRef.current.scrollIntoView({ behavior: "smooth", block: "center"});
        }
    }, [expandedProject]);

    return(
        <article className="article-projects" id="nav-projects">
            <section>
                <div className="title-projects">
                    <h2>Projetos recentes</h2>
                </div>
                <div className="content-projects">
                    {projectItem.map((item) => (
                        <div className="item-project" key={item.id}>
                            <img 
                                src={item.img} 
                                alt={item.alt} 
                                title={item.titleImg} 
                                loading="lazy"
                            />
                            <h3>{item.cliente}</h3>
                            <span>
                                {item.HTML5 && <i className={item.HTML5}></i>}
                                {item.CSS3 && <i className={item.CSS3}></i>}
                                {item.JS && <i className={item.JS}></i>}
                                {item.REACT && <i className={item.REACT}></i>}
                                {item.XML && <i className={item.XML}></i>}
                            </span>
                            <div className="description">
                                <p>{item.info2}</p>
                                <button onClick={() => setExpandedProject(item)}>Ver mais</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {expandedProject &&(
                <div className="project-expanded" ref={expandedRef}>
                    <div className="container-item">
                        <div className="close">
                            <button onClick={() => setExpandedProject(null)}>X</button>
                        </div>
                        <div className="header-item">
                            <h2>{expandedProject.cliente}</h2>
                        </div>
                        <div className="content-item">
                            <div className="img-project">
                                <img src={expandedProject.img} title={expandedProject.titleImg} alt={expandedProject.alt} loading="lazy" />
                            </div>
                            <div className="text-project">
                                <h3>Informações do projeto: </h3>
                                <p>{expandedProject.info1}</p>
                                <h3>Detalhes do projeto: </h3>
                                <p><strong>Tecnologias: </strong> {expandedProject.stacks}</p>
                                <p><strong>Data: </strong> {expandedProject.info2}</p>
                                <p><strong>Site: </strong> <a href={expandedProject.site} target="_blank" rel="noopener noreferrer">{expandedProject.nameSite}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </article>
    )
}

export default Projects;