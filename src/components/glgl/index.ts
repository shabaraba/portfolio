export { GitGraph, LogContext } from './Core'
export { Branch } from './Branch'
export { Commit } from './Commit'
export { Log } from './Log'
export { Merge } from './Merge'

export type branch = {
  id: number
  name: string
  color: string
  latestCommit?: commit
  parentCommit?: commit
}

export type commit = {
  id: number
  title: string
  date: string
  body?: string
  prevCommit?: commit
  branchName: string
}

export type merge = {
  id: number
  date: string
  branchName: string
  intoBranchName: string
}

export type eachLog = {
  action: "commit"|"branch"|"merge"
  commit?: commit
  checkouts?: branch[]
  branches?: branch[]
}

export type log = {
  latest: eachLog
  prev?: eachLog
}

export type LogContextType = {
  logList?: log[],
  setLogList?: React.Dispatch<any>
}
