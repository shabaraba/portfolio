import React, {useState} from 'react'
import {commit} from '.'
import {useCommit} from './hooks/useCommit'

type props = commit & {children?: React.ReactNode}
export const Commit: React.VFC<props> = (props: props) => { 
  useCommit({id: props.id, title: props.title, date: props.date})
  const [open, setOpen] = useState(false)
  const openList = () => {
    setOpen(!open)
  }
  return (
    <li style={{listStyle: "none", display: "flex", alignItems: "center"}}>
      <svg width="50" height="50" viewBox="0, 0, 50, 50" xmlns="http://www.w3.org/2000/svg">
        <polyline points="25,-10 25,60" stroke="#e74c3c" fill="none" strokeWidth="5" strokeLinejoin="round"  />
        <circle cx="25" cy="25" r="10" fill="#e74c3c" />
        <circle cx="25" cy="25" r="7" fill="#fcfcfc" />
      </svg>
      {props.title}
      <div>
        {open &&
          props.children
        }
      </div>
      <button onClick={openList}>+</button>
    </li>
  )
}
