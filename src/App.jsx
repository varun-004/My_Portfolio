import './App.css'
import Home from './All_Files/Home';
import Skills from './All_Files/Skills';
import Projects from './All_Files/Projects';
import About from './All_Files/About';
import Contact from './All_Files/Contact';

function App() {
  return (
    <main className='w-screen h-screen overflow-x-hidden '>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>

    


  )
}

export default App
