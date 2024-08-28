// import ContactBanglow from "../../assets/Contact/ContactBanglow.jpg";

export const ContactBackground = () => {
  return (
    <div
      className="relative w-90 h-90 bg-cover bg-center bg-[#484848]"
      // style={{ backgroundImage: `url(${ContactBanglow})` }}
    >
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto w-full sm:px-24 lg:px-8 lg:py-20">
        <div className="relative w-full max-w-2xl mx-auto text-center">
          <h2 className="mt-20 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
            Contact
          </h2>
        </div>
      </div>
      <div className="relative flex justify-center mt-8">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
            <div className="relative w-full max-w-2xl mx-auto text-center">
              <h2 className="mt-6 font-sans text-3xl font-medium tracking-tight text-black sm:text-3xl sm:leading-none">
                EMAIL
              </h2>
              <h2 className="mt-6 font-sans text-3xl font-small tracking-tight text-black sm:text-2xl sm:leading-none">
                homeescape@gmail.com
              </h2>
            </div>
            <div className="relative w-full max-w-2xl mx-auto text-center">
              <h2 className="mt-6 font-sans text-3xl font-medium tracking-tight text-black sm:text-3xl sm:leading-none">
                PHONE NO
              </h2>
              <h2 className="mt-6 font-sans text-3xl font-small tracking-tight text-black sm:text-2xl sm:leading-none">
                +94 222 281 5
              </h2>
            </div>
            <div className="relative w-full max-w-2xl mx-auto text-center">
              <h2 className="mt-6 font-sans text-3xl font-medium tracking-tight text-black sm:text-3xl sm:leading-none">
                ADDRESS
              </h2>
              <h2 className="mt-6 font-sans text-3xl font-small tracking-tight text-black sm:text-2xl sm:leading-none">
                Address 257/A <br></br>Colombo 7, Piliyandala
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
