function Leader() {
    return (
        <div className="flex min-h-screen ">
            <div className="px-10 md:px-24 lg:px-32 md:pt-12 py-6 w-full">
                <h1 className="font-poppins font-normal md:text-4xl text-xl sm:text-2xl w-full text-center">
                    HEAR FROM OUR <span className="text-blue-900 font-bold">LEADER</span>
                </h1>
                <div className="flex flex-col sm:flex-row mt-3 sm:mt-7 md:mt-10 sm:space-x-10 lg:space-x-32">
                    <div className="bg-slate-100 w-full md:w-1/2 lg:w-2/5 flex items-center justify-center">
                        <img src="leader.png" className="" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5 mt-3 sm:mt-0 ">
                        <h1
                            className="relative bg-[url('public/Images/Vector.svg')] bg-no-repeat bg-center bg-contain opacity-80 
            lg:text-2xl md:text-xl text-md text-center sm:text-left lg:leading-loose md:leading-relaxed
            sm:bg-[length:200px] md:bg-[length:250px] lg:bg-[length:300px]"
                        >
                            "l believe that our journey to an Prabesh Prasad is truly
                            underway. India's rise as an economic superpower will be the
                            headline of the next decade. Our natural resources and human
                            resources are its foundation. At Vaishno Devi Steel, we will make
                            in India for the world while achieving sustainability for society
                            and Mother Earth. An exciting future is unfolding. Let us all play
                            our part in it."
                        </h1>
                        <div className="flex flex-col items-center sm:items-end mt-2 md:mt-0">
                            <h2 className="flex flex-col items-center  ">
                                <p>Mr.Prabash Prashad</p>
                                <p className="md:text-lg text-xs text-blue-800">
                                    Chairman of Vaishno Devi Steel
                                </p>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leader;