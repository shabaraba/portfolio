export { Branch } from './Branch'
export { Commit } from './Commit'
export { Log } from './Log'

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
