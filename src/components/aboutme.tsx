import {Box, Image, Skeleton, Text, Heading, Center, Container, Tooltip, Link, Icon, HStack } from '@chakra-ui/react'
import userSWRImmutable from 'swr/immutable'
import axios from 'axios'
import {SiGithub, SiTwitter} from 'react-icons/si'

export default () => {
  const fetcher = async (uri: string) => {
    const result = await axios.get(uri)
    return result.data
  }
  const {data: fetchedData} = userSWRImmutable('https://api.github.com/users/shabaraba', fetcher)
  if (!fetchedData) return <Skeleton />
  const avatarUri = fetchedData.avatar_url
  const iconSize = 5

  return (
    <Container maxW="container.md">
      <Center>
        <Heading as="h2">
          about me
        </Heading>
      </Center>
      <Box mt={5} mb={5}>
        <HStack spacing={iconSize}>
          <Heading as="h3">
            しゃば / Shaba
          </Heading>
          <Tooltip hasArrow label="Github" placement='top-start'>
            <Link href="https://github.com/shabaraba">
              <Icon as={SiGithub} w={iconSize} h={iconSize} filter='drop-shadow(3px 3px 3px rgba(0,0,0,0.2))' />
            </Link>
          </Tooltip>
          <Tooltip hasArrow label="Twitter" placement='top-start'>
            <Link href="https://twitter.com/shaba_raba">
              <Icon as={SiTwitter} w={iconSize} h={iconSize} filter='drop-shadow(3px 3px 3px rgba(0,0,0,0.2))' />
            </Link>
          </Tooltip>
        </HStack>
        <HStack spacing={iconSize} mt={2} mb={2}>
          <Image
            borderRadius='full'
            boxSize='150px'
            alt='しゃば'
            src={avatarUri}
            filter='drop-shadow(3px 3px 3px rgba(0,0,0,0.2))'
          />
          <Text>
            大阪生まれ、大阪育ちのエンジニア。 
            モノづくりに興味を持ち、メーカー企業でソフトウェアエンジニアとして従事したのち、web業界に転身。
            PHPによるバックエンドを中心に、JavaScriptによるフロントエンドやバックエンドの実装、lambdaやdynamoDBを用いたマイクロサービスの実装などを経験してきました。
          </Text>
        </HStack>
      </Box>
    </Container>
  )
}
