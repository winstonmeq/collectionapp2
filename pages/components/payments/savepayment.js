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


const Savepayment = ({transacId, amount, savehandle}) => {
 
    const [paylist, setpaylist] = useState([])
    const [customerName, setcustomerName] = useState('');
    const [orText, setorText] = useState('');
    const [userId, setuserId] = useState('635684a1d9f90d0fed02ca51')

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isOpen2, setIsOpen2] = useState();


    const handleSavePayment = async () => {
        try {
    
          const payload = {transacId, customerName, amount, orText, userId}

          console.log(payload)
    
          const response = await axios.post(process.env.NEXTAUTH_URL + '/api/Payment/addPayment', payload);
    
       
    
        } catch (error) {
          console.log(error)
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
          <Input type='text' value={transacId} onChange={e => {}}/>
          <label >Customer Name</label>
          <Input type='text' value={customerName} onChange={(e) => {setcustomerName(e.target.value)}}  />
          <label>OR Text</label>
          <Input type='text' value={orText} onChange={(e) => {setorText(e.target.value)}}  />
          <label>Amount</label>
          <Input type='number' value={amount} onChange={e => {}}  />
            <Button onClick={savehandle} type="submit">Print</Button>
          </form>
     </ModalBody>
     {/* <Button onClick={savehandle} type="submit">Save Handle</Button> */}
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
