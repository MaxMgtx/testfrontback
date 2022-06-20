import { Alert, Button, FormControl, FormHelperText, Input, InputLabel, Stack } from "@mui/material";
import useAxios from "axios-hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../../Composants/form.css';

const InvoiceForm = () => { 

    const [invoice, setInvoice] = useState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInvoice(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({data: invoice}).then(()=>{
            navigate("/invoices");
        })
    }

    const [{data, loading, error}, postData] = useAxios(
        {
            url: "/invoices",
            method: "POST",
        }, 
        {
            manual: true
        }
    )

    return(
        <div>
            <h2>New invoice</h2>
            <Stack spacing={2} onSubmit={handleSubmit} >
                <FormControl>
                    <InputLabel htmlFor="price">Total price</InputLabel>
                    <Input id="price" aria-describedby="price-text" name="price" required onChange={handleChange}/>
                    <FormHelperText id="price-text">Enter the total price</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="date">Date</InputLabel>
                    <Input id="date" aria-describedby="date-text" name="date" required onChange={handleChange}/>
                    <FormHelperText id="date-text">Enter the date</FormHelperText>
                </FormControl>          
                <Button size="small" onClick={handleSubmit}>Submit</Button>
                {error && <Alert severity="error">Error has occured</Alert>}
            </Stack>
        </div>
    )



}

export default InvoiceForm;