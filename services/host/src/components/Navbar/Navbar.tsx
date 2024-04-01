'use client'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
} from '@chakra-ui/react'
// import { HamburgerIcon, CloseIcon, AddIcon, LinkIcon } from '@chakra-ui/icons'
import { BsPersonFill } from 'react-icons/bs'
// @ts-ignore
import store from "store/Store";
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const Links = [ {name:'Login', url:'/login'}, {name:'About', url:'/about'}]

const Navbar = observer(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { count } = store

  return (
    <>
      <Box bg={'white'} mb={10} p={0}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to={'/'}>Logo</Link>
          </HStack>
          <Flex alignItems={'center'}>
            <BsPersonFill
              cursor={'pointer'}
              width={50}
              height={50}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link to={link.url}>{link.name}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}

        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <Link key={link.name} to={link.url}>{link.name}</Link>
          ))}
        </HStack>
      </Box>

      {/* <Button onClick={() => store.increment()}>+</Button>
      {count}
      <Button onClick={() => store.decrement()}>-</Button> */}
    </>
  )
})

export default Navbar;