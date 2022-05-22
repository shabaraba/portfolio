export { Branch } from './Branch'
export { Commit } from './Commit'
export { Log } from './Log'

export type branch = {
  id: number
  name: string
  currentCommit?: commit
  parentCommit?: commit
}
export type commit = {
  id: number
  title: string
  date: string
  body?: string
  branch?: string
}

export type log = {
  action: "commit"|"branch"|"merge"
  commit?: commit
  branch?: branch
  branches?: Array<branch>
}
