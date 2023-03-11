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
  
  
  const GenerateReport = () => {
   
      
     
      const [datalist, setdatalist] = useState([])
      const [reportName, setreportName] = useState('');
      const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')

    
      const { isOpen, onOpen, onClose } = useDisclosure()
  
      const router = useRouter();  


    useEffect(() => {
            if (datalist.length > 0 && reportName !== '') {
              handleSave();
            }
          }, [datalist, reportName]);
      
         
          
  
          async function fetchData() {
              const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/orReport/fetch_report`)
            
              setdatalist(data);             
              
          }  
       
      


          const handleSave = async () => {
            try {
          
                const datalistWithDate = datalist.map((data) => {
                    return {
                      ...data,
                      reportNum: reportName,
                    };
                  });
                  
                  const response = await axios.post(process.env.NEXTAUTH_URL + '/api/Freport/add_FReport', { datalist2: datalistWithDate });     
            
              if(response.data != null){
                router.push('/')
              }               
        
            } catch (error) {
              console.log(error)
            }

            await axios.get( process.env.NEXTAUTH_URL + `/api/orReport/delete_table`)
              

          }
        
  

     
  
    return (
      <Flex >
        {console.log('generate report datalist', datalist)}


        
        <Input type={'text'} value={reportName}  onChange={(e)=>{setreportName(e.target.value)}} />
        <Button onClick={(e)=>{fetchData()}}>Generate Report</Button>
        
        
     
  
      </Flex>
    )
  
  
  };
  
  export default GenerateReport;
  