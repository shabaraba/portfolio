import React, {useState, useLayoutEffect, createContext} from 'react'
import {UnorderedList, Container, } from '@chakra-ui/react'
import {branch, log, Log, commit} from '../components/glgl'

type LogContextType = {
  logList?: log[],
  setLogList?: React.Dispatch<any>
}
export const LogContext = createContext<LogContextType>({})

const initialCommit: commit = {
  id: 0,
  title: "initial commit",
  date: "",
  body: null,
  branchName: "main"
}
const mainBranch: branch = {
  id: 0,
  name: "main",
  color: "#999",
  latestCommit: initialCommit,
  parentCommit: initialCommit
}

export default ({children}) => {
  const [rendering, setRendering] = useState([])
  // 今回は動的にコミット等する予定はないので、stateで管理する必要がない（再レンダリングされても一意に保てる）
  // const [logList, setLogList] = useState([])
  let logList: log[] = [
    {
      latest: {
        action: 'commit',
        commit: initialCommit,
        branches: [mainBranch]
      },
      prev: null
    }
  ]

  useLayoutEffect(() => {
    // このコンポネントは子コンポーネントすべてをレンダリングして初めてレンダリング開始されるので、
    // 子コンポネントのlogがすべt格納されてから初期logを追加する順番になる
    // logList = [
    //   {
    //     commit: initialCommit,
    //     checkout: mainBranch,
    //     branches: [mainBranch]
    //   },
    //   ...logList,
    // ]
    setRendering(logList)
    // console.log(JSON.stringify(logList, null, 2))
  }, [])

  const logContextProps = {
    logList: logList,
  }
  return (
    <LogContext.Provider value={logContextProps}>
      {children}
      <UnorderedList>
        {rendering.map((log: log) =>{ 
          return (
            <Log key={Math.random()} log={log} />
          )
        })}
      </UnorderedList>
    </LogContext.Provider>
  )
}

