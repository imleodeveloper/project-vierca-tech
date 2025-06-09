import Header from "./components/Header"


import Footer from "./components/Footer"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Clients from "./components/pages/Clients";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Privacidade from "./components/pages/Privacidade";
import Projects from "./components/pages/Projects";
import ChatBot from "./components/ChatBot";


function App() {


  return (
    <>
      <Header />
        <main>
          <Home />
          <About />
          <Services />
          <Projects />
          {/*<Clients /> */}
          <Contact />
          <Privacidade />
        </main>
          <ChatBot />
      <Footer />
    </>
  )
}

export default App;
