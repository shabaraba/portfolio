import React, {useRef, useState, useLayoutEffect, createContext, useContext} from 'react'
import {Box, Container, Input, Text, Editable, EditableInput, EditableTextarea, EditablePreview, Flex, } from '@chakra-ui/react'

export const CommandContext = createContext(null)

export default () => {
  const [histories, setHistories] = useState([""])
  const [input, setInput] = useState("")
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    scrollBottomRef?.current?.scrollIntoView();
  })

  return (
    <Container>
      <CommandContext.Provider value={{ histories, setHistories }}>
        {histories.map((history: string, index: number) => <Block key={index} command={history}/>)}
      </CommandContext.Provider>
      <Box ref={scrollBottomRef}/>
    </Container>
  )
}

type Props = {
  command: string
}

export const Block:React.VFC<Props> = () => {
  const [command, setCommand] = useState(null)
  let CommandResult: React.FC
  const applyCommand = ((c: string) => {
    setCommand(c)
  })

  switch (command) {
    case '-h':
      CommandResult = HelpBlock
      console.log("help")
      break
    case 'ls':
      CommandResult = LsBlock
      console.log("list")
      break
    default:
      CommandResult = () => <></>
      console.log("default")
      break
  }
  return (
    <>
      <CommandLine applyCommand={applyCommand}/>
      <CommandResult />
    </>
  )
}

interface CommandLineProps {
  applyCommand: (c: string) => void,
}

export const CommandLine: React.VFC<CommandLineProps> = ({applyCommand}: CommandLineProps) => {
  const inputElement = useRef<HTMLInputElement>(null)
  const { histories, setHistories } = useContext(CommandContext)
  const [ closed, setClosed ] = useState(false)

  const currentElement = inputElement.current
  currentElement?.focus()

  const onSubmit= (e:string) => {
    console.log(e)
    setHistories([...histories, e])
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

export const HelpBlock = () => {
  return <Box>help</Box>
}

export const LsBlock = () => {
  return <Box>page list</Box>
}
