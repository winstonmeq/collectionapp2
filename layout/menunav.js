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
  
  {/* <Link href={'/components/Cedula/addCedulaView'} >
  <Button>
       <Text fontSize={'md'}>Cedula</Text>
</Button>
      </Link> */}

      <Link href={'/components/Cedula/listCedula'} >
  <Button>
       <Text fontSize={'md'}>Cedula</Text>
</Button>
      </Link>

<Link href={'/components/Business'} >
  <Button>
       <Text fontSize={'md'}>Bayad</Text>
  </Button>
</Link>



<Link href={'/components/orDataView/saveORdata'} >
  <Button >
       <Text fontSize={'md'}>OR Entry</Text>
  </Button>
</Link>



<Link href={'/components/reports/collection_deposit'} >
  <Button >
       <Text fontSize={'md'}>Collection & Deposit</Text>
  </Button>
</Link>
  
  <Link href={'/components/Utility'} >
  <Button >
       <Text fontSize={'md'}>Utility</Text>
  </Button>
</Link>


<Link href={'/components/reports/reportall'} >
  <Button >
       <Text fontSize={'md'}>Reports All</Text>
  </Button>
</Link>

  
  
  
  

</Stack>
</Flex>

  
)


}

export default Menunav;