import * as React from "react";
import { useUIContext } from "../context/context";
import axios from "axios";
import { toast } from "react-toastify";
import TableContainer from "@mui/material/TableContainer";
import OrderRow from "./order";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const {userToken} = useUIContext()
  const [orders, setOrders] = React.useState([])
  const nav = useNavigate()
  if(!userToken) {
    toast.success(`Please login first`);
    nav('/login')
  }
  const getOrders = () => {
    axios
      .get(
        "/orders",
        {
          headers: {
            Authorization: userToken,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setOrders(res.data.orders)
          toast.success(`Orders data fetched.`);
        } else {
          toast.error(`Error!!! ${res.data.message}`);
        }
      })
      .catch((error) => {
        toast.error(`Error!!! ${error}`);
      });
  };
  
  React.useEffect(()=>{
    getOrders()
  }, [])
  return (
    <div className="container p-3">
      <h1 className="text-center my-1">Orders History</h1>
      







    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order ID</TableCell>
            <TableCell align="right">TOTAL AMOUNT ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </div>
  );
};

export default Orders;