import React, {useRef, useState, useLayoutEffect, createContext, useContext} from 'react'
import { CommandResultProps } from './CommandResultProps'
import {LsBlock, HelpBlock} from '../blocks'

export default () => {
  let CommandResult: React.VFC<CommandResultProps>
  const applyCommand = ((c: string) => {
    setCommand(c)
    setHistories([...histories, c])
  })

  const parsedCommand = command.split(' ')
  // shaba command
  // shaba about: 自己紹介
  // ls
  // shaba logs: git logみたいなかんじで
  switch (parsedCommand[0]) {
    case 'help':
      CommandResult = HelpBlock
      console.log("help")
      break
    case 'ls':
      CommandResult = LsBlock
      console.log("list")
      break
    case 'cd':
    case 'bat':
    case 'cat':
    default:
      CommandResult = () => <></>
      console.log("default")
      break
  }
}


