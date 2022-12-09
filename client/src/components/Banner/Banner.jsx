import { Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/Banner";


function Banner (){

    return(
        <BannerContainer>
            <BannerImage src="/images/banner/fld.png"/>
            <BannerContent>
                <BannerTitle variant="h2">
                    Fresh Look Details
                </BannerTitle>
                <Typography variant="h6">
                    Luxury Automotive Detailing
                </Typography>
                <BannerDescription variant="subtitle">
                    This is the description of what we do.
                </BannerDescription>
                
            </BannerContent>
        </BannerContainer>
        
    )

}

export default Banner;