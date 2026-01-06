"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalCheckoutButton({ amount }) {
  if (!amount || Number(amount) <= 0) return null;

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "USD",
      }}
    >
      <div className="w-full max-w-xs mx-auto">
        <PayPalButtons
          style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
          createOrder={(data, actions) =>
            actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: Number(amount).toFixed(2),
                  },
                },
              ],
            })
          }
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            alert(
              `Donation successful! Thank you ${details.payer.name.given_name}`
            );
          }}
          onError={(err) => {
            console.error(err);
            alert("Payment failed. Please try again.");
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
}
