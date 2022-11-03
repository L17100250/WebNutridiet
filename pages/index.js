import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../Components/layout'
import Formlogin from '../Components/formlogin'
import Formcontrasena from '../Components/formcontrasena'
import Formcorreoconfirmado from '../Components/formcorreoconfirmado'

export default function Home() {
  return (
   <Layout><Formcorreoconfirmado/></Layout>
  )
}
