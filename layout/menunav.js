import { Box, Flex, Text, IconButton, Button, Stack,
  Collapse,Grid, GridItem, Icon, Popover, PopoverTrigger,PopoverContent,
  useColorModeValue, useBreakpointValue, useDisclosure,
} from '@chakra-ui/react';
import Link from "next/link";

const Menunav = () => {


  return (
    <Flex direction={'column'} bg="gray.100" shadow={'md'} p={2}>
      <Stack direction={'row'} >

<Link href={'/'}>
  <Button >
       <Text fontSize={'md'}>Home</Text>
</Button>
</Link>
  
  <Link href={'/components/Cedula/addCedula'} >
  <Button>
       <Text fontSize={'md'}>Cedula</Text>
</Button>
      </Link>

      <Link href={'/components/Cedula/listCedula'} >
  <Button>
       <Text fontSize={'md'}>Cedula Lists</Text>
</Button>
      </Link>

<Link href={'/components/Laboratory'} >
  <Button>
       <Text fontSize={'md'}>Laboratory Fee</Text>
  </Button>
</Link>

<Link href={'/components/CivilRegistrar'} >
  <Button>
       <Text fontSize={'md'}>MCR Fee</Text>
  </Button>
</Link>
  
  

</Stack>
</Flex>

  
)


}

export default Menunav;