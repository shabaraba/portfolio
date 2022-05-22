import React, {useState, useEffect, useLayoutEffect, useContext} from 'react'
import {commit, log} from '../'
import { LogContext } from '../../main'

export const useBranch= (branch: any) => {
  const logs = useContext(LogContext)

  useEffect(() => {
    console.log('useLog: ' + commit.title)
    const lastLog: log = logs.logList.slice(-1)[0]
    const updtedLog: log = {
      commit: lastLog.commit
      branches: [...lastLog.branches, ]
    }
    logs.setLogList((currentList: any) => [...currentList, {commit: commit, branches: []}])
    // 下記の書き方だとlog.logListを一旦コピーして新たに配列を作成してsetStateする？ようで、
    // Commitコンポーネントを複数同時にレンダリングすると最後のCommitコンポーネントの値のみ保持される
    // logs.setLogList([...logs.logList, {commit: commit, branches: []}])
    console.log(JSON.stringify(logs.logList, null, " "))
  }, [])

  useEffect(() => {
    console.log('------------------')
    console.log('useEffect: ' + commit.title)
    console.log(logs.logList)
    console.log('------------------')
  }, [logs.logList])
}
