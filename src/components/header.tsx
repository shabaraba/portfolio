import Image from 'next/image'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import {Box, Container, Flex, Spacer, HStack} from '@chakra-ui/react'

export default () => {
  return (
    <Box 
      position="sticky"
      top={0}
      bg="white"
      zIndex={1000}
    >
      <Container maxW="container.lg">
        <Flex>
          <Image
            priority
            src="/images/profile.jpg"
            height={44}
            width={44}
            alt="test"
          />
          <h1>test</h1>
          <Spacer />
          <HStack>
            <AnchorLink href="#about" offset={50}>About</AnchorLink>
            <AnchorLink href="#skill" offset={50}>Skill</AnchorLink>
            <AnchorLink href="#work" offset={50}>Work</AnchorLink>
            <AnchorLink href="#log" offset={50}>Logs</AnchorLink>
            <AnchorLink href="#contact" offset={50}>Contact</AnchorLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
