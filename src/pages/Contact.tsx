import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="h-64 relative">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
          alt="Las"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary bg-opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-32 relative">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8">Kontakt</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <p>+48 880 465 592</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p>odpoczniesztu@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Adres</h3>
                  <p>Brzozowa 270</p>
                  <p>34-000 Gromnik</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5300.849493788112!2d20.902383000000004!3d49.841576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d93a8b7b3c7af%3A0xc1392532ca033bfd!2sOdpocznieszTu!5e1!3m2!1spl!2spl!4v1740386180597!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
