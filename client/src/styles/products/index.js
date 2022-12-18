import { Button, IconButton } from "@mui/material";
import { Box, styled } from "@mui/system";

export const Product = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: 'column'
}))

export const ProductImage = styled('img')(({src}) => ({
    src: `url(${src})`,
    width: '100%',
    padding: '10px'

}))

export const ProductButton = styled(IconButton)(() => ({
    margin: 4,
    background: '#2026BC'
}))

export const ProductAddToCart = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'show'
})(({ show }) => ({
    width: '120px',
    fontSize: '12px',
    background: '#2026BC'
    
}))

export const ProductDataWrapper = styled(Box)(({show}) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}))

export const ProductActionWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'show'
})(({ show }) => ({
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%"

}))
