import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import ReactLenis from 'lenis/react'

function App() {


  return (
    <ReactLenis root options={{lerp : 0.05, duration : 1.5, smoothWheel: true}}>
      <div className='selection:bg-black selection:text-white'>
        <Header />
        <Hero />
        <About />
      </div>
    </ReactLenis>
  )
}

export default App
