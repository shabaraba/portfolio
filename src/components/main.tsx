import React, {useRef, useState, useEffect, useLayoutEffect, createContext, useContext} from 'react'
import {Box, HStack, Container, Input, Text, Editable, EditableInput, EditableTextarea, EditablePreview, Flex, } from '@chakra-ui/react'
import {Gitgraph} from '@gitgraph/react'

export const HistoryContext = createContext(null)

export default () => {
  const [color, setColor] = useState("#f00")
  useEffect(() => {
    const element = document.getElementById("test")
    if (element) element.style.fill = color
  } ,[color]);

  const Test: React.VFC = (commit: any) => {
    return (
      <g
        transform = {'translate(0, ' + commit.style.dot.size + ')'}
      >
        <text id="test" fill={color}>test</text>
      </g>
    )
    // return React.createElement(
    //   'g',
    //   { transform: 'translate(0, ' + commit.style.dot.size + ')' },
    //   React.createElement(
    //     'text',
    //     { fill: commit.style.dot.color, alignmentBaseline: 'central' },
    //     commit.hashAbbrev,
    //     ' - ',
    //     commit.subject
    //   ),
    //   React.createElement(
    //     'foreignObject',
    //     { width: '600', x: '10' },
    //     React.createElement(
    //       'p',
    //       null,
    //       "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"
    //     )
    //   )
    // )
  }

  return (
    <Gitgraph
      options = {{
        author: "shaba",
      }}
      
    >
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        master.commit({
          author: "shaba",
          subject: "initial commit",
          // body: "test  test2",
          hash: "string",
          // tag: "tag",
          renderMessage: Test, 
          onClick: (e) => {console.log("onClick"); setColor("#0F0")},
          onMessageClick: () => console.log("onMessageClick"),
          onMouseOver: () => console.log("onMouseOver"),
          onMouseOut: () => console.log("onMouseOut")
        })
        master.commit("test2")
      }}
    </Gitgraph>
  )
}

