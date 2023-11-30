import React, { useContext } from "react"
import styled from "styled-components"
import { DataContext } from "./DataContext"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { useAuth0 } from "@auth0/auth0-react"
import { useTranslation } from "react-i18next"

const CartTotalContainer = styled.div`
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TotalAmount = styled.h3`
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CartTotal = () => {
  const {t} = useTranslation()
  const { isAuthenticated } = useAuth0()
  const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID
  const { cart } = useContext(DataContext);
  const total = cart.reduce((acc, el) => acc + el.precio * el.quanty, 0)

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      console.log("pago realizado: ", details)
    });
  };

  return (
    <CartTotalContainer>
      <TotalAmount className="texto">{t('carrito_total')}: ${total}</TotalAmount>
      {isAuthenticated 
        ?(
          <PayPalScriptProvider options={{ "client-id": clientId }}>
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
          </PayPalScriptProvider>
        ):
        <p className="texto">{t('carrito_condicion')}</p>
      }
    </CartTotalContainer>
  );
};

export default CartTotal
