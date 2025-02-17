import '../../index.css';
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';

const About = () => {
    window.addEventListener("scroll", () => {
        let sectionAbout = document.querySelector(".article-about section");
        let position = sectionAbout.getBoundingClientRect().top;

        if(position < window.innerHeight * 0.8){
            gsap.to(".article-about section", {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 3,
            })
        }
    })

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
            <meta property="og:url" content="https://viercatech.com.br/#nav-about"/>
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
                    "url": "https://www.viercatech.com.br/#nav-about",
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
        <article className="article-about" id="nav-about">
            <section>
                <div className="title-about">
                    <h2>Sobre nós</h2>
                </div>
                <div className="content-about">
                    <div className="text-about">
                        <p>
                            A <strong>VierCa Tech</strong> é uma empresa inovadora no setor de <strong>tecnologia</strong>, 
                            fundada em dezembro de 2024. A empresa nasceu da paixão pela tecnologia. 
                        </p>

                        <p>
                            Acompanhando as <strong>inovações tecnológicas</strong> que surgem em todo o mundo, 
                            a VierCa Tech tem como objetivo impulsionar o negócio de empresas e microempreendedores 
                            por meio de <strong>soluções tecnológicas</strong> personalizadas, oferecendo o que há de mais moderno e 
                            atual no mercado.
                        </p>
                    </div>
                    <div className="info-about">
                        
                        <div className="item-about">
                            <span>3+</span>
                            <h4>Clientes satisfeitos</h4>
                        </div>
                        <div className="item-about">
                            <span>1</span>
                            <h4>Tempo no mercado (ano)</h4>
                        </div>
                        <div className="item-about">
                            <span>3+</span>
                            <h4>Projetos realizados</h4>
                        </div>

                    </div>
                </div>
            </section>
        </article>
        </>
    )
}

export default About;
