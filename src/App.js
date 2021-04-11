import NavBar from'./components/NavBar/NavBar'
import Home from'./components/Home/Home'
import About from'./components/About/About'
import Skills from'./components/Skills/Skills'
import Youtube from'./components/Youtube/Youtube'
import Contact from'./components/Contact/Contact'
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Youtube />
      <Contact />
    </div>
  );
}

export default App;
