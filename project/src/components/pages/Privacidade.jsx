import { useState , useEffect } from "react";
import logo from '../../assets/img/VierCaTech-SemNome-Fundo.png';


const Privacidade = () =>{

    const [isButtonClose, setButtonClose] = useState(false);

    useEffect(() => {   
        const accepted = localStorage.getItem("privacidade_aceita")
        if (!accepted){
            setButtonClose(true);
        }
    }, []);

    const acceptPolicy = () => {
        localStorage.setItem("privacidade_aceita", "true");
        setButtonClose(false);
    }

    return(

        <>
            {isButtonClose && (
                <article className="article-privacy">
                    <div className="button-close-privacy">
                        <button onClick={acceptPolicy}>Aceitar</button>
                        <p>Ao aceitar você concorda com nossa política.</p>
                    </div>
                    <section>
                        <img src={logo} alt="Logo banner de privacidade - VierCa Tech" title="Assistência técnica e Webdesign na Vila Zilda" />
                        <h2>Política de Privacidade</h2>
                        <p>A sua privacidade é importante para nós. É política do <strong>VierCa Tech</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <strong>VierCa Tech</strong> e outros sites que possuímos e operamos.</p>

                        <h3>Coleta de Informações</h3>
                        <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>

                        <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

                        <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

                        <h3>Links para Sites Externos</h3>
                        <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>

                        <h3>Recusa de Informações</h3>
                        <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>

                        <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>

                        <h3>Compromisso do Usuário</h3>
                        <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o <strong>VierCa Tech</strong> oferece no site, incluindo, mas não se limitando a:</p>
                        <ul>
                            <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
                            <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou qualquer tipo de pornografia ilegal, apologia ao terrorismo ou contra os direitos humanos;</li>
                            <li>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do <strong>VierCa Tech</strong>, de seus fornecedores ou terceiros, introduzindo ou disseminando vírus ou outros sistemas maliciosos.</li>
                        </ul>

                        <h3>Mais Informações</h3>
                        <p>Esperamos que esta política esteja clara e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>

                        <p><strong>Esta política é efetiva a partir de 23 de fevereiro de 2025.</strong></p>
                    </section>
                </article>
            )}
        </>
    )
}

export default Privacidade;