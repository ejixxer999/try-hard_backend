import React, { useState, useEffect } from "react";
import axios from "axios";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/orders");
      setOrders(response.data);
    }
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.created_at}</td>
            <td>{order.total_cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderHistory;