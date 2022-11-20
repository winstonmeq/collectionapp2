import { Flex, Avatar, Box, Button, Spacer } from '@chakra-ui/react';

import { useRef } from 'react';


const Print_cedula = ({data}) => {

    
  

    const tableRef = useRef(null);

    
    return (
      <Flex direction={'column'}>

      <Box>     

<table  ref={tableRef}>

        <tbody>
            <tr>
                <td>2022</td>
                <td>del carnmen, president roxas</td>
                <td>11 12 2022</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td colspan="3">
                    <p>mequila winston d</p>
                </td>
                <td>925-245-345</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td colspan="3">del carmen, president roxas</td>
                <td>/</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Pilipino</td>
                <td>no</td>
                <td colspan="2">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </tbody>
    
</table>
      </Box>
      </Flex>
    )
}

export default Print_cedula;
