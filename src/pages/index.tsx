import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import Banner from '../components/banner'

export default function Home() {
  return (
    <div className='container'>
      <Nav />
      <Banner />
    </div>
    
  )
}
