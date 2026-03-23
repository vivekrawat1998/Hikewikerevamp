import React from "react";

const EditionSection = () => {
    return (
        <section className="bg-white font-second ">
            <div className="max-w-7xl md:px-0 px-3 mx-auto">

                {/* Top Heading */}
                <div className="text-center mb-20">
                    <p className="text-xs tracking-[0.25em] text-black mb-4">
                        NOW OPEN
                    </p>

                    <h2 className="text-3xl md:text-[52px] font-main font-extrabold text-black mb-4 leading-tight">
                        Edition 01.
                        <span className="block italic font-normal">
                            The Hill Edition.
                        </span>
                    </h2>

                    <p className="text-black text-[18px] md:text-base max-w-xl mx-auto leading-relaxed">
                        Every HikeWike edition has a character. Edition 01 is about altitude —
                        the kind outside your window, and the kind inside your head.
                    </p>
                </div>

                {/* Main Card */}
                <div
                    className="relative grid md:grid-cols-2 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
                    style={{
                        backgroundImage: "url('/concept/kumud-mussoorie-villa-3-bhk-9348a7.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* LEFT */}
                    <div className="relative z-10 p-8 md:p-12 text-white">
                        <span className="text-xs border px-3 py-1 text-black tracking-wider bg-gray-50">
                            EDITION 01 · 2026
                        </span>

                        <h3 className="font-main text-white text-2xl md:text-[34px] mt-6 leading-snug">
                            Mussoorie,
                            <span className="block italic font-normal">
                                Uttarakhand.
                            </span>
                        </h3>

                        <p className="text-white text-sm md:text-base mt-5 leading-relaxed">
                            A private estate in the Landour–Mussoorie belt. Himalayan ridgelines
                            at breakfast. Pine forests and cold air. A place that strips back the
                            noise so you can hear yourself think.
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-3 gap-6 mt-8 text-sm">
                            <div>
                                <p className="text-white text-xs mb-1">LOCATION</p>
                                <p className="text-gray-100 font-medium">Landour, Mussoorie</p>
                            </div>
                            <div>
                                <p className="text-white text-xs mb-1">ELEVATION</p>
                                <p className="text-gray-100 font-medium">2,000m+</p>
                            </div>
                            <div>
                                <p className="text-white text-xs mb-1">DURATION</p>
                                <p className="text-gray-100 font-medium">5 nights / 6 days</p>
                            </div>
                        </div>

                        <div className="mt-6 text-sm">
                            <p className="text-white text-xs mb-1">TRAVEL FROM</p>
                            <p className="text-gray-100 font-medium">Dehradun / Delhi</p>
                        </div>

                        {/* CTA */}
                        <button className="mt-10 bg-[#F36F25] font-bold cursor-pointer text-white px-7 py-3 text-xs tracking-[0.15em] hover:scale-105 hover:bg-[#d95f1f] transition duration-300 rounded">
                            REQUEST INVITE FOR EDITION 01
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="relative z-10 p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/20 text-white bg-sec">

                        <h3 className="font-main text-white text-3xl md:text-[42px] mb-2">
                            ₹37,500
                        </h3>

                        <p className="text-white text-xs mb-6">
                            per person · all-inclusive · lock seat at 20% deposit
                        </p>

                        <ul className="space-y-4 text-sm md:text-base text-white">
                            <li className="flex items-start gap-2">✓ <span>5 nights private villa, twin share</span></li>
                            <li className="flex items-start gap-2">✓ <span>All breakfasts + 2 communal dinners</span></li>
                            <li className="flex items-start gap-2">✓ <span>Guided sunrise trek</span></li>
                            <li className="flex items-start gap-2">✓ <span>4 structured sessions</span></li>
                            <li className="flex items-start gap-2">✓ <span>90-day clarity plan</span></li>
                            <li className="flex items-start gap-2">✓ <span>Community access – lifetime</span></li>
                            <li className="flex items-start gap-2">✓ <span>Pickup from Dehradun</span></li>

                            <li className="flex items-start gap-2 text-gray-400">✗ <span>Flights not included</span></li>
                            <li className="flex items-start gap-2 text-gray-400">✗ <span>Lunches excluded</span></li>
                        </ul>

                        {/* Highlight Box */}
                        <div className="mt-8 border border-gray-200 p-4 text-xs font-bold text-gray-600 bg-white rounded">
                            Lock your seat with ₹7,500 deposit. Balance due 30 days before arrival.
                        </div>

                        {/* Trust Signal */}
                        <p className="text-[11px] text-gray-400 mt-4">
                            Limited seats • Small curated group • High intent community
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EditionSection;