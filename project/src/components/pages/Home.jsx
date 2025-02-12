import '../../index.css';
import ImgMeca from '../../assets/img/clients/site-meca.png';
import ImgAlli from '../../assets/img/clients/site-alli.png';
import ImgLeo from '../../assets/img/clients/site-leonardo.png';
import { useState } from 'react';
import { Helmet } from 'react-helmet';



const Home = () =>{

    const itemSlide = [
        {
            id: 1,
            img: ImgAlli,
            title: " Cliente - ALLI Contabilidade ",
            alt: " Segunda foto slider - Cliente ALLI Contabilidade",
            link: "https://alli-contabilidade.netlify.app/",
        },
        {
            id: 2,
            img: ImgMeca,
            title: " Cliente - Meca Importações ",
            alt: " Primeira foto slider - Cliente Meca Importações ",
            link: "https://www.mecaimportacoes.com.br/",
        },
        {
            id: 3,
            img: ImgLeo,
            title: " Portfólio - Leonardo Vieira ",
            alt: " Terceira foto slider - Portfólio de Leonardo",
            link: "https://leonardovieira.netlify.app/",
        },
    ];

    const totalSlides = Math.ceil(itemSlide.length / 1);

    const [slideClients, setSlideClients] = useState(0);
    const [effectTransition, setEffectTransition] = useState(false);
    
    const nextSlide = () =>{
        if (effectTransition) return; // Evita múltiplos cliques durante a transição
        setEffectTransition(true); // Inicia a transição

        // Aplica o efeito de fade-out na imagem atual
        setTimeout(() => {
            setSlideClients((prevSlide) => (prevSlide + 1) % totalSlides);
            setEffectTransition(false); // Finaliza a transição
        }, 1000); // Tempo igual à duração da transição no CSS
    };

    return(
        <>
            <Helmet>
                <meta name="description" content="A Vierca Tech oferece soluções completas em desenvolvimento web, suporte e assistência técnica." />
                <meta name="keywords" content="e-commerce, loja virtual, landing page, desenvolvedor frontend, desenvolvedor, sistemas web, SEO, marketing digital,front-end, desenvolvimento web, criação de sites, sistemas personalizados, vierca tech, viercatech, assistência técnica, suporte técnico, técnico de informática, manutenção, notebook, computador, manutenção de computador, manutenção de notebook, VierCa Tech" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Vierca Tech" />

                <meta property="og:title" content="VierCa Tech - Desenvolvimento Web e Assistência técnica" />
                <meta property="og:description" content="Desenvolvemos sites, auxiliamos com manutenção de computadores e notebooks."/>
                <meta property="og:image" content="https://viercatech.com.br/VierCa.png"/>
                <meta property="og:url" content="https://viercatech.com.br"/>
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
                        "url": "https://www.viercatech.com.br",
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
        
            <article className="article-home" id="nav-home">                
                <section className="content-home">
                    <div className="slide-home">
                        {itemSlide.slice(slideClients * 1, slideClients * 1 + 1).map((item) => (
                            <div key={item.id} className={`img-slide ${effectTransition ? "fade-out" : "fade-in"}`}> 
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={item.img} className="image-home" alt={item.alt} title={item.title}/> 
                                </a>
                            </div>
                        ))}
                        <div className="button-slide-home">
                            <button onClick={nextSlide} className="next-slide"><i className="mdi mdi-menu-right"></i></button>
                        </div>

                    </div>
                    <div className="text-home">
                    <span>{`<>`}</span>
                        <h1>Desenvolvimento Web & Assistência técnica</h1>
                        <h2>Descubra como podemos ajudar seu negócio a alcançar o sucesso.</h2>
                        <span>{`</>`}</span>
                    </div>
                </section>
            </article>
        </>
    )
}

export default Home;