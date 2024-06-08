import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Lottie from "lottie-react";
import Cart from "../../assets/Images/payCart.json";
import SectionTitle from "../../Shared/SectionTitle";

function Payment() {
  const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY_API_KEY);
  return (
    <div className="max-w-7xl mx-auto my-9 ">
      <div className=" mx-4 pb-3">
        <SectionTitle className="" title={"Payment for Enrollment"} />
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 mx-4 gap-4 items-center">
        <div className="">
          <div className="">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
          <div className=" mt-5">
            <h3 className="text-xl font-semibold pb-2">Payment Instraction</h3>
            <p>
              The first text acts as a formal reminder for an invoice payment.
              It details how to pay (online, mail, transfer) and emphasizes
              including the invoice number. The second text is a professional
              email from a freelancer to a client. It confirms a project s
              completion, mentions the fee, and offers two secure payment
              options with clear instructions.
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-end">
          <Lottie className="w-[550px]" animationData={Cart} />
        </div>
      </div>
    </div>
  );
}

export default Payment;
