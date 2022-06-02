import React, {useContext} from 'react'
import {LogContext} from './Core'
import {eachLog, branch, commit} from './'

type props = commit & {children?: React.ReactNode}
export const Commit: React.VFC<props> = (props: props) => { 

  const context = useContext(LogContext)

  const logList = context.logList.slice()
  const latestLog: eachLog = logList[logList.length - 1].latest

  const currentBranches: branch[] = latestLog.branches.slice()
  let currentBranch: branch|null = currentBranches.find((branch) => branch.name === props.branchName)

  const newCommit: commit = {
    id: props.id,
    title: props.title,
    date: props.date,
    body: props.body,
    branchName: props.branchName
  }

  if (currentBranch !== null) {
    currentBranch.latestCommit = newCommit
  }

  const newLog: eachLog = {
    action: 'commit',
    commit: newCommit,
    branches: currentBranches,
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
