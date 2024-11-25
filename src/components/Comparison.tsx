const Comparison = () => {
  return (
    <div>
      <div className="min-h-screen"></div>
      <div className="max-w-7xl px-5 py-32 mx-auto">
        <h2 className="md:text-4xl text-3xl font-bold mb-10 font-secondaryUltraBold tracking-wide">
          Why <span className="text-primary">MoonEX</span> ?
        </h2>
        <div className="overflow-x-auto bg-white/5 rounded-3xl backdrop-blur-sm md:p-10 p-5 py-10">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 pb-10 border-b border-r font-secondaryRegular tracking-widest text-primary text-2xl border-gray-800">
                  <div className="logo flex justify-center items-center">
                    Comparison
                  </div>
                </th>
                <th className="px-4 pb-10 border-b border-r border-gray-800">
                  <div className="logo flex justify-center items-center">
                    <img src="/assets/logo-2.png" alt="Logo" className="w-42" />
                  </div>
                </th>
                <th className="px-4 pb-10 border-b border-gray-800">
                  <div className="logo flex justify-center items-center">
                    <img src="/assets/logo-3.png" alt="Logo" className="w-42" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="text-gray-400 text-xl">
                  <td className="px-4 border-b border-r border-gray-800 py-5">
                    {index + 1}. Point no two this
                  </td>
                  <td className="px-4 border-b border-r border-gray-800 py-5 text-green-500">
                    ✔️
                  </td>
                  <td className="px-4 border-b  border-gray-800 py-5 text-red-500">
                    ❌
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
