import {
    Flex,
    Avatar,
    Box,
    Button,
    Text,
    Input,
    Spacer,
  } from "@chakra-ui/react";
import { useState } from "react";





const AddLCR = () => {

    const [type,settype] = useState('');
    const [amount,setamount] = useState(0);
    
    let fee = [{name:'dfd',description:'sdfsdf', amount:'3443'}];


    const lcrfee = {
        name:type,
        amount: amount
    }


    
    const addfee = () => {

        fee.push(lcrfee);

        console.log(fee)
        
        
    }

return (
    <Flex direction={'row'}>

<Box>

   
<Input
  type="text"
  placeholder="Type"
  required
  onChange={(e) => {
  settype(e.target.value);
}}/>



   
<Input
  type="text"
  placeholder="Amount"
  required
  onChange={(e) => {
  setamount(e.target.value);
}}/>


<Button onClick={addfee}>add fee </Button>
</Box>

<Box border={'1px'} width={"50%"} margin={'10px'}>

 {fee.map((item) => {

    return (
        <div>
            {item.description}
        </div>
    )
   
 })}



</Box>

</Flex>
)


}

export default AddLCR;