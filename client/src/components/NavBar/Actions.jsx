import { Badge, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { TheList } from "../../styles/Nav";
import { useUIContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

export default function Actions() {
  const nav = useNavigate();
  const { cart, setShowCart } = useUIContext();
  return (
    <TheList type="row">
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Badge badgeContent={cart && cart.length}>
            <ShoppingCartIcon onClick={() => setShowCart(true)} />
          </Badge>
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          onClick={() => nav("/orders")}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PersonIcon />
        </ListItemIcon>
      </ListItemButton>
    </TheList>
  );
}
