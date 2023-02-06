import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";




const Print = () => {


    

    const tableRef = useRef(null);

    const [paymentList, setPaymentList] = useState([]);

    const router = useRouter();

    const { id } = router.query;

    
     console.log(id)

   
    useEffect(() => {        
        async function fetchData(id) {
            const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/Payment/${id}`)
            console.log(data)
            setPaymentList(data);
        }
        fetchData(id);
    }, [id]);



    const tableRef = useRef(null);

    var converter = require('number-to-words');








    return (
        <div>
            <h1>Payment List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentList.map((item,i) => {
                        return (
                            
                            <tr key={i}>
                            <td>{item.transacId}</td>                            
                            <td>{item.customerName}</td>
                            <td>{item.amount}</td>
                            {/* <td>
                            {item.data2.map((item2)=>(

                                <tr>
                                    <td>{item2.name}</td>
                                    <td>{item2.amount}</td>
                                </tr>

))}   
</Box>      
<Box>
<Flex direction={'row'} textAlign={'left'}>
    <Box width={'270px'}></Box>
    <Box>{item.amount.toFixed(2)}</Box>
    <Box height={'40px'}></Box>
</Flex>
<Flex direction={'row'} textAlign={'left'}>
<Box width={'40px'}></Box>
<Box>{converter.toWords(item.amount)}</Box>
</Flex>
</Box>

</Flex>



</Box>




                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Print;
