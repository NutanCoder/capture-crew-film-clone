function ContactPage() {
  return (
    <div>
      <section className="text-center text-sm leading-8 my-6 sm:mx-4">
        <p>
          Please fill in the form below and provide as much details as possible
          to help us create an accurate quote.
        </p>
        <p>
          We will try to get back within 24hrs , give us a call on the number
          below if you don't hear from us or if its a last minute enquiry.
        </p>
        <p>
          Please go through our FAQ section to find answers to some common
          questions.
        </p>
        <div className="my-6 leading-5">
          <p>info@capturecrewfilms.com</p>
          <p>+91 6372090901</p>
          <p>Bhubaneswar</p>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="cart bg-white rounded-xl p-8 shadow-xl mb-6 md:m-4">
            <form action="">
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name:"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email:"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name">Phone</label>
                <input
                  type="number"
                  placeholder="Enter Your Mobile No:"
                  name="phone"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message">
                  Tell us more about your wedding - event flow, venues.
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
