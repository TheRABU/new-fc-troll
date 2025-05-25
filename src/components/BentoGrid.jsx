// const items = [
//   "https://source.unsplash.com/random/400x400?architecture",
//   "https://source.unsplash.com/random/400x400?3d",
//   "https://source.unsplash.com/random/400x400?sneakers",
//   "https://source.unsplash.com/random/400x400?bag",
//   "https://source.unsplash.com/random/400x400?cosmetics",
//   "https://source.unsplash.com/random/400x400?watch",
//   "https://source.unsplash.com/random/400x400?controller",
//   "https://source.unsplash.com/random/400x400?skincare",
//   "https://source.unsplash.com/random/400x400?package",
// ];

const BentoGrid = () => {
  return (
    // <div className="p-8">
    //   <div className="grid grid-cols-3 gap-4 auto-rows-[150px]">
    //     {items.map((src, index) => (
    //       <div
    //         key={index}
    //         className={`rounded-xl overflow-hidden ${
    //           index === 4 ? "row-span-2 col-span-2" : "row-span-1 col-span-1"
    //         }`}
    //       >
    //         <img
    //           src={src}
    //           alt={`Bento Item ${index + 1}`}
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <section class="bg-white px-2 lg:px-20 xl:px-36">
        <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://as1.ftcdn.net/jpg/05/28/82/70/1000_F_528827065_2s2V1vqdPtPpYjaOdGn1xyTeRsBP6xAU.jpg"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  News
                </h3>
              </a>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="https://as1.ftcdn.net/v2/jpg/07/74/54/22/1000_F_774542215_bhGcNZ395TYZVgjtEKrLh5VeWmHY8wRa.jpg"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Entertainment
                </h3>
              </a>
              <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://t3.ftcdn.net/jpg/03/98/36/92/240_F_398369238_t8fyNkrOhqp0PZ6UMEgX1pLqfUAWvUAe.jpg"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Stats
                  </h3>
                </a>
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/12/99/17/81/1000_F_1299178163_qRSryIyLEbXRVEt0aBJR3JZdq4QoIHR8.jpg"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Challenging
                  </h3>
                </a>
              </div>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://as2.ftcdn.net/v2/jpg/06/75/29/11/1000_F_675291139_ykIxdL7uhL6sa7oSeg06P4Ncizj1g5iV.jpg"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Emotion
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BentoGrid;
