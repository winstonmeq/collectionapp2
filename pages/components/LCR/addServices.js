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
import axios from 'axios';




const AddLCR = ({lcrdata}) => {

    const [newlcrdata, setnewlcrdata] = useState({});
    const [data,setdata] = useState([lcrdata]);
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://192.168.0.8:3000/api/LCR/addLCRdata', newlcrdata);
          console.log(response);

        } catch (error) {

          console.error(error);

        }

      };
   
      console.log(lcrdata);
     

return (
    <>
 <h1>LCR data List</h1>
      <ul>
      { lcrdata.map((item) => (
              <li key={item.name}>{item.name} {item.amount}</li>
            ))
         }
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={(e) => setnewlcrdata({ ...newlcrdata, name: e.target.value })} />
        <label htmlFor="description">Amount:</label>
        <input type="text" id="Amount" onChange={(e) => setnewlcrdata({ ...newlcrdata, amount: e.target.value })} />
        <label htmlFor="Type">Type:</label>
        <input type="text" id="Type" onChange={(e) => setnewlcrdata({ ...newlcrdata, type: e.target.value })} />
        <button type="submit">Add LCR Data</button>
      </form>

    </>
)



}



export async function getServerSideProps() {
    const res = await axios.post('http://192.168.0.8:3000/api/LCR/listLCRdata');
    const lcrdata = res.data;
  
    return {
      props: {
        lcrdata

       
      }
    }

}






export default AddLCR;
