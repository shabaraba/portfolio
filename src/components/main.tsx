import React, {useRef, useState, useLayoutEffect, createContext, useContext} from 'react'
import {Box, HStack, Container, Input, Text, Editable, EditableInput, EditableTextarea, EditablePreview, Flex, } from '@chakra-ui/react'

export const HistoryContext = createContext(null)

export default () => {
  const [histories, setHistories] = useState([""])
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    scrollBottomRef?.current?.scrollIntoView();
  })

  return (
    <Container>
      <HistoryContext.Provider value={{ histories, setHistories }}>
        {histories.map((history: string, index: number) => <Block key={index} command={history}/>)}
      </HistoryContext.Provider>
      <Box ref={scrollBottomRef}/>
    </Container>
  )
}

type Props = {
  command: string
}

export const Block:React.VFC<Props> = () => {
  const [command, setCommand] = useState('')
  const { histories, setHistories } = useContext(HistoryContext)
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
  return (
    <>
      <CommandLine applyCommand={applyCommand}/>
      <CommandResult command={parsedCommand}/>
    </>
  )
}

interface CommandLineProps {
  applyCommand: (c: string) => void,
}

export const CommandLine: React.VFC<CommandLineProps> = ({applyCommand}: CommandLineProps) => {
  const inputElement = useRef<HTMLInputElement>(null)
  const [ closed, setClosed ] = useState(false)

  const currentElement = inputElement.current
  currentElement?.focus()

  const onSubmit= (e:string) => {
    console.log(e)
    setClosed(true)
    applyCommand(e)
  }

  const onBlur= (e:React.FocusEvent<HTMLInputElement>) => {
    e.target.focus()
  }

  return (
    <Editable 
      defaultValue=""
      ref={inputElement}
      submitOnBlur={false}
      onSubmit={onSubmit}
      onBlur={onBlur}
      startWithEditView={true}
      selectAllOnFocus={false}
      isDisabled={closed ? true : false}
    >
      <Flex
        align="center"
      >
        <Text>$ </Text>
        <EditablePreview />
        <EditableInput
          _focus={{outline: "none"}}
        />
      </Flex>
    </Editable>
  )
  // if (!closed) {
  //   return <Text contentEditable={true} autoCorrectk ref={inputElement} onKeyPress={onInput} />
  // }
  // return <Text>{command}</Text>
}

interface CommandResultProps {
  command: string[]
}

export const HelpBlock: React.VFC<CommandResultProps> = ({command}: CommandResultProps) => {
  return <Box>help</Box>
}

export const BatBlock: React.VFC<CommandResultProps> = ({command}: CommandResultProps) => {
  return (<></>)
}
