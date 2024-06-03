import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Lottie from "lottie-react";
import Cart from "../../assets/Images/payCart.json";

function Payment() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: Cart,
  // };

  const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY_API_KEY);
  return (
    <div className="max-w-7xl mx-auto my-9 ">
      <h2 className="text-3xl font-semibold text-center">
        Payment for Enrollment
      </h2>
      <div className=" grid grid-cols-2 gap-4 items-center">
        <div className="">
          <div className="">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
          <div className=" mt-5">
          <h3 className="text-xl font-semibold pb-2">Payment Instraction</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            ipsum ad nisi saepe consequatur ex soluta minus est. Enim voluptates
            eos reprehenderit ab nemo iure harum, labore dolore iste esse!
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
