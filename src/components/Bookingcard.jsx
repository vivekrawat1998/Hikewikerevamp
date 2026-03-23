import { MdKeyboardArrowDown } from "react-icons/md";
import React, { useState } from "react";

const BookNowCard = ({
  tripName = "Uttarakhand Trip",
  estimatedcost = 28999,
  originalPrice = 10000,
  discount = 2000,
  tripDates = ["26 Jul"],
  months = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
}) => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedDate, setSelectedDate] = useState(tripDates[0]);
  const [travellers, setTravellers] = useState(1);

  /* ✅ WhatsApp Setup */
  const whatsappNumber = "919557275467"; // 👉 Replace with your WhatsApp number (country code without +)

  const totalPrice = estimatedcost * travellers;

  const message = `Hello 👋,
I want to enquire about this trip.

🏔 Trip: ${tripName}
💰 Price Per Person: ₹${estimatedcost.toLocaleString()}
👥 Travellers: ${travellers}
💵 Total Price: ₹${totalPrice.toLocaleString()}
📅 Month: ${selectedMonth}
🗓 Date: ${selectedDate}

Please share more details.`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="p-6 rounded-2xl border border-[#09090B]/30 shadow-xl font-parkinsans bg-white w-full max-w-xl mx-auto">
      <div className="text-gray-900 font-medium text-sm mb-2">
        Trip Starts From
      </div>

      {/* PRICE */}
      <div className="flex items-end space-x-3 mb-3">
        <span className="text-[#F36F25] text-3xl font-medium">
          {estimatedcost.toLocaleString()}
          <span className="text-xs text-right text-gray-700 ml-2">
            Per Person
          </span>
        </span>

        <span className="line-through text-gray-400 text-md">
          {originalPrice.toLocaleString()}
        </span>

        <span className="text-[#F36F25] text-sm font-semibold px-2 py-0.5 rounded-full bg-[#FDF3E6]">
          {discount.toLocaleString()} Off
        </span>
      </div>

      {/* TRIP MONTHS */}
      <div className="mb-6">
        <label
          className="font-semibold text-[#09090B] flex items-center justify-between mb-2 relative"
          htmlFor="month-select"
        >
          <span className="text-base">📅 Trip Months</span>

          <div className="relative w-48">
            <select
              id="month-select"
              className="border border-gray-300 rounded-full py-2 px-4 pr-10 text-gray-700 text-base bg-white w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#F36F25] transition duration-200 cursor-pointer"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map((month, idx) => (
                <option key={idx} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <MdKeyboardArrowDown
              size={20}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
        </label>

        {/* <div className="mt-1 text-gray-700 text-sm">
          {selectedDate}{" "}
          <span className="text-xs text-gray-500">
            Starting {estimatedcost.toLocaleString()}/Person
          </span>
        </div> */}
      </div>

      {/* TRAVELLERS */}
      <div className="mb-8">
        <div className="font-semibold text-gray-800 w-full flex justify-between items-center mb-2">
          <span>👥 No. of Travellers</span>

          <div className="flex items-center space-x-3">
            <button
              className="px-3 py-1 text-lg cursor-pointer text-gray-500"
              disabled={travellers <= 1}
              onClick={() => setTravellers(travellers - 1)}
            >
              −
            </button>

            <span className="text-lg">{travellers}</span>

            <button
              className="px-3 py-1 text-lg cursor-pointer text-gray-500"
              onClick={() => setTravellers(travellers + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* SEND ENQUIRY (WHATSAPP LINK) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-[#F36F25] text-white py-3 rounded-full cursor-pointer font-semibold text-lg transition hover:bg-[#d96419] focus:outline-none focus:ring-4 focus:ring-[#FCD9B6] mb-4"
      >
        Send Enquiry
      </a>

      {/* WHATSAPP BUTTON */}
      <div className="flex items-center gap-3 mt-2">
        <span className="text-[#09090B] font-bold text-sm">Any Doubt?</span>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-green-100 gap-3 rounded-full cursor-pointer font-medium hover:bg-green-200 transition"
        >
          <img
            className="w-5 h-5"
            src="/whatsapp-color-svgrepo-com.svg"
            alt="WhatsApp"
          />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default BookNowCard;
