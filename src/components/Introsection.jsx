import React from "react";

const Introsection = () => {
    return (
        <section className="bg-white font-second py-20 px-6 md:px-16">
            <div className="max-w-4xl mx-auto text-center">

                {/* Small Heading */}
                <p className="text-xs tracking-[0.2em] text-black mb-4">
                    INTRODUCTION
                </p>

                {/* Main Title */}
                <h1 className="text-3xl md:text-[48px] font-main font-extrabold text-black mb-6">
                    Step away from the noise.
                </h1>

                {/* Subtitle */}
                <p className="text-gray-600 text-[21px] md:text-base mb-6">
                    Most trips give you photos. But very few give you new perspectives.
                </p>

                {/* Description */}
                <p className="text-gray-600 text-[21px] md:text-base  mb-6">
                    HikeWike was created to bring together curious and ambitious people in a beautiful
                    mountain space where conversations, ideas and friendships happen naturally.
                </p>

                {/* Highlight Line */}
                <p className="font-semibold text-black text-[21px] md:text-base">
                    This is not tourism. This is shared thinking in the mountains.
                </p>
            </div>
        </section>
    );
};

export default Introsection;