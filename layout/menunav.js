import { Box, Flex, Text, IconButton, Button, Stack,
  Collapse,Grid, GridItem, Icon, Link, Popover, PopoverTrigger,PopoverContent,
  useColorModeValue, useBreakpointValue, useDisclosure,
} from '@chakra-ui/react';

const Menunav = () => {


  return (
    <Flex direction={'column'} bg="gray.100" shadow={'md'} p={2}>
      <Stack direction={'row'} >

<Link href={'/'} _hover="none">
  <Button >
       <Text fontSize={'md'}>Home</Text>
</Button>
</Link>
  
  <Link href={'/components/Cedula/addCedula'} _hover="none">
  <Button>
       <Text fontSize={'md'}>Cedula</Text>
</Button>
      </Link>

<Link href={'/components/Laboratory'} _hover="none">
  <Button>
       <Text fontSize={'md'}>Laboratory Fee</Text>
  </Button>
</Link>

<Link href={'/components/CivilRegistrar'} _hover="none">
  <Button>
       <Text fontSize={'md'}>MCR Fee</Text>
  </Button>
</Link>
  
  

</Stack>
</Flex>

  
)


}

export default Menunav;