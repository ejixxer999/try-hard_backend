import { ListItemButton, ListItemIcon } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonIcon from "@mui/icons-material/Person"
import { TheList } from "../../styles/Nav"

export default function Actions() {
    return (
        

        <TheList type="row">

            <ListItemButton
              sx={{
                justifyContent: 'center'
            }}
            >
                <ListItemIcon
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                    <ShoppingCartIcon />
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton
             sx={{
                justifyContent: 'center'
            }}
            >
                <ListItemIcon
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                    <PersonIcon />
                </ListItemIcon>
            </ListItemButton>
        </TheList>
        
        
        

    )
}

