import { useState, useEffect } from "react";

const feedbacks = [
    {
        id: 1,
        name: "Jeet Ghosh",
        role: "Our Trusted customer",
        image: "leader.png",
        message: `With strong foundations in its natural and human resources, India is on a path to becoming a global economic superpower, and we are committed to contributing to this sustainable future by making products in India for the world.`,
    },
    {
        id: 2,
        name: "Amit Verma",
        role: "Happy Client",
        image: "leader.png",
        message:
            "With strong foundations in its natural and human resources, India is on a path to becoming a global economic superpower, and we are committed to contributing to this sustainable future by making products in India for the world.",
    },
    {
        id: 3,
        name: "Sonia Kapoor",
        role: "Regular Customer",
        image: "leader.png",
        message:
            "With strong foundations in its natural and human resources, India is on a path to becoming a global economic superpower, and we are committed to contributing to this sustainable future by making products in India for the world.",
    },
];

function Feedback() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    };

    // Auto sliding every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center pt-4 pb-10 lg:pt-16 lg:pb-26">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-6">
                CUSTOMER <span className="text-blue-950 font-bold">FEEDBACK</span>
            </h2>

            <div className="flex items-center justify-between w-full">
                {/* Previous Button */}
                <div className="hidden md:flex border-2 border-black h-70 w-100 p-10 justify-end items-center">
                    <div
                        onClick={prevSlide}
                        className="h-30 w-30 flex justify-center cursor-pointer items-center text-xl text-blue-950 border-2 border-blue-950 rounded-full hover:bg-blue-950 hover:text-white transition duration-300"
                    >
                        Previous
                    </div>
                </div>

                {/* Slider */}
                <div className="mx-6 relative max-w-4xl w-full overflow-hidden">
                    {/* sliding strip */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {feedbacks.map((f) => (
                            <div key={f.id} className="flex-none w-full px-4">
                                <div className="mx-0 p-6  border-2 border-blue-950 flex flex-col items-center text-center bg-white">
                                    <div className="bg-slate-100 rounded-full overflow-hidden h-40 w-40 flex items-center justify-center">
                                        <img
                                            src={f.image}
                                            alt={f.name}
                                            className="w-40 h-40 mt-6 mb-4"
                                        />
                                    </div>
                                    <p className="text-sm md:text-lg mb-4 sm:px-3 lg:px-30">
                                        "{f.message}"
                                    </p>
                                    <h4 className="font-bold text-gray-800">{f.name}</h4>
                                    <p className="text-blue-900 text-lg">{f.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <div className="hidden md:flex border-2 border-black h-70 w-100 p-10 justify-start items-center">
                    <div
                        onClick={nextSlide}
                        className="h-30 w-30 flex justify-center cursor-pointer items-center text-xl text-blue-950 border-2 border-blue-950 rounded-full hover:bg-blue-950 hover:text-white transition duration-400"
                    >
                        Next
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
