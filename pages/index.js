import Head from 'next/head'
import Navbar from '../containers/Navbar'
import Main from '../containers/Main'
import About from '../containers/About'
import Skills from '../containers/Skills'
import Projects from '../containers/Projects'


export default function Home() {
  return (
    <>
      <Head>
        <title>Kei | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/k.png" />
      </Head>
      <main >
          <Navbar />
          <Main />
          <Projects />
          <Skills />
          <About />
      </main>
    </>
  )
}
