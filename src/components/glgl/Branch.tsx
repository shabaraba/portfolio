import React, {useState, useEffect, useLayoutEffect, createContext, useContext} from 'react'
import {branch, log} from '.'
import { LogContext } from '../main'

export const BranchContext = createContext<branch>({id: 0, name: ""})

type props = branch & {children?: React.ReactNode}
export const Branch: React.VFC<props> = (props: props) => { 
  const logs = useContext(LogContext)
  const currentLog: log = {action: "branch", branch: {id: props.id, name: props.name}}

  useLayoutEffect(() => {
    logs.setLogList((currentList: Array<log>) => [...currentList, currentLog])
    // 下記の書き方だとlog.logListを一旦コピーして新たに配列を作成してsetStateする？ようで、
    // Commitコンポーネントを複数同時にレンダリングすると最後のCommitコンポーネントの値のみ保持される
    // logs.setLogList([...logs.logList, {commit: commit, branches: []}])
  }, [])

  console.log(JSON.stringify(logs.logList, null, " "))

  const contextValue: branch = {
    id: props.id, 
    name: props.name,
  }
  return null
}
