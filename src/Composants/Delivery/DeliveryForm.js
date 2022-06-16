import { Alert, Button, FormControl, FormHelperText, Input, InputLabel, Stack } from "@mui/material";
import useAxios from "axios-hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../../Composants/form.css';

const DeliveryForm = () => { 

    const [delivery, setDelivery] = useState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDelivery(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({data: delivery}).then(()=>{
            navigate("/deliveries");
        })
    }

    const [{data, loading, error}, postData] = useAxios(
        {
            url: "/deliveryNote",
            method: "POST",
        }, 
        {
            manual: true
        }
    )

    return(
        <div>
            <h2>New delivery note</h2>
            <Stack spacing={2} onSubmit={handleSubmit} >
                <FormControl>
                    <InputLabel htmlFor="date">Date</InputLabel>
                    <Input id="date" aria-describedby="date-text" name="date" required onChange={handleChange}/>
                    <FormHelperText id="date-text">Enter the date</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="totalProduit">Total of products</InputLabel>
                    <Input id="totalProduit" aria-describedby="totalProduit-text" name="totalProduit" required onChange={handleChange}/>
                    <FormHelperText id="totalProduit-text">Enter the total of products</FormHelperText>
                </FormControl>           
                <Button size="small" onClick={handleSubmit}>Submit</Button>
                {error && <Alert severity="error">Error has occured</Alert>}
            </Stack>
        </div>
    )



}

export default DeliveryForm;