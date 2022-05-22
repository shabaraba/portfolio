import React, {useState} from 'react'
import {commit} from '.'
import {useCommit} from './hooks/useCommit'

interface props {
  prev?: commit
  now?: commit
  next?: commit
}

export const Path: React.VFC<props> = (props: props) => { 
  // useCommit(props.prev)
  // useCommit(props.now)
  // useCommit(props.next)

  return (
      <svg width="50" height="50" viewBox="0, 0, 50, 50" xmlns="http://www.w3.org/2000/svg">
        <polyline points="25,-10 25,60" stroke="#e74c3c" fill="none" strokeWidth="5" strokeLinejoin="round"  />
        <polyline points="25,-10 25,60" stroke="#e74c3c" fill="none" strokeWidth="5" strokeLinejoin="round"  />
        <polyline points="25,-10 25,5 50,5" stroke="#aa2a2a" fill="none" strokeWidth="5" strokeLinejoin="round"  />

        <circle cx="25" cy="25" r="10" fill="#e74c3c" />
        <circle cx="25" cy="25" r="7" fill="#fcfcfc" />

      </svg>
  )
}
