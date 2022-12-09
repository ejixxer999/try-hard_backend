import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez"

export const NavbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}))

export const NavbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: "Montez"
}))

export const TheList = styled(List)(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center'
}))

export const NavImage = styled('img')(({src}) => ({
    src: `url(${src})`,
    width: '150px',
    justifyContent: 'left'
}))
