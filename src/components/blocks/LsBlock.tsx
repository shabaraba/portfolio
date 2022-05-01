import React, {useRef, useState, useLayoutEffect, createContext, useContext} from 'react'
import {Box, HStack, Container, Input, Text, Editable, EditableInput, EditableTextarea, EditablePreview, Flex, } from '@chakra-ui/react'

import { CommandResultProps } from '../console/CommandResultProps'

export const LsBlock: React.VFC<CommandResultProps> = ({command}: CommandResultProps) => {
  return (
    <HStack>
      <Text>README.md</Text>
      <Text>about.md</Text>
      <Text>works.md</Text>
      <Text>contact.md</Text>
    </HStack>
  )
}

