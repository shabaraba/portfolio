import Image from 'next/image'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import {Container, Flex, Spacer, HStack} from '@chakra-ui/react'
import Sticky from 'react-sticky-el'

export default () => {
  return (
    <Sticky>
      <Container maxW="conainer.lg">
        <header style={{background:"white"}}>
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
              <AnchorLink href="#test1" offset={50}>About</AnchorLink>
              <AnchorLink href="#test1" offset={50}>Skill</AnchorLink>
              <AnchorLink href="#test1" offset={50}>Work</AnchorLink>
              <AnchorLink href="#test1" offset={50}>Logs</AnchorLink>
              <AnchorLink href="#test1" offset={50}>Contact</AnchorLink>
            </HStack>
          </Flex>
        </header>
      </Container>
    </Sticky>
  )
}
