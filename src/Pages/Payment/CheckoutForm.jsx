import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Services/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

function CheckoutForm() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: data?.price })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, []);
  const mutation = useMutation({
    mutationFn: (NewClass) => {
      return axiosSecure.post("/payment", NewClass);
    },
    onSuccess: (data) => {
      // Boom baby!
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Payment Successfull!!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // Comfirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    console.log(paymentIntent);
    if (confirmError) {
      console.log("Confirm Error");
    } else {
      console.log("payment intent", paymentIntent);
    }

    // Save payment info in database
    const paymentInfo = {
      email: user?.email,
      transactionId: paymentIntent?.id,
      price: data?.price,
      classId: data?._id,
      date: new Date(),
      status: "pending",
    };
    mutation.mutate(paymentInfo);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn bg-[#7330FF] text-white mt-4 btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay ${data?.price}
        </button>
        <p className="text-red-500 text-sm">{error}</p>
      </form>
    </div>
  );
}

export default CheckoutForm;
