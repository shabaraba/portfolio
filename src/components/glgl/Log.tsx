import React from 'react'
import {ListItem} from '@chakra-ui/react'

import {log, eachLog} from '.'
import {CommitPath, BranchPath, CommitDot} from './Path'

export const Log = ({log}: {log:log}) => {
  if (log.latest.action === 'branch') return (
    <ListItem
      listStyleType="none"
      display="flex"
      alignItems="center"
    >
      <BranchPath prevLog={log.prev} currentLog={log.latest}/>
    </ListItem>
  )

  const currentLog: eachLog = log.latest
  const prevLog: eachLog| null = log.prev ?? null
  const branchName: string = currentLog.commit.branchName
  const commitTitle: string = currentLog.commit.title
  return (
    <>
      { prevLog?.action !== 'branch' &&
        <ListItem
          listStyleType="none"
          display="flex"
          alignItems="center"
        >
          <CommitPath prevLog={log.prev} currentLog={log.latest}/>
        </ListItem>
      }
      <ListItem
        listStyleType="none"
        display="flex"
        alignItems="center"
        _hover={{
          filter: 'drop-shadow(10px 10px 10px rgba(0,0,0,0.4))',
          transition: 'all .3s'
        }}
        
      >
        <CommitDot log={log.latest} />
        {" [ " + branchName + " ] " + commitTitle}
      </ListItem>
    </>
  )
}
