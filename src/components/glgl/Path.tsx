import React, {useState} from 'react'
import {log, commit, branch, eachLog} from '.'
import {useCommit} from './hooks/useCommit'

interface props {
  log: eachLog
}

export const CommitDot: React.VFC<props> = (props: props) => { 
  // console.log(JSON.stringify(props.log.branches, null, 2))
  if (props.log.action !== 'commit') return null

  const renderCommit:commit|null = props.log.commit ?? null

  const activeBranchCount = props.log.branches.length + 1

  const commitSequenceNumber  = props.log.branches?.findIndex((branch) => branch.name === renderCommit.branchName)
  const xFrom: number = 25 * (commitSequenceNumber + 1)
  const xTo: number = 25 * (commitSequenceNumber + 1)

  return (
      <svg width={200} height="30" viewBox={"0, 0, 200, 30"} xmlns="http://www.w3.org/2000/svg">
        {props.log.branches.map((branch, index) => {
          let sequenceNumber = index + 1
          return <polyline 
            key={Math.random()} 
            points={sequenceNumber * 25 + ",-10 " + sequenceNumber * 25 + ",60"} 
            stroke={branch.color} 
            fill="none" 
            strokeWidth="5" 
            strokeLinejoin="round"  
          />
        }
        )}

        <circle cx={xFrom} cy="15" r="10" fill="#e74c3c" />
        <circle cx={xFrom} cy="15" r="7" fill="#fcfcfc" />

      </svg>
  )
}

interface branchView {
  xFrom: number
  xTo: number
  color: string
}

interface ConnectPathProps {
  currentLog: eachLog
  prevLog?: eachLog
}

export const BranchPath: React.VFC<ConnectPathProps> = (props: ConnectPathProps) => { 
  const prevLog: eachLog|null = props.prevLog ?? null
  const currentLog: eachLog = props.currentLog

  if (prevLog === null) return null
  // if (currentLog.action !== 'branch') return null

  const prevBranchList: branch[] = prevLog.branches
  const currentBranchList: branch[] = currentLog.branches

  const newBranchList = currentBranchList.filter((current) => prevBranchList.findIndex((prev) => prev.id === current.id) == -1)
  const mergedBranchList = prevBranchList.filter((prev) => currentBranchList.findIndex((current) => current.id === prev.id) == -1)
  const nonActionedBranchList = currentBranchList.filter((current) => prevBranchList.findIndex((prev) => prev.id === current.id) !== -1)

  const nonActionedBranchViewList: branchView[] = nonActionedBranchList.map((branch: branch) => {
    let sequenceNumber  = currentBranchList.findIndex((current) => current.id === branch.id)
    let xFrom: number = 25 * (sequenceNumber + 1)
    let xTo: number = 25 * (sequenceNumber + 1)

    return {
      xFrom: xFrom,
      xTo: xTo,
      color: branch.color
    }
  })

  const newBranchViewList: branchView[] = newBranchList.map((branch: branch) => {
    let prevSequenceNumber  = prevBranchList.findIndex((prev) => prev.name === branch.parentCommit.branchName)
    let currentSequenceNumber  = currentBranchList.findIndex((current) => current.id === branch.id)
    let xFrom: number = 25 * (prevSequenceNumber + 1)
    let xTo: number = 25 * (currentSequenceNumber + 1)

    return {
      xFrom: xFrom,
      xTo: xTo,
      color: branch.color
    }
  })

  console.log("----------------------")
  console.log(JSON.stringify(newBranchViewList, null, 2))

  return (
      <svg width={200} height="50" viewBox={"0, 0, 200, 50"} xmlns="http://www.w3.org/2000/svg">
        {nonActionedBranchViewList.map((branchView) => {
          return <polyline 
            key={Math.random()} 
            points={branchView.xFrom + ",-10 " + branchView.xTo + ",60"} 
            stroke={branchView.color} 
            fill="none" 
            strokeWidth="5" 
            strokeLinejoin="round"  
          />
        }
        )}
        {newBranchViewList.map((branchView) => {
          return <path 
            key={Math.random()} 
            d={`M ${branchView.xFrom} 0 C ${branchView.xFrom} 60 ${branchView.xTo} 0  ${branchView.xTo} 60`}
            stroke={branchView.color} 
            fill="none" 
            strokeWidth="5" 
            strokeLinejoin="round"  
          />
        }
        )}
      </svg>
  )
}

export const CommitPath: React.VFC<ConnectPathProps> = (props: ConnectPathProps) => { 
  const prevLog: eachLog|null = props.prevLog ?? null
  const currentLog: eachLog = props.currentLog

  if (prevLog === null) return null
  // if (currentLog.action !== 'branch') return null

  const prevBranchList: branch[] = prevLog.branches
  const currentBranchList: branch[] = currentLog.branches

  const newBranchList = currentBranchList.filter((current) => prevBranchList.findIndex((prev) => prev.id === current.id) == -1)
  const mergedBranchList = prevBranchList.filter((prev) => currentBranchList.findIndex((current) => current.id === prev.id) == -1)
  const nonActionedBranchList = currentBranchList.filter((current) => prevBranchList.findIndex((prev) => prev.id === current.id) !== -1)

  const nonActionedBranchViewList: branchView[] = nonActionedBranchList.map((branch: branch) => {
    let sequenceNumber  = currentBranchList.findIndex((current) => current.id === branch.id)
    let xFrom: number = 25 * (sequenceNumber + 1)
    let xTo: number = 25 * (sequenceNumber + 1)

    return {
      xFrom: xFrom,
      xTo: xTo,
      color: branch.color
    }
  })

  const newBranchViewList: branchView[] = newBranchList.map((branch: branch) => {
    let prevSequenceNumber  = prevBranchList.findIndex((prev) => prev.name === branch.parentCommit.branchName)
    let currentSequenceNumber  = currentBranchList.findIndex((current) => current.id === branch.id)
    let xFrom: number = 25 * (prevSequenceNumber + 1)
    let xTo: number = 25 * (currentSequenceNumber + 1)

    return {
      xFrom: xFrom,
      xTo: xTo,
      color: branch.color
    }
  })

  console.log("----------------------")
  console.log(JSON.stringify(newBranchViewList, null, 2))

  return (
      <svg width={200} height="50" viewBox={"0, 0, 200, 50"} xmlns="http://www.w3.org/2000/svg">
        {nonActionedBranchViewList.map((branchView) => {
          return <polyline 
            key={Math.random()} 
            points={branchView.xFrom + ",-10 " + branchView.xTo + ",60"} 
            stroke={branchView.color} 
            fill="none" 
            strokeWidth="5" 
            strokeLinejoin="round"  
          />
        }
        )}
        {newBranchViewList.map((branchView) => {
          return <path 
            key={Math.random()} 
            d={`M ${branchView.xFrom} 0 C ${branchView.xFrom} 60 ${branchView.xTo} 0  ${branchView.xTo} 60`}
            stroke={branchView.color} 
            fill="none" 
            strokeWidth="5" 
            strokeLinejoin="round"  
          />
        }
        )}
      </svg>
  )
}
