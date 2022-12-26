import { Box, Flex, Text, IconButton, Button, Stack,
  Collapse,Grid, GridItem, Icon, Popover, PopoverTrigger,PopoverContent,
  useColorModeValue, useBreakpointValue, useDisclosure,
} from '@chakra-ui/react';
import Link from "next/link";





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

<Button size={'sm'}>
<Link href={'/components/login/signIn'} >
<Text fontWeight={'bold'} fontSize={'md'}>Sign In</Text>
</Link>
</Button>
<Button size={'sm'}>  
<Text fontSize={'md'}>Sign Up </Text>
</Button>
</Stack>
     


    </Flex>
   
    </GridItem>
  </Grid>

  )


}

export default Header;