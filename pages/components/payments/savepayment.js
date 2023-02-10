import {
  Flex,
  Box,
  useDisclosure,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useRouter } from "next/router";


const Savepayment = ({transacId, serviceType, amount, savehandle}) => {
 
    const [paylist, setpaylist] = useState([])
    // const [service_type, setservice_type] = useState('');
    const [customerName, setcustomerName] = useState('');
    const [orText, setorText] = useState('');
    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
    const [orType, setorType] = useState('51');
    const [orFrom, setorFrom] = useState(0)
    const [orTo, setorTo] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter();


    const handleSavePayment = async () => {
        try {
    
          const payload = {transacId, serviceType, customerName, amount, orText, userId}

          console.log('browser', payload)         
    
          const response = await axios.post(process.env.NEXTAUTH_URL + '/api/Payment/addPayment', payload);
    
         if(response != null){
         saveData()
         savehandle()
         }
     
         
        } catch (error) {

          console.log(error)

        }
      }


      async function saveData() {

            
        router.push(`/components/payments/${transacId}`);
      }



      useEffect(() => {   

        async function fetchData() {
            const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/or/getOR`)
            console.log('mao ni OR',data[0].orFrom)
            setorFrom(data[0].orFrom)
            setorTo(data[0].orTo)
        }

        fetchData();
        }, []);





/////////////////////sample code for the function para sa OR range 

let range = [];

const generateRange = (number1, number2) => {
  range = [];
  for (let i = number1; i <= number2; i++) {
    range.push(i);
  }
  //return range;
  console.log(range)
}

const  removeValue = () => {

  if (range.length > 0) {
    // range.shift();
     console.log(range.shift())
  }
 
 
}










   

  return (
    <Flex >
        
    <Button onClick={onOpen}>Pay</Button>

  <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'xl'}  >
    <ModalOverlay />
    <ModalContent >
      <ModalHeader>Print Payment</ModalHeader>
    
      <ModalBody >  
          <form onSubmit={handleSavePayment}>
          <label>Transaction Id</label>
          <Input type='text' readOnly value={transacId} onChange={e => {}}/>
          <label>Services Type</label>
          <Input type='text' readOnly value={serviceType} onChange={e => {}}/>
          <label >Customer Name</label>
          <Input type='text' value={customerName} autoFocus={'true'} required onChange={(e) => {setcustomerName(e.target.value)}}  />
          <label>OR Text</label>
          <Input type='text' value={orText} required onChange={(e) => {setorText(e.target.value)}}  />
          <label>Amount</label>
          <Input type='number' value={amount} required onChange={e => {}}  />
         
            {/* <Button type="submit">Save/Print</Button> */}
          </form>
     </ModalBody>
     <Button onClick={handleSavePayment} >Save</Button>

     <Button onClick={(e) =>{ generateRange(orFrom,orTo)}} >Generate OR Number</Button>

     <Button onClick={(e) => removeValue()} >Remove value</Button>

      <ModalFooter>
      
        <Button size={'sm'} colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>


    </Flex>
  )


};

export default Savepayment;
