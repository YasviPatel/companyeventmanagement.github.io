import React, { useRef, useEffect } from 'react'

export default function Paypal() {

    const paypal=useRef()

    useEffect(() => {
      window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "USD",
                                value: 1.32
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order);
            },
            onError: (err) => {
                alert("An error has ocurred");
            }
      }).render(paypal.current)
    
    }, [])
    

  return (
    <div>
        <div ref={paypal}></div>
    </div>
  )
}
