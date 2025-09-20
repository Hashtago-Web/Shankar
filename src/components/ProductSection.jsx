import React from "react";
import { NavLink } from "react-router";

const products = [
  {
    title: "Crash Guard",
    desc: "Crash bungs are specially designed stoppers that bolt onto the outside of your bike. The idea for them is to protect the bike’s body work and engine.",
    img: "crash_guard.png",
  },
  {
    title: "Asbestos Roofing Sheet",
    desc: "Asbestos cement sheet was once synonymous with 'fibrous cement sheet.' It has also been generically called 'AC sheet' and 'fibro.'",
    img: "roofing_sheet.png",
  },
  {
    title: "Structural Steels",
    desc: "Structural steel is a category of steel used for making construction materials in a variety of shapes.",
    img: "structural_steels.png",
  },
  {
    title: "Hardware Products",
    desc: "Household hardware is equipment that can be touched or held by hand such as hooks, screws, anchors, bindings, latches, and machine parts.",
    img: "hardware.png",
  },
  {
    title: "Mild Steel Plates",
    desc: "Mild Steel plate is made from low-carbon mild steel that is used to provide additional strength and support to buildings and other structures.",
    img: "ms_plate.png",
  },
  {
    title: "MS Pipes",
    desc: "MS Pipe stands for Mild Steel Pipes, which are used for plumbing, ventilation, and air conditioning.",
    img: "ms_pipes.png",
  },
];

{/* Last word capturing function */ }

function DynamicParagraph({ text }) {
  const words = text.trim().split(" "); // split text into words
  const lastIndex = words.length - 1;

  return (
    <p className="text-lg">
      {words.map((word, index) => (
        <span
          key={index}
          className={
            index === lastIndex
              ? "bg-blue-950 pl-1 pr-10 py-4 text-lg text-white" // style for last word
              : "py-4 pr-1" // style for all other words
          }
        >
          {word}
        </span>
      ))}
    </p>
  );
}


function ProductsSection() {
  return (
    <>
      <section className="px-4 sm:px-7 md:px-12 lg:px-20 xl:px-26 py-2 sm:py-10 md:py-14 lg:py-20 bg-white -z-10">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-center mb-1 sm:mb-3 md:mb-6">
          Product <span className="font-bold">& services</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              {/* Content */}
              <div className="flex flex-col items-center h-full">
                <h3 className="mb-3 py-4 text-right w-full">
                  <DynamicParagraph text={product.title} />
                </h3>
                <p className="text-center px-4 text-xs sm:text-sm md:text-lg mb-4">{product.desc}</p>
                <NavLink
                  to="#"
                  className="flex items-center gap-2 text-blue-950 font-semibold hover:cursor-pointer hover:underline"
                >
                  Know More<img src="right_arrow.png" alt="" className="h-6 " />
                </NavLink>

                {/* Product Image */}
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-48 object-contain p-4"
                />
              </div>

            </div>
          ))}
        </div>
      </section>
      <div style={{ backgroundImage: "url('video_image2.png')" }}
        className="relative h-[240px] sm:h-[400px] md:h-[600px] lg:h-[680px] bg-cover bg-center  my-10 sm:my-5 md:my-10">

      </div>
    </>
  );
}

export default ProductsSection;
