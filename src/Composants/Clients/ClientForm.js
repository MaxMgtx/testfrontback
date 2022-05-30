import { Button, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const ClientForm = () => { 

    const [name, setName] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let namejson = JSON.stringify(name);
        axios.post("http://localhost:8080/api/v1/clients", 
        namejson,
        {headers: {"Content-Type": "application/json"}}).then((reponse)=>{
            console.log(reponse.data);
            console.log(reponse.status);
            console.log(reponse.format);
        })
        console.log(namejson);
        
    }

    return(
        <div>
            <h2>Nouveau client</h2>
            <FormControl onSubmit={handleSubmit} >
                <InputLabel htmlFor="my-input">Prénom</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" onChange={(e)=> setName(e.target.value)}/>
                <FormHelperText id="my-helper-text">Entrez votre prénom</FormHelperText><br />
                <Button size="small" onClick={handleSubmit} >Soumettre</Button>
            </FormControl>
        </div>
    )



}

export default ClientForm;