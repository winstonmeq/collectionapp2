import { Box, Flex, Text, IconButton, Button, Stack,
  Collapse,Grid, GridItem, Icon, Popover, PopoverTrigger,PopoverContent,
  useColorModeValue, useBreakpointValue, useDisclosure,

} from '@chakra-ui/react';

import Link from "next/link";

const Menunav = () => {

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction="column" bg="gray.100" shadow="md" p={2} maxWidth="100%">
    <Grid templateColumns="repeat(auto-fit, minmax(90px, 1fr))" gap={2} alignItems="center">

      <Link href="/">
        <Button aria-label="Home" variant="ghost" size={isSmallScreen ? 'sm' : 'md'}>
          <Text fontSize={isSmallScreen ? 'sm' : 'md'}>Home</Text>
        </Button>
      </Link>


      
        <Link href="/components/Cedula/listCedula">
              <Button aria-label="Bayad" variant="ghost" size={isSmallScreen ? 'sm' : 'md'}>
                <Text fontSize={isSmallScreen ? 'sm' : 'md'}>List Cedula</Text>
              </Button>
            </Link>
      
        <Link href="/components/Business">
          <Button  aria-label="Bayad" variant="ghost" size={isSmallScreen ? 'sm' : 'md'}>
            <Text fontSize={isSmallScreen ? 'sm' : 'md'}>Bayad</Text>
          </Button>
        </Link>

        <Link href="/components/orDataView/saveORdata">
          <Button aria-label="OR Entry" variant="ghost" size={isSmallScreen ? 'sm' : 'md'}>
            <Text fontSize={isSmallScreen ? 'sm' : 'md'}>OR Entry</Text>
          </Button>
        </Link>

        {/* <Link href={'/components/reports/collection_deposit'} >
  <Button aria-label="OR Entry" variant="ghost" size={isSmallScreen ? 'sm' : 'md'}  >
       <Text fontSize={isSmallScreen ? 'sm' : 'md'}>OR Collection</Text>
  </Button>
</Link> */}
  
 

<Link href={'/components/reports/reportall'} >
  <Button aria-label="Abstract" variant="ghost" size={isSmallScreen ? 'sm' : 'md'} >
       <Text fontSize={isSmallScreen ? 'sm' : 'md'}>Abstract</Text>
  </Button>
</Link>

<Link href={'/components/Utility'} >
  <Button aria-label="Utility" variant="ghost" size={isSmallScreen ? 'sm' : 'md'} >
       <Text fontSize={isSmallScreen ? 'sm' : 'md'}>Utility</Text>
  </Button>
</Link>

<Popover>
          <PopoverTrigger>
            <Button  aria-label="Cedula" variant="ghost" size={isSmallScreen ? 'sm' : 'md'}>
              <Text fontSize={isSmallScreen ? 'sm' : 'md'}>Reports</Text>
            </Button>
          </PopoverTrigger>

          <PopoverContent>
            <Link href="/components/DataReport/abstractReport">
              <Button size="sm" variant="ghost" px={2} py={1}>
                <Text fontSize="sm">Abstract Report</Text>
              </Button>
            </Link>

            <Link href="/components/DataReport/collectionDeposit">
              <Button size="sm" variant="ghost" px={2} py={1}>
                <Text fontSize="sm">Collection Report</Text>
              </Button>
            </Link>

            <Link href="/components/Cedula/cedula_report">
              <Button size="sm" variant="ghost" px={2} py={1}>
                <Text fontSize="sm">Cedula Report</Text>
              </Button>
            </Link>
          </PopoverContent>
        </Popover>

{/* <Link href={'/components/DataReport/abstractReport'} >
  <Button aria-label="Abstract Report" variant="ghost" size={isSmallScreen ? 'sm' : 'md'} >
       <Text fontSize={isSmallScreen ? 'sm' : 'md'}>Abstract Report</Text>
  </Button>
</Link> */}
{/* 

<Link href={'/components/DataReport/collectionDeposit'} >
  <Button aria-label="Collection Report" variant="ghost" size={isSmallScreen ? 'sm' : 'md'} >
       <Text fontSize={isSmallScreen ? 'sm' : 'md'}>Collection Report</Text>
  </Button>
</Link>

<Link href={'/components/Cedula/cedula_report'} >
  <Button aria-label="Cedula Report" variant="ghost" size={isSmallScreen ? 'sm' : 'md'} >
       <Text fontSize={isSmallScreen ? 'sm' : 'md'}>Cedula Report</Text>
  </Button>
</Link> */}


<Link href={'/components/Forward'} >
  <Button aria-label="Forward Balance" variant="ghost" size={isSmallScreen ? 'sm' : 'md'} >
       <Text fontSize={isSmallScreen ? 'sm' : 'md'}>Forward Balance</Text>
  </Button>
</Link>




      </Grid>
      </Flex>

  )


}

export default Menunav;