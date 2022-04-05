import React, {useRef, useState, useLayoutEffect, createContext, useContext} from 'react'
import {Box, Container, Input, Text, Editable, EditableInput, EditableTextarea, EditablePreview,} from '@chakra-ui/react'

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

export const Block:React.FC<Props> = ({ command=null }: Props) => {
  let CommandResult: React.FC

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
      CommandResult = HelpBlock
      console.log("default")
      break
  }
  return (
    <>
      <CommandResult />
      <CommandLine />
    </>
  )
}

export const CommandLine: React.FC = () => {
  const inputElement = useRef<HTMLInputElement>(null)
  const { histories, setHistories } = useContext(CommandContext)
  const [ closed, setClosed ] = useState(false)
  const [ command, setCommand ] = useState("")

  inputElement.current?.focus()

  const onInput = (e:any) => {
    console.log(inputElement.current.value)
    if (e.key != 'Enter') return
    console.log("continue")

    setHistories([...histories, inputElement.current.value])
    setClosed(true)
    setCommand(inputElement.current.value)
  }

  const onSubmit= (e:string) => {
    console.log(e)
    setHistories([...histories, e])
    setClosed(true)
    setCommand(e)
  }

  return (
    <Editable 
      defaultValue=""
      ref={inputElement}
      submitOnBlur={false}
      onSubmit={onSubmit}
      startWithEditView={true}
      selectAllOnFocus={false}
    >
      <EditablePreview />
      <EditableInput
        _focus={{outline: "none"}}
      />
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
