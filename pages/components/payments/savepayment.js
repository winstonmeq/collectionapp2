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


const Savepayment = ({transacId, service_type, amount, savehandle}) => {
 
    const [paylist, setpaylist] = useState([])
    const [customerName, setcustomerName] = useState('');
    const [orText, setorText] = useState('');
    const [userId, setuserId] = useState('635684a1d9f90d0fed02ca51')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter();


    const handleSavePayment = async () => {
        try {
    
          const payload = {transacId, service_type, customerName, amount, orText, userId}

          console.log(payload)         
    
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

            
        router.push('/components/payments/paymentlist');
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
          <Input type='text' readOnly value={service_type} onChange={e => {}}/>
          <label >Customer Name</label>
          <Input type='text' value={customerName} autoFocus={'true'} required onChange={(e) => {setcustomerName(e.target.value)}}  />
          <label>OR Text</label>
          <Input type='text' value={orText} required onChange={(e) => {setorText(e.target.value)}}  />
          <label>Amount</label>
          <Input type='number' value={amount} required onChange={e => {}}  />
         
            {/* <Button type="submit">Save/Print</Button> */}
          </form>
     </ModalBody>
     <Button onClick={handleSavePayment} >Save Handle</Button>
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
