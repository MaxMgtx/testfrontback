import { Alert, Button, FormControl, FormHelperText, Input, InputLabel, Stack } from "@mui/material";
import useAxios from "axios-hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './customerform.css';

const CustomerForm = () => { 

    const [customer, setCustomer] = useState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCustomer(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({data: customer}).then(()=>{
            navigate("/customers");
        })
    }

    const [{data, loading, error}, postData] = useAxios(
        {
            url: "/customers",
            method: "POST",
        }, 
        {
            manual: true
        }
    )

    return(
        <div>
            <h2>New customer</h2>
            <Stack spacing={2} onSubmit={handleSubmit} >
                <FormControl>
                    <InputLabel htmlFor="firstname">Firstname</InputLabel>
                    <Input id="firstname" aria-describedby="firstname-text" name="firstName" required onChange={handleChange}/>
                    <FormHelperText id="firstname-text">Enter your firstname</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="lastname">Lastname</InputLabel>
                    <Input id="lastname" aria-describedby="lastname-text" name="lastName" required onChange={handleChange}/>
                    <FormHelperText id="lastname-text">Enter your lastname</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="phone">Phone</InputLabel>
                    <Input id="phone" aria-describedby="phone-text" name="phone" required onChange={handleChange}/>
                    <FormHelperText id="phone-text">Enter your phone number</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="mail">Mail address</InputLabel>
                    <Input id="mail" aria-describedby="mail-text" name="mail" required onChange={handleChange}/>
                    <FormHelperText id="mail-text">Enter your mail address</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <Input id="address" aria-describedby="address-text" name="address" required onChange={handleChange}/>
                    <FormHelperText id="address-text">Enter your full address</FormHelperText>
                </FormControl>            
                <Button size="small" onClick={handleSubmit}>Submit</Button>
                {error && <Alert severity="error">Error has occured</Alert>}
            </Stack>
        </div>
    )



}

export default CustomerForm;