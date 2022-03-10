// import { useCallback } from "react";
// import useRazorpay from "react-razorpay";

// export default function razorpay() {
//   const Razorpay = useRazorpay();

//   const handlePayment = useCallback(() => {
//     const order = createOrder(params);

//     const options= {
//       key: "rzp_test_c3CUK2FMXa1qKO",
//       amount: "30000",
//       currency: "INR",
//       name: "Acme Corp",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//       order_id: order.id,
//       handler: (res) => {
//         console.log(res);
//       },
//       prefill: {
//         name: "Piyush Garg",
//         email: "youremail@example.com",
//         contact: "9999999999",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzpay = new Razorpay(options);
//     rzpay.open();
//   }, [Razorpay]);

//   return (
//     <div>
//         <div ref={razorpay}></div>
//     </div>
//   );
// }