import '../../index.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

const Contact = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMsg] = useState('');

    function sendEmail(e){
        e.preventDefault();

        if(name === ''|| lastName === '' || email === '' || tel === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }


        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            tel: tel,
        }


        emailjs.send("service_yfyakmp", "template_zwfr6pc", templateParams, "H90Wp8ZZEGzwdeVXJ")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setLastName('')
            setEmail('')
            setTel('')
            setMsg('')
        }, (error) => {
            console.log("ERRO", error)
        })

        alert('Email enviado!','Obrigado pelo envio! Assim que possível entraremos em contato.')
    }

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
            <meta property="og:url" content="https://viercatech.com.br/#nav-contato"/>
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
                    "url": "https://www.viercatech.com.br/#nav-contato",
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
        <article className="article-contact" id="nav-contato">
            <section>
                <div className="title-contact">
                    <h2>Contato</h2>
                </div>
                <div className="content-contact">
                    <div className="forms-contact">
                        <form action="https://formsubmit.co/viercatech@gmail.com" onSubmit={sendEmail} method="POST">
                            <label htmlFor="#nome-form">Seu nome <span>*</span></label>
                            <div className="input-group" id="nome-form">
                                <input 
                                    type="text" 
                                    placeholder="Nome" 
                                    required 
                                    name="Nome"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Sobrenome" 
                                    required 
                                    name="Sobrenome"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                />
                            </div>
                            <label htmlFor="#contact-form">Seus contatos <span>*</span></label>
                            <div className="input-group" id="contact-form">
                                <input 
                                    type="email" 
                                    placeholder="Seu melhor email" 
                                    required name="Email" 
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <input 
                                    type="tel" 
                                    placeholder="Seu melhor telefone" 
                                    required 
                                    name="Telefone" 
                                    onChange={(e) => setTel(e.target.value)}
                                    value={tel}
                                />
                            </div>
                            <label htmlFor="#textarea-form">Sua mensagem <span>*</span></label>
                            <div className="textarea-group" id="textarea-form">
                                <textarea 
                                    placeholder="Nos mande uma mensagem" 
                                    required 
                                    name="Mensagem" 
                                    onChange={(e) => setMsg(e.target.value)}
                                    value={message}
                                />
                            </div>
                            <div className="btn-submit">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                    <div className="info-contact">
                        <div>
                            <a href="https://api.whatsapp.com/send/?phone=5511967381402&text=Ol%C3%A1%20VierCa%20Tech,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                                <i className="mdi mdi-whatsapp"></i>
                                <h3>WhatsApp</h3>
                                <p>(11) 96738-1402</p>
                            </a>
                        </div>
                        <div>
                            <a href="mailto:viercatech@gmail.com">
                                <i className="mdi mdi-email"></i>
                                <h3>E-mail</h3>
                                <p>viercatech@gmail.com</p>
                            </a>
                        </div>
                        <div>
                            <i className="mdi mdi-at"></i>
                            <h3>Redes sociais</h3>
                            <ul>
                                <li><i className="mdi mdi-instagram"></i></li>
                                <li><a href="https://www.linkedin.com/company/106129417/" target="_blank" rel="noopener noreferrer"><i className="mdi mdi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </article>
        </>
    )
}

export default Contact;