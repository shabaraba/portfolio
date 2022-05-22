import React, {useState, useLayoutEffect, useEffect, useContext} from 'react'
import {Path} from './Path'
import {commit, log, branch} from '.'
import {useLog} from './hooks/useLog'
import {LogContext} from '../main'
import {BranchContext} from './Branch'

type props = commit & {children?: React.ReactNode}
export const Commit: React.VFC<props> = (props: props) => { 
  // const branchContext:branch = useContext(BranchContext)
  useLog({action: "commit", commit: {id: props.id, title: props.title, date: props.date, branch: props.branch}})
  const [open, setOpen] = useState(false)
  const openList = () => {
    setOpen(!open)
  }

  return null

  // return (
  //   <li style={{listStyle: "none", display: "flex", alignItems: "center"}}>
  //     <Path
  //       prev = ""
  //       now = ""
  //       next = ""
  //     />
  //     {props.title}
  //     <div>
  //       {open &&
  //         props.children
  //       }
  //     </div>
  //     <button onClick={openList}>+</button>
  //   </li>
  // )
}
