import { useState, useEffect } from 'react'
import Articles from './components/Articles';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import RightHero from './components/Skills';
import Testimonial from './components/Testimonial';
import TimeLine from './components/TimeLine';
import { applyTheme } from './themes/themeutil';

function App() {
  const [load, setload] = useState(true)


  useEffect(() => {

    applyTheme("grapishPurple")
    setTimeout(() => {
      setload(false)
    }, 2000);
    return () => {
    };
  }, []);

  return (
    <section className="bg-primary-background ">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 shadow-2xl">
        <NavBar />
        <Hero />
        <TimeLine />
        <RightHero />
        <Projects />
        <Articles />
        <Testimonial />
        <CallToAction />
        <Footer />
      </div>
    </section>
  )
}

export default App
