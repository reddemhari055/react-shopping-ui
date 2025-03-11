import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import { Gents, Ladies } from '../data'
import WomenCollection from '../components/WomenCollection'


const MainPage = () => {
    const [gentsFashion, setGentsFashion]=useState(Gents);
    const [ladiesFashion, setLadiesFashion]=useState(Ladies)
    console.log(Gents)
  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFashion={gentsFashion}/>
      <WomenCollection ladiesFashion={ladiesFashion}/>
      <Footer />
    </div>
  )
}

export default MainPage
