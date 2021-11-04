import Head from 'next/head';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Description from '../components/Description';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Eldar Dautovic | Portfolio</title>
        <meta name="description" content="Generated by Eldar Dautovic via Next.js create app" />
      </Head>

      <NavBar />
      <Hero />
      <Description />
      <AboutMe />
      <Skills />

      
    </div>
  )
}
