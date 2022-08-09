import { Heading, VStack, HStack, IconButton, Text, Spacer } from '@chakra-ui/react'
import ChangeStyle from './ChangeStyle'
import Spread from './Spread'
import Single from './Single'
import { CgSun, CgMoon } from 'react-icons/cg'

function HomePage() {
    return(
        <VStack p={4}>
            <HStack alignSelf='flex-end'>
                <Text mr='4'>Single Card Reading</Text>
                <Text mr='4'>Three Card Spread</Text>
                <Spacer />
                <IconButton icon={<CgSun />} isRound='true' size='lg' m='10'/>
            </HStack>
            <Heading mb='8' fontWeight='extrabold' size='2xl'>Thorn Tarot</Heading>
            
        </VStack>
    )
}

export default HomePage