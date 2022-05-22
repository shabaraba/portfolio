import React, {useRef, useState, useEffect, useLayoutEffect, createContext, useContext} from 'react'
import {Box, HStack, Container, Input, Text, Editable, EditableInput, EditableTextarea, EditablePreview, Flex, } from '@chakra-ui/react'
import {branch, log, Commit, Branch, Log} from '../components/glgl'

type LogContextType = {
  logList?: Array<log>, 
  setLogList?: React.Dispatch<any>
}
export const LogContext = createContext<LogContextType>({})

export default ({children}) => {
  const [logList, setLogList] = useState([])
  const logContextProps = {
    logList: logList,
    setLogList: setLogList
  }
  console.log( JSON.stringify(logList, null, " ") )
  return (
    <LogContext.Provider value={logContextProps}>
      {children}
      <Container>
        <Text>{JSON.stringify(logList, null, " ")}</Text>
        <Graph logList={logList} />
      </Container>
    </LogContext.Provider>
  )
}

const Graph: React.FC<any> = ({logList}: {logList: Array<any>}) => {
  // let newLogList = []
  // logList.forEach((log: log, index: number, newLogList) => {
  //   if (log.action == "branch") return
  //   if (!newLogList.find((branch: branch) => {
  //     branch.name == log.commit.branch
  //   })) {
  //     // newLogList.push(branch)
  //   } 
  // })
  // console.log(JSON.stringify(currectLogList, null, " "))
  return (
    <ul>
      {logList.map(log =>{ 
        if (log.action != "commit") return null
        return (
          <Log log={log} />
        )
      })}
    </ul>
  )
}
