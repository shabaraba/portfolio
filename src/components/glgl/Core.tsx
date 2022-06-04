import React, {useState, useLayoutEffect, createContext} from 'react'
import {UnorderedList} from '@chakra-ui/react'
import {branch, log, Log, commit, LogContextType} from './'

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

export const GitGraph = ({reverse, children}) => {
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
    if (reverse == true) {
      setRendering(logList.reverse())
    } else {
      setRendering(logList)
    }
    // console.log(JSON.stringify(logList, null, 2))
  }, [reverse])

  const logContextProps = {
    logList: logList,
  }
  return (
    <LogContext.Provider value={logContextProps}>
      {children}
      <UnorderedList>
        {rendering.map((log: log) => { 
          return (
            <Log key={Math.random()} log={log} reverse={reverse} />
          )
        })}
      </UnorderedList>
    </LogContext.Provider>
  )
}


