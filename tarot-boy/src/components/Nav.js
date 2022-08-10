import React from 'react';
import { 
    Flex, 
    Button,
    IconButton, 
    Box, 
    Spacer,
    Text, 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Stack,
    useColorMode,
    Link,
    Image
  } from '@chakra-ui/react';
import '../App.css'
import LogoDark from '../altoma_dark.png'
import LogoLight from '../altoma_light.png'
  
import { CgSun, CgMoon, CgMenu } from 'react-icons/cg';

function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { colorMode, toggleColorMode } = useColorMode();

    

  return (
    <Flex>
        <Box>
            <IconButton icon={<CgMenu />} isRound='true' size='lg' p={4} m={4} onClick={onOpen}/>
        </Box>
        <Spacer />
        <Box>
            <IconButton icon={ colorMode === 'dark' ? <CgMoon /> : <CgSun />} isRound='true' size='lg' p={4} m={4} onClick={toggleColorMode}/>
        </Box>
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            size='xs'
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <Link href='/'>
                        <Image src={ colorMode === 'dark' ? LogoLight : LogoDark} alt= {colorMode === 'dark' ? 'altoma logo light' : 'altoma logo dark'} href='/' m='-15px'/>
                    </Link>
                </DrawerHeader>

                <DrawerBody>
                    <Stack>
                        <Link href='/single' className='menu-item scr' fontSize='3xl' style={{textDecoration: 'none'}}>Single Card Reading</Link>
                        <Link href='/spread' className='menu-item tcs' fontSize='3xl' style={{textDecoration: 'none'}}>Three Card Spread</Link>
                        <Link href='/tarotindex' className='menu-item ti' fontSize='3xl' style={{textDecoration: 'none'}}>Tarot Index</Link>
                        <Link href='/about' className='menu-item ab' fontSize='3xl' style={{textDecoration: 'none'}}>About</Link>
                    </Stack>
                </DrawerBody>

                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </Flex>
    
  )
}

export default Nav