import React, {useState, useEffect, useLayoutEffect, useContext} from 'react'
import { LogContext } from '../../gitgraph2'
import {log} from '../../glgl'

export const useLog = (log: log) => {
  const logs = useContext(LogContext)

  useEffect(() => {
    logs.setLogList((currentList: any) => [...currentList, log])
    // 下記の書き方だとlog.logListを一旦コピーして新たに配列を作成してsetStateする？ようで、
    // Commitコンポーネントを複数同時にレンダリングすると最後のCommitコンポーネントの値のみ保持される
    // logs.setLogList([...logs.logList, {commit: commit, branches: []}])
    console.log(JSON.stringify(logs.logList, null, " "))
  }, [])

  useEffect(() => {
    console.log('------------------')
    console.log('useEffect: ' + logs.logList)
    console.log('------------------')
  }, [logs.logList])
}
