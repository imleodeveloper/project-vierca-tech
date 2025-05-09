import { useState } from 'react';
import '../../index.css';
import imgAlli from '../../assets/img/clients/alli-contabilidade.webp';
import imgMeca from '../../assets/img/clients/meca-importacoes.webp';
import imgLVC from '../../assets/img/clients/LVC.webp';
import imgLustra from '../../assets/img/clients/lustra-omega.webp';
import imgRx from '../../assets/img/clients/rx-consultoria.webp';
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';



const Clients = () => {

    const clientes = [
        {
            id: 1,
            titulo: 'ALLI Contabilidade',
            img: imgAlli,
            site: 'https://www.allicontabilidade.com.br',
            target: '_blank',
        },
        {
            id: 2,
            titulo: 'Meca Importações',
            img: imgMeca,
            site: 'https://www.mecaimportacoes.com.br',
            target: '_blank',
        },
        {
            id: 3,
            titulo: 'Guia para LVC Agência',
            img: imgLVC,
            site: 'https://planejamento-e-habitos-para-vencer.netlify.app',
            target: '_blank',
        },
        {
            id: 4,
            titulo: 'RX Consultoria',
            img: imgRx,
            site: 'https://www.rxconsultoria.com.br',
            target: '_blank',
        },
        {
            id: 5,
            titulo: 'Lustra Ômega',
            img: imgLustra,
            site: 'https://www.lustraomega.com.br',
            target: '_blank',
        },

    ];
    
    const totalSlides = Math.ceil(clientes.length / 3);

    const [slideClients, setSlideClients] = useState(0);

    const nextSlide = () =>{
        setSlideClients((prevSlide) => (prevSlide + 1) % totalSlides);
    };
    const prevSlide = () => {
        setSlideClients((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    window.addEventListener("scroll", () => {
        let sectionClients = document.querySelector(".article-clients");
        let position = sectionClients.getBoundingClientRect().top;

        if(position < window.innerHeight * 0.7){
            gsap.to(".article-clients section", {
                opacity: 1,
                scale: 1,
                duration: 1,
            })
        }
    })

    return (
        <>
        <Helmet>
            <meta name="description" content="A Vierca Tech oferece soluções completas em desenvolvimento web, suporte e assistência técnica." />
            <meta name="keywords" content="e-commerce, loja virtual, landing page, desenvolvedor frontend, desenvolvedor, sistemas web, SEO, marketing digital,front-end, desenvolvimento web, criação de sites, sistemas personalizados, vierca tech, viercatech, assistência técnica, suporte técnico, técnico de informática, manutenção, notebook, computador, manutenção de computador, manutenção de notebook, VierCa Tech" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Vierca Tech" />

            <meta property="og:title" content="VierCa Tech - Desenvolvimento Web e Assistência técnica" />
            <meta property="og:description" content="Desenvolvemos sites, auxiliamos com manutenção de computadores e notebooks."/>
            <meta property="og:image" content="https://viercatech.com.br/VierCa.png"/>
            <meta property="og:url" content="https://viercatech.com.br/#nav-clients"/>
            <meta property="og:type" content="website"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="VierCa Tech - Desenvolvimento Web e Software"/>
            <meta name="twitter:description" content="Desenvolvimento de sites personalizados para empresas e empreendedores, assistência técnica para empresas e pessoas físicas."/>
            <meta name="twitter:image" content="https://viercatech.com.br/VierCa.png"/>

            <meta name="google-site-verification" content="google-site-verification=y3pzV-PW9l3e2VkPTMg90i4fwP8_dR2qhqFfOno4gtE"/>
            <link rel="canonical" href="https://viercatech.com.br"/>

            {/* JSON-LD para Schema.org */}
            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Vierca Tech",
                    "url": "https://www.viercatech.com.br/#nav-clients",
                    "logo": "https://www.viercatech.com.br/VierCa.png",
                    "description": "A Vierca Tech oferece soluções completas em desenvolvimento web, suporte e assistência técnica.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Travessa Antônio Alsima, 2",
                        "addressLocality": "São Paulo",
                        "addressRegion": "SP",
                        "postalCode": "02321-030",
                        "addressCountry": "BR"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+55 11 96738-1402",
                        "contactType": "customer service",
                        "availableLanguage": "Portuguese"
                    },
                    "sameAs": [
                        "https://www.linkedin.com/company/106129417"
                    ]
                }
                `}
            </script>
        </Helmet>
        <article className="article-clients" id="nav-clients">
            <section>
                <div className="title-clients">
                    <h2>Nossos clientes</h2>
                </div>
                <div className="content-clients">
                    <div className="slide-clients">
                        <div className="item-slide">
                            {clientes.slice(slideClients * 5, slideClients * 5 + 5).map((cliente) => (
                                <div key={cliente.id} className='img-slide'>
                                    <img src={cliente.img} alt={cliente.titulo} title={cliente.titulo}/>
                                    <a href={cliente.site} target={cliente.target} rel="noopener noreferrer"><span>{cliente.titulo}</span></a>
                                </div>
                            ))}
                        </div>
                        {/* <button onClick={prevSlide} className="prev-slide"><i className="mdi mdi-menu-left"></i></button>
                        <button onClick={nextSlide} className="next-slide"><i className="mdi mdi-menu-right"></i></button>*/}
                    </div>
                </div>
            </section>
        </article>
        </>
    )
}

export default Clients;