import React, {useRef, useState, useEffect, useLayoutEffect, createContext, useContext} from 'react'
import {Box, HStack, Container, Input, Text, Editable, EditableInput, EditableTextarea, EditablePreview, Flex, } from '@chakra-ui/react'

import {LogContext} from '../main'

export const Log = () => {
  const logs = useContext(LogContext)
  useEffect(() => {
  }, [])
}
