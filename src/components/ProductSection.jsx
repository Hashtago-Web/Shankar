import React from "react";

const products = [
  {
    title: "crash guard",
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

function ProductsSection() {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-16 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12">
        Product <span className="font-bold">& services</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-contain p-4"
            />

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-900 font-semibold hover:underline"
              >
                Know More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
