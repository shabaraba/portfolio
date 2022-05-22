import Head from 'next/head'
import { siteTitle } from '../components/layout'

import Header from '../components/header'
import Hello from '../components/hello'
import About from '../components/aboutme'
import Skill from '../components/skills'
import Work from '../components/works'
import Git from '../components/gitgraph'
import Contact from '../components/contact'

import { GetStaticProps } from 'next'

import {Box, Container, Grid, GridItem } from '@chakra-ui/react'

const name = '[Your Name]'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <Container maxW="conainer.lg">
        <Container maxW="conainer.sm" as="main">
          <Hello />
          <About />
          <Skill />
          <Work />
          <Git />
          <Contact />
        </Container>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}
