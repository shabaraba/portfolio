import React, {useContext} from 'react'
import { LogContext } from '../gitgraph2'
import {eachLog, branch, merge, commit} from '.'

export const Merge: React.VFC<merge> = (props: merge) => { 

  const context = useContext(LogContext)

  const logList = context.logList.slice()
  const latestLog: eachLog = logList[logList.length - 1].latest

  const currentBranches: branch[] = latestLog.branches.slice()

  const mergedBranch: branch = currentBranches.find((branch: branch) => branch.name === props.branchName)
  const newBranches: branch[] = currentBranches.filter((branch: branch) => branch.name !== props.branchName)

  const newCommit: commit = {
    id: props.id,
    title: 'merged',
    date: props.date,
    body: null,
    prevCommit: mergedBranch.latestCommit,
    branchName: props.intoBranchName
  }

  const newLog: eachLog = {
    action: 'merge',
    commit: newCommit,
    branches: newBranches,
  }

  const prevLog: eachLog = JSON.parse(JSON.stringify(latestLog))

  // console.log(JSON.stringify(context.logList, null, "  "))

  context.logList.push({latest: newLog, prev: prevLog})
  // 下記の書き方だとlog.logListを一旦コピーして新たに配列を作成してsetStateする？ようで、
  // Commitコンポーネントを複数同時にレンダリングすると最後のCommitコンポーネントの値のみ保持される
  // logs.setLogList([...logs.logList, {commit: commit, branches: []}])


  // console.log(JSON.stringify(context.logList, null, " "))

  return null
}

