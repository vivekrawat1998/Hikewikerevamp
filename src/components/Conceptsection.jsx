import React from "react";

const concepts = [
    {
        title: "Curated People",
        desc: "A curated circle of people who value meaningful conversations, fresh perspectives, and real connections.",
        image: "/concept/curatedpeople.webp"
    },
    {
        title: "Awesome Places",
        desc: "A peaceful environment designed for connection.",
        image: "/concept/ROOM WITH A VIEW LEAD.webp"
    },
    {
        title: "Meaningful Conversations",
        desc: "Conversations that go beyond small talk, offering insights, fresh perspectives, and ideas worth keeping.",
        image: "/concept/meanigful.webp"
    },
    {
        title: "Shared Experiences",
        desc: "Different backgrounds, similar intent, people who are open, curious, and value meaningful connections.",
        image: "/concept/sharedexperience.webp"
    },
];

const Conceptsection = () => {
    return (
        <section className="bg-white font-second overflow-hiddden py-20">
            <div className="max-w-7xl md:px-0 px-3  mx-auto text-center">

                {/* Small Heading */}
                <p className="text-xs tracking-[0.2em] text-black mb-4">
                    THE CONCEPT
                </p>

                {/* Main Title */}
                <h2 className="text-3xl md:text-[48px] font-main font-extrabold text-[#000000] mb-4">
                    Not a trip. A gathering.
                </h2>

                {/* Subtitle */}
                <p className="text-black text-[21px] md:text-base max-w-2xl mx-auto mb-14">
                    HikeWike was created to bring together curious and ambitious people in a
                    beautiful mountain space where conversations, ideas and friendships
                    happen naturally.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {concepts.map((item, index) => (
                        <div key={index} className="text-center">

                            {/* Image Placeholder */}
                            <div className="bg-gray-300 w-full h-[300px] mb-4">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover " />
                            </div>
                            {/* Title */}
                            <h3 className="font-regular font-main text-black text-sm md:text-[18px] mb-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-black text-center text-xs md:text-[16px] ">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Conceptsection;