
import { useState } from "react";
import imgVier from "/vierchat.png";


const ChatBot = () => {

    //Aparece e desaparece o chat vier
    const [isVisible, setIsVisible] = useState(false);

    const chatIsVisible = () => {
        setIsVisible(!isVisible);
    }

    // Conversa entre user e ia
    // Função perguntas frequentes
    const [visibleFAQ,  setVisibleFAQ] = useState(true);
    
    //Histórico de conversas
    const [chatHistory, setChatHistory] = useState([]);
    
    //Mensagem que o usuário está digitando
    const [sendMsg, setSendMsg] = useState("");
    
    
    const handleSelectFAQ = async (FAQ) => {
        setVisibleFAQ(false);
        setChatHistory(prev => [...prev, {user: FAQ, ia: "..."}]);
        
        try{
            const response = await fetch("/.netlify/functions/vierchat", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({userMessage: FAQ}),
            });
            const data = await response.json();
            const iaMessage = data.response || "Ocorreu um erro com o sistema e não consigo gerar sua resposta.";

            setChatHistory((prev) => {
                const updated = [...prev];
                updated[updated.length - 1].ia = iaMessage;
                return updated;
            });
        } catch(error){
            console.error("Erro IA FAQ: ", error);
            setChatHistory((prev) => {
                const updated = [...prev];
                updated[updated.length - 1].ia = "Erro ao contactar o servidor de respostas";
                return updated;
            });
        }
        
    };

    const handleSendMsg = async () => {
        if (sendMsg.trim() === "") return;

        const userMessage = sendMsg;
        setVisibleFAQ(false);
        //Adiciona a pergunta imediatamente no chat
        setChatHistory( (prev) => [...prev, {user: userMessage, ia: "..."}]);
        setSendMsg("");

        try{
            const response = await fetch("/.netlify/functions/vierchat", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ userMessage }),
            });
            const data = await response.json();
            const iaMessage = data.response || "Sem resposta da IA";
            
            setChatHistory(prev => {
                const updated = [...prev];
                updated[updated.length - 1].ia = iaMessage;
                return updated;
            });
        
        } catch(error){
            console.error("Erro ao chamar IA: ", error);
            setChatHistory(prev => {
                const updated = [...prev];
                updated[updated.length - 1].ia = "Erro ao responder.";
                return updated;
            });
        }
    };


    const resetChat = () => {
        setChatHistory([]);
        setVisibleFAQ(true);
    }
    return(
        <div className="baloon-chat">
            {isVisible && (
                <div className="chat-bot">
                    <div className="header-chat">
                        <p>VierChat</p>
                        <span>
                            <i className="mdi mdi-restart" onClick={resetChat} aria-label="Botão reiniciar Vier IA"></i>
                            <i className="mdi mdi-close" onClick={chatIsVisible} aria-label="Botão fechar Vier IA"></i>
                        </span>
                    </div>
                    <div className="conversation-chat">
                        
                        <div className="presentation-vierchat">
                            <span>
                                <img src={imgVier} alt="" title="" />
                            </span>
                            <p className="msg-default-ia">                            
                                Oi! Sou o Vier 🤖. Como posso te ajudar hoje?
                            </p>
                        </div>

                        {visibleFAQ && (
                            <div className="FAQ">
                                <p>Perguntas frequentes: </p>
                                <div 
                                    className="chatbot-questions"
                                    onClick={() => handleSelectFAQ("Quero criar um site")}
                                    >
                                    Quero criar um site
                                </div>
                                <div 
                                    className="chatbot-questions"
                                    onClick={() => handleSelectFAQ("Quero um chatbot para meu site")}
                                    >
                                    Quero um chatbot para meu site
                                </div>
                                <div 
                                    className="chatbot-questions"
                                    onClick={() => handleSelectFAQ("Estou com problemas em meu computador")}
                                    >
                                    Estou com problemas em meu computador
                                </div>
                            </div>
                        )}

                        {chatHistory.map((chat, index) => (
                            <div key={index} className="ia-and-user-chat">
                                <div className="user-questions" >
                                    <p>
                                        {chat.user}
                                    </p>
                                </div>
                                <div className="ia-response">
                                    <span>
                                        <img src={imgVier} alt="" title="" />
                                    </span>
                                    <p>
                                        {chat.ia}
                                    </p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    <div className="send-chat">
                        <div className="input-group">
                            <input 
                                type="text" 
                                name="send-conversation" 
                                id="send-conversation" 
                                placeholder="Como podemos ajudar você?"
                                value={sendMsg}
                                onChange={(e) => setSendMsg(e.target.value)}
                                onKeyDown={(e) => {
                                    if(e.key === "Enter"){
                                        handleSendMsg();
                                    }
                                }}
                            />
                            <i 
                                className="mdi mdi-send"
                                onClick={handleSendMsg}
                            ></i>
                        </div>
                    </div>
                    <div 
                        style={{
                            color: '#858585',
                            fontSize: '0.8rem',
                            paddingTop: '15px'
                        }}
                    >A I.A pode produzir informações imprecisas</div>
                </div>
            )}    

            <button onClick={chatIsVisible}>
                <i className="mdi mdi-face-agent"></i>Fale com o VierChat   
            </button>
        </div>
    )
}

export default ChatBot;