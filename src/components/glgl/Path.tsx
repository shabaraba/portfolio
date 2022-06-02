import React, {useState} from 'react'
import {commit, branch, eachLog} from '.'

interface props {
  log: eachLog
}

export const CommitDot: React.VFC<props> = (props: props) => { 
  // console.log(JSON.stringify(props.log.branches, null, 2))
  if (props.log.action === 'branch') return null

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

        <circle cx={xFrom} cy="20" r="10" fill="#e74c3c" />

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
  const [isExpand, setIsExpand] = useState(false)
  const prevLog: eachLog|null = props.prevLog ?? null
  const currentLog: eachLog = props.currentLog

  if (prevLog === null) return null
  // if (currentLog.action !== 'branch') return null

  const prevBranchList: branch[] = prevLog.branches
  const currentBranchList: branch[] = currentLog.branches

  const mergedBranchList = prevBranchList.filter((prev) => currentBranchList.findIndex((current) => current.id === prev.id) == -1)
  const newBranchList = currentBranchList.filter((current) => prevBranchList.findIndex((prev) => prev.id === current.id) == -1)
  const nonActionedBranchList = currentBranchList.filter((current) => prevBranchList.findIndex((prev) => prev.id === current.id) !== -1)

  const nonActionedBranchViewList: branchView[] = nonActionedBranchList.map((branch: branch) => {
    let prevSequenceNumber  = prevBranchList.findIndex((prev) => prev.id === branch.id)
    let currentSequenceNumber  = currentBranchList.findIndex((current) => current.id === branch.id)
    let xFrom: number = 25 * (prevSequenceNumber + 1)
    let xTo: number = 25 * (currentSequenceNumber + 1)

    return {
      xFrom: xFrom,
      xTo: xTo,
      color: branch.color
    }
  })

  const newBranchViewList: branchView[] = newBranchList.map((branch: branch) => {
    let prevSequenceNumber = prevBranchList.findIndex((prev) => prev.name === branch.parentCommit.branchName)
    let currentSequenceNumber  = currentBranchList.findIndex((current) => current.id === branch.id)
    let xFrom: number = 25 * (prevSequenceNumber + 1)
    let xTo: number = 25 * (currentSequenceNumber + 1)

    return {
      xFrom: xFrom,
      xTo: xTo,
      color: branch.color
    }
  })

  const mergedBranchViewList: branchView[] = mergedBranchList.map((branch: branch) => {
    let prevSequenceNumber  = prevBranchList.findIndex((prev) => prev.name === currentLog.commit.prevCommit.branchName)
    let currentSequenceNumber  = currentBranchList.findIndex((current) => current.name === currentLog.commit.branchName)
    let xFrom: number = 25 * (prevSequenceNumber + 1)
    let xTo: number = 25 * (currentSequenceNumber + 1)

    return {
      xFrom: xFrom,
      xTo: xTo,
      color: branch.color
    }
  })

  let height = 50
  if (isExpand) height = 100

  return (
      <svg width={200} height={height} viewBox={"0, 0, 100%, 100%"} xmlns="http://www.w3.org/2000/svg" onClick={(e) => setIsExpand(!isExpand)}>
        {nonActionedBranchViewList.map((branchView) => {
          return <path 
            key={Math.random()} 
            d={`M ${branchView.xFrom} 0 C ${branchView.xFrom} 40 ${branchView.xTo} 20  ${branchView.xTo} ${height}`}
            stroke={branchView.color} 
            fill="none" 
            strokeWidth="5" 
            strokeLinejoin="round"  
          />
        }
        )}
        {mergedBranchViewList.map((branchView) => {
          return <path 
            key={Math.random()} 
            d={`M ${branchView.xFrom} 0 C ${branchView.xFrom} 40 ${branchView.xTo} 20  ${branchView.xTo} ${height}`}
            stroke={branchView.color} 
            fill="none" 
            strokeWidth="5" 
            strokeLinejoin="round"  
          />
        }
        )}
        {props.currentLog.action === 'branch' && newBranchViewList.map((branchView) => {
          return <path 
            key={Math.random()} 
            d={`M ${branchView.xFrom} 0 C ${branchView.xFrom} 40 ${branchView.xTo} 20  ${branchView.xTo} ${height}`}
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

