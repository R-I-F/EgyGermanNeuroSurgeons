import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Doctors } from './components/Doctors'
import { Scope } from './components/Scope'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Doctors />
        <Scope />
        <Gallery />
        <Footer />
      </main>
    </>
  )
}

export default App
