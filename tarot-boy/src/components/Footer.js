import React from 'react'
import { Container, Stack, ButtonGroup, IconButton, Text, useColorMode, Image } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'
import LogoDark from '../altoma_dark.png'
import LogoLight from '../altoma_light.png'
// styling source = https://pro.chakra-ui.com/components/marketing/footers

function Footer() {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
        <Stack spacing={{ base: '4', md: '5' }}>
        <Stack justify="space-between" direction="row" align="center">
        <Image width='35%' src={ colorMode === 'dark' ? LogoLight : LogoDark} alt= {colorMode === 'dark' ? 'altoma logo light' : 'altoma logo dark'} href='/' m='-15px'/>
            <ButtonGroup variant="ghost">
            <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
            />
            </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Altoma Tarot. All rights reserved.
        </Text>
        </Stack>
    </Container>  
    )
}

export default Footer