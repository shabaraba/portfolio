import {Link, Icon, Container, Flex, Spacer, HStack} from '@chakra-ui/react'
import {SiTwitter, SiGmail} from 'react-icons/si'

export default () => {
  const iconSize = 6
  return (
    <>
      <div id="test1">contact</div>
      <HStack>
        <Link href="https://twitter.com/shaba_raba">
          <Icon as={SiTwitter} w={iconSize} h={iconSize} filter='drop-shadow(3px 3px 3px rgba(0,0,0,0.2))' />
        </Link>
        <Link href="mailto:work.shabaraba@gmail.com">
          <Icon as={SiGmail} w={iconSize} h={iconSize} filter='drop-shadow(3px 3px 3px rgba(0,0,0,0.2))' />
        </Link>
      </HStack>
    </>
  )
}

