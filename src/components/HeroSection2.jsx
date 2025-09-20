import React from 'react'

function HeroSection2() {
  return (
    <div className="mt-4 sm:mt-8 md:mt-10 xl:mt-20 text-center">

      <div className="flex flex-col items-center">
        <h1 className="text-xl px-4 sm:text-2xl lg:text-5xl font-semibold leading-tight">
          ABOUT {" "}
          <span className="font-bold text-blue-950 block sm:inline">
            THE SHANKAR STEEL CORPORATION
          </span>
        </h1>
        <p className="font-gothic px-4 md:px-28 mt-2 sm:mt-2 lg:mt-8 text-xs sm:text-sm lg:text-xl text-black">
          Our company embarked on its entrepreneurial journey in the year 1972,
          establishing a foothold in the construction materials industry. With a keen
          focus on fulfilling the burgeoning demands of the market, we specialized in
          the manufacturing and distribution of roofing sheets, structural steel, and
          pipes. This strategic decision positioned us as a key player in providing
          essential components for the construction sector, laying a solid foundation
          for our growth and expansion in the subsequent years.
        </p>
      </div>

      <div className="-mt-4 sm:-mt-8 lg:-mt-14 flex justify-center">
        <img
          src="Hero_image3.png"
          alt="Steel Corporation"
          className="w-full"
        />
      </div>
    </div>
  )
}

export default HeroSection2
