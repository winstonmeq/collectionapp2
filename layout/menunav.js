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
  <Button size={'sm'} >
       <Text fontSize={'sm'}>Home</Text>
</Button>
</Link>
  
  {/* <Link href={'/components/Cedula/addCedulaView'} >
  <Button>
       <Text fontSize={'md'}>Cedula</Text>
</Button>
      </Link> */}

      <Link href={'/components/Cedula/listCedula'} >
  <Button size={'sm'}  >
       <Text fontSize={'sm'}>Cedula</Text>
</Button>
      </Link>

<Link href={'/components/Business'} >
  <Button size={'sm'} >
       <Text fontSize={'sm'}>Bayad</Text>
  </Button>
</Link>



<Link href={'/components/orDataView/saveORdata'} >
  <Button size={'sm'}  >
       <Text fontSize={'sm'}>OR Entry</Text>
  </Button>
</Link>



<Link href={'/components/reports/collection_deposit'} >
  <Button size={'sm'}  >
       <Text fontSize={'sm'}>OR Collection</Text>
  </Button>
</Link>
  
 

<Link href={'/components/reports/reportall'} >
  <Button size={'sm'}  >
       <Text fontSize={'sm'}>Abstract</Text>
  </Button>
</Link>

<Link href={'/components/Utility'} >
  <Button size={'sm'}  >
       <Text fontSize={'sm'}>Utility</Text>
  </Button>
</Link>

<Link href={'/components/DataReport/abstractReport'} >
  <Button size={'sm'} >
       <Text fontSize={'sm'}>Abstract Report</Text>
  </Button>
</Link>

<Link href={'/components/DataReport/collectionDeposit'} >
  <Button size={'sm'} >
       <Text fontSize={'sm'}>Collection Report</Text>
  </Button>
</Link>

<Link href={'/components/Cedula/cedula_report'} >
  <Button size={'sm'}  >
       <Text fontSize={'sm'}>Cedula Report</Text>
  </Button>
</Link>


<Link href={'/components/Forward'} >
  <Button size={'sm'}  >
       <Text fontSize={'sm'}>Forward Balance</Text>
  </Button>
</Link>

  
  
  
  

</Stack>
</Flex>

  
)


}

export default Menunav;