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

<Link href={'/components/LCR'} >
  <Button>
       <Text fontSize={'md'}>Local Civil Registrar</Text>
  </Button>
</Link>

<Link href={'/components/laboratory'} >
  <Button>
       <Text fontSize={'md'}>Medical Laboratory</Text>
  </Button>
</Link>

<Link href={'/components/orDataView/saveORdata'} >
  <Button >
       <Text fontSize={'md'}>OR Entry</Text>
  </Button>
</Link>

<Link href={'/components/reports/rpt_payments'} >
  <Button >
       <Text fontSize={'md'}>Reports</Text>
  </Button>
</Link>
  
  

</Stack>
</Flex>

  
)


}

export default Menunav;