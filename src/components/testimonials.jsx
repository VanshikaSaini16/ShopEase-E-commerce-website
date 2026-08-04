const Testimonials = () => {
  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Customers Say ⭐
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow-lg rounded-xl p-5">
          <p className="text-gray-600">
            "Amazing products and fast delivery. Loved my shopping experience!"
          </p>
          <h3 className="mt-4 font-bold">
            Aisha Sharma
          </h3>
          <p className="text-sm text-gray-500">
            Delhi
          </p>
        </div>


        <div className="bg-white shadow-lg rounded-xl p-5">
          <p className="text-gray-600">
            "Great quality products at affordable prices. Highly recommended!"
          </p>
          <h3 className="mt-4 font-bold">
            Rahul Verma
          </h3>
          <p className="text-sm text-gray-500">
            Mumbai
          </p>
        </div>


        <div className="bg-white shadow-lg rounded-xl p-5">
          <p className="text-gray-600">
            "Smooth website experience and excellent customer service."
          </p>
          <h3 className="mt-4 font-bold">
            Priya Singh
          </h3>
          <p className="text-sm text-gray-500">
            Bangalore
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;