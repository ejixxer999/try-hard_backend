import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Messages, NewsContainer } from "../../styles/News";


const messages = [
    "EveryBody Clap Your Hands",
    "SLIDE THE RIGHT",
    "GRAND OPEINING!!",
    "10% OFF Winter sale!!"
]

function News() {
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 3000)
        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length)
            setShow(true)

            setTimeout(() => {
                setShow(false)
            }, 3000)

        }, 4000)
        return () => {
            clearInterval(intervalId);
        }
    },[])


    return(
       <NewsContainer>
        <Slide direction={show ? "right": "left"} in={show} timeout={{
            enter: 500,
            exit:100
        }}>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Messages>
                {messages[messageIndex]}
            </Messages>
        </Box>
        </Slide>
       </NewsContainer>
    )

}

export default News;