import '../../index.css';
import { Helmet } from 'react-helmet';


import item1 from '../../assets/img/services-page/item-service1.png';
import item2 from '../../assets/img/services-page/item-service2.png';
import item3 from '../../assets/img/services-page/item-service3.png';
import item4 from '../../assets/img/services-page/item-service4.png';

const Services = () =>{
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
            <meta property="og:url" content="https://viercatech.com.br/#nav-services"/>
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
                    "url": "https://www.viercatech.com.br/#nav-services",
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
    
        <article className="article-services" id="nav-services">
            <section>
                <div className="title-services">
                    <h2>Serviços</h2>
                </div>
                <div className="content-services">
                    <div className="service-item">
                        <div className="content-item-service">
                            <div className="icon-item-service">
                                <i className="mdi mdi-face-agent"></i>
                            </div>
                            <div className="text-item-service">
                                <h3>Suporte técnico</h3>
                                <ul>
                                    <li><strong>Manutenção de computadores/notebooks;</strong></li>
                                    <li><strong>Trocas de peças;</strong></li>
                                    <li><strong>Instalações de softwares (Office 2013, 2016, e 365);</strong></li>
                                    <li><strong>Formatação de SO (Linux e Windows);</strong></li>
                                    <li><strong>Otimizações de desempenho.</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="img-item-service">
                            <img src={item1} alt="Imagem Item - Tráfego pago" title="Imagem Item - Tráfego pago" />
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="content-item-service">
                            <div className="icon-item-service">
                                <i className="mdi mdi-xml"></i>
                            </div>
                            <div className="text-item-service">
                                <h3>Desenvolvimento de Sites</h3>
                                <ul>
                                    <li><strong>Sites responsivos;</strong></li>
                                    <li><strong>Landing pages otimizadas;</strong></li>
                                    <li><strong>Lojas virtuais (e-commerce);</strong></li>
                                    <li><strong>Portfólios online;</strong></li>
                                    <li><strong>Foco em SEO;</strong></li>
                                    <li><strong>Tecnologias front-end / back-end / banco de dados;</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="img-item-service">
                            <img src={item3} alt="Imagem Item - Desenvolvimento Web" title="Imagem Item - Desenvolvimento Web" />
                        </div>
                    </div>

                    <div className="service-item">
                        <div className="content-item-service">
                            <div className="icon-item-service">
                                <i className="mdi mdi-palette"></i>                                
                            </div>
                            <div className="text-item-service">
                                <h3>Designer</h3>
                                <ul>
                                    <li><strong>Desenvolvimento de artes para campanhas publicitárias;</strong></li>
                                    <li><strong>Criação de logos, banners e identidades visuais;</strong></li>
                                    <li><strong>Design de capas para redes sociais (Facebook, YouTube, LinkedIn, etc.);</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="img-item-service">
                            <img src={item2} alt="Imagem Item - Designer" title="Imagem Item - Designer" />
                        </div>
                    </div>

                    <div className="service-item">
                        <div className="content-item-service">
                            <div className="icon-item-service">
                                <i className="mdi mdi-advertisements"></i>
                            </div>
                            <div className="text-item-service">
                                <h3>Tráfego pago - Meta Ads & Google Ads</h3>
                                <ul>
                                    <li><strong>Planejamento de campanhas;</strong></li>
                                    <li><strong>Criação e configuração de anúncios;</strong></li>
                                    <li><strong>Segmentação de público;</strong></li>
                                    <li><strong>Gestão e otimização diária das campanhas;</strong></li>
                                    <li><strong>Análises e relatórios de performance.</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="img-item-service">
                            <img src={item4} alt="Teste" title="Testee" />
                        </div>
                    </div>
                </div>
            </section>
        </article>
        </>
    )
}

export default Services;
