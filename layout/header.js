import { Box, Flex, Text, IconButton, Button, Stack,
  Collapse,Grid, GridItem, Icon, Link, Popover, PopoverTrigger,PopoverContent,
  useColorModeValue, useBreakpointValue, useDisclosure,
} from '@chakra-ui/react';

const Header = () => {

  return (
  <Grid pr={12} templateColumns='repeat(3, 1fr)' gap={2} >
    
    <GridItem colSpan={1}>
    <Stack>

    <Text fontWeight={'bold'} fontSize={'md'}>Welcome</Text>
    </Stack>
    </GridItem>

    <GridItem colSpan={1}>

    </GridItem>
    
    <GridItem colSpan={1}>
 
   <Flex direction={'row'} justify={'right'}>

<Stack direction={'row'}>

<Link href={'/components/login/signIn'} _hover="none">
<Text fontWeight={'bold'} fontSize={'md'}>Sign In</Text>
</Link>

<Text fontSize={'md'}>Sign Up </Text>
</Stack>
     


    </Flex>
   
    </GridItem>
  </Grid>

  )


}

export default Header;