import React, {useRef, useState, useEffect, useLayoutEffect, createContext, useContext} from 'react'
import {Box, HStack, Container, Input, Text, Editable, EditableInput, EditableTextarea, EditablePreview, Flex, } from '@chakra-ui/react'
import {branch, log, Commit} from '../components/glgl'

type LogContextType = {
  logList?: Array<any>, 
  setLogList?: React.Dispatch<any>
}
export const LogContext = createContext<LogContextType>({})

export default () => {
  const [logList, setLogList] = useState([])
  const logContextProps = {
    logList: logList,
    setLogList: setLogList
  }
  return (
    <LogContext.Provider value={logContextProps}>
      <Container>
        <Commit 
          id={1}
          title="test commit"
          date="2022-05-07"
        />
        <Commit 
          id={2}
          title="test commit2"
          date="2022-05-08"
        />
        <Commit 
          id={3}
          title="test commit3"
          date="2022-05-08"
        />
        <Text>{JSON.stringify(logList, null, " ")}</Text>
      </Container>
    </LogContext.Provider>
  )
}

// const test = () => {
//   return (
//     <Glgl>
//       <Branch name="main" parentCommit={null}>
//         <Commit title="initial commit" />
//         <Commit title="second commit" />
//         <Branch name="sub1" parentCommit="second commit">
//           <Commit title="initial commit" />
//           <Commit title="second commit" />
//           <Merge into="main" />
//         </Branch>
//         <Branch name="sub2" parentCommit="second commit">
//           <Commit title="initial commit" />
//           <Commit title="second commit" />
//           <Merge into="main" />
//         </Branch>
//         <Commit title="third commit" />
//       </Branch>
//     </Glgl>
//   )
// }
