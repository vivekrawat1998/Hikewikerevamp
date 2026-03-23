import { Phone } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingContactIcons = () => {
    return (
        <div className="fixed bottom-8 right-5 flex flex-col space-y-3 z-50">

            {/* Phone Call Icon */}
            <a
                href="tel:+919557275467"
                className=" text-gray-900 p-3 rounded-full shadow-xl bg-white flex items-center justify-center "
                aria-label="Call us"
            >

                <Phone />
            </a>
            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/9557275467"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-green-500  text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-colors"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-2xl" />
            </a>
        </div>
    );
};

export default FloatingContactIcons;
