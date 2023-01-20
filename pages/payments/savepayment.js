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

const Savepayment = ({transacId, amount}) => {
 
    const [paylist, setpaylist] = useState([])
    const [customerName, setcustomerName] = useState('');
    const [orText, setorText] = useState('');
    const [userId, setuserId] = useState('635684a1d9f90d0fed02ca51')

    const { isOpen, onOpen, onClose } = useDisclosure()


      const handleSavePayment = async () => {
        try {
    
          const payload = (transacId, customerName, amount, orText, userId)
    
          const response = await axios.post('http://192.168.0.8:3000/api/Payment/addPayment', payload);
    
       
    
        } catch (error) {
          console.log(error)
        }
      }
    

  return (
    <Flex >
        
    <Button onClick={onOpen}>Add</Button>

  <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'xl'}  >
    <ModalOverlay />
    <ModalContent >
      <ModalHeader>Print Payment</ModalHeader>
    
      <ModalBody >  
          <form onSubmit={handleSavePayment}>
          <label>Transaction Id</label>
          <Input type='text' value={transacId} onChange={e => {}}/>
          <label >Customer Name</label>
          <Input type='text' value={customerName} onChange={e => {setcustomerName(e.target.value)}}  />
          <label>OR Text</label>
          <Input type='text' value={orText} onChange={e => {setorText(e.target.value)}}  />
          <label>Amount</label>
          <Input type='number' value={amount} onChange={e => {setamount(e.target.value)}}  />
            <Button type="submit">Submit</Button>
          </form>
     </ModalBody>

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
