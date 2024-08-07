import Image from "next/image";

const Hero = () => {
  const customersCount = [
    {
      count: 200,
      word: "International Brands",
    },
    {
      count: 2000,
      word: "Highquality Products",
    },
    {
      count: 3000,
      word: "Happy Customers",
    },
  ];
  return (
    <div className="bg-[#f3f0f1] h-screen">
      <div className="max-w-7xl mx-auto py-[4rem] ">
        <div className="grid grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-6xl font-extrabold w-[90%] ">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p className="font-light text-gray-600 w-[86%]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-black p-4 rounded-full text-white px-8 font-light md:w-[210px] h-">
              Shop now
            </button>
            <div className="flex justify-between">
              <>
                {customersCount.map((item) => {
                  return (
                    <div key={item.word}>
                      <h2 className="text-2xl">{item.count}+</h2>
                      <p className="text-sm text-gray-500">{item.word}</p>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/hero-img.png"}
              alt="hero-img"
              width={500}
              height={500}
              className="mix-blend-"
            />
          </div>
        </div>
      </div>
      <div className="bg-black -mt-16"></div>
    </div>
  );
};

export default Hero;
