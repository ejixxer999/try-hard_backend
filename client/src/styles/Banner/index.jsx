import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const BannerContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    
    
}))

export const BannerImage = styled('img')(({src}) => ({
    src: `url(${src})`,
    width: '400px'
}))

export const BannerContent = styled(Box)(() => ({
    disply: 'flex',
    justifyContent: 'center',
    maxWidth: '420',
    padding: '30px'
}))

export const BannerTitle = styled(Typography)(() => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '8px'
}))

export const BannerDescription = styled(Typography)(() => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em'

}))