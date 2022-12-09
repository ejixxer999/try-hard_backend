import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";


export const NewsContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
    overflow: 'hidden',


}))

export const Messages = styled(Typography)(() => ({
    fontSize: '1.5rem'
}))