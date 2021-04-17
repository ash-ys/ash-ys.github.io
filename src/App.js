import NavBar from'./components/NavBar/NavBar'
import Home from'./components/Home/Home'
import About from'./components/About/About'
import Skills from'./components/Skills/Skills'
import Contact from'./components/Contact/Contact'
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
