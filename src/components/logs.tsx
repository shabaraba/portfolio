import React, {createContext} from 'react'
import {Container, Center, Heading} from '@chakra-ui/react'
import {GitGraph, Branch, Commit, Merge, log} from '../components/glgl'

type LogContextType = {
  logList?: log[],
  setLogList?: React.Dispatch<any>
}
export const LogContext = createContext<LogContextType>({})

export default () => {
  return (
    <Container maxW="conainer.sm" id="log">
      <Center>
        <Heading as="h2">
          logs
        </Heading>
      </Center>
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

        <Commit id={18} title="入籍" body = "" date = "2019-11" branchName='main' />

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
  )
}

