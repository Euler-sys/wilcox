import { Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, partnerships, and support.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reach Us
            </h2>
            <p className="text-lg text-gray-600">
              We are available through phone or at our office location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            
            {/* PHONE */}
            <div className="group rounded-xl border bg-white shadow-sm hover:shadow-lg transition p-8 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-600/10 mx-auto mb-5">
                <Phone className="w-7 h-7 text-amber-600" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Phone
              </h3>

              <p className="text-gray-900 font-medium text-lg">
                +1 (570) 656-9728
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Available during business hours
              </p>

              <div className="mt-6 h-1 w-12 bg-amber-600 mx-auto rounded-full opacity-30 group-hover:opacity-100 transition" />
            </div>

            {/* ADDRESS */}
            <div className="group rounded-xl border bg-white shadow-sm hover:shadow-lg transition p-8 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-600/10 mx-auto mb-5">
                <MapPin className="w-7 h-7 text-amber-600" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Address
              </h3>

              <p className="text-gray-900 font-medium text-lg">
                PO BOX 580

              </p>

              <p className="text-sm text-gray-500 mt-2">
              RULE, TX 79547
              </p>

              <div className="mt-6 h-1 w-12 bg-amber-600 mx-auto rounded-full opacity-30 group-hover:opacity-100 transition" />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;