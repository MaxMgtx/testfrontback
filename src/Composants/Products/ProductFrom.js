import { Alert, Button, FormControl, FormHelperText, Input, InputLabel, Stack } from "@mui/material";
import useAxios from "axios-hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../../Composants/form.css';

const ProductForm = () => { 

    const [product, setProduct] = useState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({data: product}).then(()=>{
            navigate("/products");
        })
    }

    const [{data, loading, error}, postData] = useAxios(
        {
            url: "/products",
            method: "POST",
        }, 
        {
            manual: true
        }
    )

    return(
        <div>
            <h2>New product</h2>
            <Stack spacing={2} onSubmit={handleSubmit} >
                <FormControl>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input id="name" aria-describedby="name-text" name="name" required onChange={handleChange}/>
                    <FormHelperText id="name-text">Enter the product name</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="price">Price</InputLabel>
                    <Input id="price" aria-describedby="price-text" name="price" required onChange={handleChange}/>
                    <FormHelperText id="price-text">Enter the product price</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="stock">Stock</InputLabel>
                    <Input id="stock" aria-describedby="stock-text" name="stock" required onChange={handleChange}/>
                    <FormHelperText id="stock-text">Enter the stock </FormHelperText>
                </FormControl>
                           
                <Button size="small" onClick={handleSubmit}>Submit</Button>
                {error && <Alert severity="error">Error has occured</Alert>}
            </Stack>
        </div>
    )



}

export default ProductForm;