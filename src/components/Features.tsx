import { FaDollarSign, FaShieldAlt, FaBan, FaSlidersH } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaDollarSign size={30} className="text-white" />,
      title: "Cheapest TXs",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price.",
    },
    {
      icon: <FaShieldAlt size={30} className="text-white" />,
      title: "CerTIK",
      description:
        "We are audited by CerTIK. CerTIK is the leading security-focused ranking platform.",
    },
    {
      icon: <FaBan size={30} className="text-white" />,
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets.",
    },
    {
      icon: <FaSlidersH size={30} className="text-white" />,
      title: "CrossDex Support",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price.",
    },
  ];

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}

        <h2 className="md:text-4xl text-3xl font-bold mb-10 font-secondaryUltraBold tracking-wide">
          Our <span className="text-yellow-500">Features</span>
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-3xl backdrop-blur-sm p-7 border border-gray-800 hover:scale-[102%] transition-all duration-200"
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-16 h-16 bg-gray-800 rounded-full mb-7">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-primarySemiBold tracking-wide mb-5 text-start text-gray-300">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-400 font-primaryMedium tracking-wide text-start text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
