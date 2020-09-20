import { Box, Button } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Joke = () =>{

    const [joke, setJoke] = useState('')

    useEffect(() =>{
        getJoke()
    },[])
    
    const getJoke = async () =>{
        const settings = {
            async: true,
            //   crossDomain: true,
            url: "https://icanhazdadjoke.com/",
            method: "GET",
            headers: {
            Accept: `application/json`,
            },
        };

        const {data} = await axios(settings);
        console.log(data)
        setJoke(data.joke)
    }
    
    return (
        <>
        <Box>{joke}</Box>
        <Button onClick={getJoke}>Another</Button>
        </>
    )
}

export default Joke