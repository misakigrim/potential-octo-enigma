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
    Stack
  } from '@chakra-ui/react';
  
import { CgSun, CgMoon } from 'react-icons/cg';

function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex>
        <Box>
            <IconButton icon={<CgMoon />} isRound='true' size='lg' p={4} m={4} onClick={onOpen}/>
        </Box>
        <Spacer />
        <Box>
            <IconButton icon={<CgSun />} isRound='true' size='lg' p={4} m={4}/>
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
                <DrawerHeader>Insert Logo</DrawerHeader>

                <DrawerBody>
                    <Stack>
                        <Text fontSize='3xl'>Single Card Reading</Text>
                        <Text fontSize='3xl'>Three Card Spread</Text>
                        <Text fontSize='3xl'>Tarot Index</Text>
                        <Text fontSize='3xl'>About</Text>
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