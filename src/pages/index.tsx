import Head from 'next/head'
import { siteTitle } from '../components/layout'

import Header from '../components/header'
import Hello from '../components/hello'
import About from '../components/aboutme'
import Skill from '../components/skills'
import Work from '../components/works'
import Git from '../components/gitgraph'
import GitGraph from '../components/gitgraph2'
import {Branch, Commit, Merge} from '../components/glgl'
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
      <Container maxW="conainer.sm">
        <Container maxW="conainer.sm">
          <GitGraph>
            <Branch id={1} name="student" color="#e74c3c" />
            <Commit id={1} title="清風高等学校 卒業" body = "" date = "2010-03" branchName='student' />
            <Commit id={2} title="大阪大学 基礎工学部 入学" body = "" date = "2011-04" branchName='student' />
            <Commit id={3} title="大阪大学 基礎工学部 卒業" body = "" date = "2015-03" branchName='student' />
            <Commit id={4} title="大阪大学大学院 基礎工学研究科 入学" body = "" date = "2015-04" branchName='student' />
            <Commit id={5} title="大阪大学大学院 基礎工学研究科 卒業" body = "" date = "2017-03" branchName='student' />
            <Merge id={6} date = "2017-03" branchName='student' intoBranchName='main' />

            <Branch id={2} name="jobs" color="#ff99ee" />
            <Commit id={7} title="社会人スタート" body = "" date = "2017-04" branchName='jobs' />

            <Branch id={3} name="brother" color="#99eeff" />
            <Commit id={8} title="ブラザー工業株式会社 入社" body = "" date = "2017-04" branchName='brother' />
            <Commit id={9} title="ブラザー工業株式会社 退職" body = "" date = "2018-05" branchName='brother' />
            <Merge id={10} date = "2018-05" branchName='brother' intoBranchName='jobs' />

            <Branch id={4} name="khi" color="#99eeff" />
            <Commit id={11} title="川崎重工業株式会社 入社" body = "" date = "2018-06" branchName='khi' />
            <Commit id={12} title="川崎重工業株式会社 退職" body = "" date = "2020-01" branchName='khi' />
            <Merge id={13} date = "2018-05" branchName='khi' intoBranchName='jobs' />

            <Branch id={5} name="smaregi" color="#99eeff" />
            <Commit id={14} title="株式会社スマレジ 入社" body = "" date = "2020-02" branchName='smaregi' />

            <Branch id={6} name="個人開発" color="#eeff99" />
            <Branch id={7} name="副業" color="#777" />
            <Commit id={15} title="TimLog開発" body = "" date = "2020-09" branchName='個人開発' />
            <Commit id={16} title="Look into Basckets開発" body = "" date = "2021-02" branchName='個人開発' />

            <Commit id={17} title="第一子誕生" body = "" date = "2021-05" branchName='main' />

            <Commit id={18} title="CoffeeBreakPoint(個人ブログ)開発" body = "" date = "2022-03" branchName='個人開発' />

            <Commit id={19} title="tech boost副業参画" body = "" date = "2022-03" branchName='副業' />

            <Commit id={20} title="株式会社スマレジ 退職" body = "" date = "2022-07" branchName='smaregi' />
            <Merge id={21} date = "2022-07" branchName='smaregi' intoBranchName='jobs' />
            <Branch id={8} name="cybozu" color="#99eeff" />
            <Commit id={22} title="サイボウズ株式会社 入社" body = "" date = "2020-09" branchName='cybozu' />

          </GitGraph>
        </Container>
          <Hello />
          <About />
          <Skill />
          <Work />
          <Git />
          <Contact />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}
