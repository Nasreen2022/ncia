import nciaLogo from "../assets/images/nciaLogo.jpg";

export default function Header() {
  return (
    <>
      {/* ================= TOP HEADER ================= */}
      <div className="bg-[#f6eaea] px-10 py-2 flex justify-between items-center border-b">

        {/* LOGO */}
        <img
          src={nciaLogo}
          alt="NCIA Logo"
          className="h-24 w-auto"
        />

        {/* CONTACT INFO */}
        <div className="flex gap-10 items-center text-sm">

          {/* PHONE */}
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.2 2.42.57 3.54a1 1 0 01-.24 1.05l-2.2 2.2z" />
              </svg>
            </div>

            <div className="flex flex-col font-semibold">
              <span>+91-7668897003‬
              </span>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold">Send your query</span>
              <span className="font-bold text-blue-700">ncfbfoundation@gmail.com </span>
            </div>
          </div>

        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="bg-[#1c5aa6] px-10 flex justify-between items-center">

        {/* MENU */}
        <ul className="flex text-white font-semibold text-sm">

          <li className="px-4 py-4  hover:underline cursor-pointer">
            HOME
          </li>

          {/* ABOUT US */}
          <li className="relative group px-4 py-4 cursor-pointer">
            <span className="hover:underline flex items-center gap-1">
              ABOUT US
              {/* ▾ */}
            </span>
            {/* <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black w-60 shadow-lg z-50">
              <li className="px-4 py-2 hover:bg-gray-100">About the Organisation</li>
              <li className="px-4 py-2 hover:bg-gray-100">Vision & Mission</li>
              <li className="px-4 py-2 hover:bg-gray-100">Former Officers</li>
              <li className="px-4 py-2 hover:bg-gray-100">Administrative Authority</li>
            </ul> */}
          </li>

          {/* ACT & RULES */}
          <li className="relative group px-4 py-4 cursor-pointer">
            <span className=" hover:underline flex items-center gap-1">
              ACT & RULES
              {/* ▾ */}
            </span>
            {/* <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black w-60 shadow-lg z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Human Rights</li>
              <li className="px-4 py-2 hover:bg-gray-100">Civil Rights</li>
              <li className="px-4 py-2 hover:bg-gray-100">Consumer Rights</li>
              <li className="px-4 py-2 hover:bg-gray-100">Child Rights</li>
              <li className="px-4 py-2 hover:bg-gray-100">Disability Rights</li>
              <li className="px-4 py-2 hover:bg-gray-100">Right to Information</li>
              <li className="px-4 py-2 hover:bg-gray-100">Rights to Freedom</li>
              <li className="px-4 py-2 hover:bg-gray-100">Traffic Rights</li>
            </ul> */}
          </li>

          <li className="px-4 py-4 hover:underline cursor-pointer">
            DEPARTMENT
          </li>

          {/* MEDIA */}
          <li className="relative group px-4 py-4 cursor-pointer">
            <span className="hover:underline flex items-center gap-1">
              MEDIA
              {/* ▾ */}
            </span>
            {/* <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black w-60 shadow-lg z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Appreciation Letter</li>
              <li className="px-4 py-2 hover:bg-gray-100">Police Protection Letter</li>
              <li className="px-4 py-2 hover:bg-gray-100">Duty Permission Letter</li>
              <li className="px-4 py-2 hover:bg-gray-100">Government Letter</li>
              <li className="px-4 py-2 hover:bg-gray-100">Print Media</li>
              <li className="px-4 py-2 hover:bg-gray-100">Registration Paper</li>
              <li className="px-4 py-2 hover:bg-gray-100">Interviews</li>
              <li className="px-4 py-2 hover:bg-gray-100">Press Release</li>
              <li className="px-4 py-2 hover:bg-gray-100">Photo Gallery</li>
            </ul> */}
          </li>

          <li className="px-4 py-4 hover:underline
           cursor-pointer">
            DONATION
          </li>

          <li className="px-4 py-4 hover:underline cursor-pointer">
            CONTACT US
          </li>

        </ul>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-bold rounded">
            Registration
          </button>
          <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 font-bold rounded">
            Verification
          </button>
        </div>

      </div>
    </>
  );
}
