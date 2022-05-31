import React, {useContext} from 'react'
import {branch, commit, eachLog} from '.'
import { LogContext } from '../gitgraph2'

type props = branch & {children?: React.ReactNode}
export const Branch: React.VFC<props> = (props: props) => { 
  const context = useContext(LogContext)
  const logList = context.logList.slice()
  // console.log(JSON.stringify(context.logList, null, 2))
  const latestLog: eachLog = logList[logList.length - 1].latest

  const currentCommit: commit = latestLog.action !== 'branch' ? latestLog.commit : latestLog.checkouts[0].latestCommit
  let branchList: branch[] = latestLog.branches.slice() // 配列は参照渡しになってしまうので、slice()で配列全体を切り出して新規作成する

  const newBranch: branch = {
    id: props.id,
    name: props.name,
    color: props.color,
    latestCommit: currentCommit,
    parentCommit: currentCommit
  }

  const parentBranch: branch = branchList.find((branch) => branch.name === currentCommit.branchName)
  const currentBranchIndex: number = branchList.indexOf(parentBranch)
  branchList.splice(currentBranchIndex + 1, 0, newBranch)

  const newLog: eachLog = {
    action: 'branch',
    commit: null,
    checkouts: latestLog.action === 'branch' ?  [...latestLog.checkouts, newBranch] : [newBranch],
    branches: branchList
  }

  const prevLog: eachLog = JSON.parse(JSON.stringify(latestLog))

  if (latestLog.action === 'branch') {
    context.logList[context.logList.length - 1].latest = newLog
  } else {
    context.logList.push({latest: newLog, prev: prevLog})
  }
    // 下記の書き方だとlog.logListを一旦コピーして新たに配列を作成してsetStateする？ようで、
    // Commitコンポーネントを複数同時にレンダリングすると最後のCommitコンポーネントの値のみ保持される
    // logs.setLogList([...logs.logList, {commit: commit, branches: []}])

  // console.log(JSON.stringify(context.logList, null, " "))

  return null
}

