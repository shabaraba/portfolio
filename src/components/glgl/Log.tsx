import React, {useRef, useEffect} from 'react'
import {ListItem, Text, Box, Stack, HStack} from '@chakra-ui/react'

import {log, eachLog} from '.'
import {BranchPath, CommitDot} from './Path'

export const Log = ({log, reverse}: {log:log, reverse: boolean}) => {
  const elm = useRef(null)
  useEffect(() => {
    console.log(elm?.current?.clientHeight)
  }, [elm])

  if (log.latest.action === 'branch') return (
    <ListItem
      listStyleType="none"
      display="flex"
      alignItems="center"
    >
      <BranchPath prevLog={log.prev} currentLog={log.latest} reverse={reverse}/>
    </ListItem>
  )

  const currentLog: eachLog = log.latest
  const prevLog: eachLog| null = log.prev ?? null
  const branchName: string = currentLog.commit.branchName
  const commitTitle: string = currentLog.commit.title
  return (
    <ListItem
          listStyleType="none"
          display="flex"
          alignItems="center"
          ref={elm}
    >
      <Stack spacing='0px'>
        { !reverse && prevLog?.action !== 'branch' &&
          <BranchPath prevLog={log.prev} currentLog={log.latest} reverse={reverse}/>
        }
        <Box
          _hover={{
            filter: 'drop-shadow(10px 10px 10px rgba(0,0,0,0.4))',
            transition: 'all .3s'
          }}
          
        >
          <HStack>
            <CommitDot log={log.latest} />
            <Text>
              {" [ " + branchName + " ] " + commitTitle}
            </Text>
          </HStack>
          <HStack>
            <BranchPath prevLog={log.latest} currentLog={log.latest} reverse={reverse}/>
            <Text>
              body...
            </Text>
          </HStack>
        </Box>
        { reverse && prevLog?.action !== 'branch' &&
          <BranchPath prevLog={log.prev} currentLog={log.latest} reverse={reverse}/>
        }
      </Stack>
    </ListItem>
  )
}
