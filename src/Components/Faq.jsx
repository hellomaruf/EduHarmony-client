function Faq() {
  return (
    <div className="mx-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2   justify-center gap-5 my-10 pt-4">
      <div className=" space-y-5">
        <h2 className="text-4xl font-semibold">
          Any Questions ? <br /> We got you.
        </h2>
        <p>
          Welcome to our FAQ section! Here youll find answers to the most common
          questions about our services, products, and policies. If you cant find
          what youre looking for, feel free to contact our support team.
        </p>
        <button className="btn rounded-full text-white bg-[#7330ff] hover:bg-[#8c56ff]">
          More FAQ
        </button>
      </div>
      <div className="space-y-4">
        <details
          className="group border-s-4 border-[#7330ff] rounded-xl bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              How do I create an account?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            To create an account, click on the Sign Up button at the top right
            corner of the homepage. Fill in the required details and follow the
            prompts to complete your registration.
          </p>
        </details>

        <details className="group border-s-4 rounded-xl border-[#7330ff] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              What payment methods do you accept?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            We accept various payment methods, including credit/debit cards,
            Stripe, and other secure payment gateways.
          </p>
        </details>
        <details className="group border-s-4 rounded-xl border-[#7330ff] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              I forgot my password. How do I reset it?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Click on the Forgot Password link on the login page. Enter your
            registered email address, and well send you instructions on how to
            reset your password.
          </p>
        </details>
      </div>
    </div>
  </div>
  );
}

export default Faq;
