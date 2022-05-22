import React, {useRef, useState, useEffect, useLayoutEffect, createContext, useContext} from 'react'
import {Box, HStack, Container, Input, Text, Editable, EditableInput, EditableTextarea, EditablePreview, Flex, } from '@chakra-ui/react'

import {LogContext} from '../main'
import {Path} from './Path'

export const Log = ({log}) => {

  return (
    <li style={{listStyle: "none", display: "flex", alignItems: "center"}}>
      <Path
        prev = ""
        now = ""
        next = ""
      />
      {log.commit?.title}
    </li>
  )
}
