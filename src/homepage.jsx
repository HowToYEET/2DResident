import React from "react";

export default function HomePage() {
  return (
    <div className="relative top-20">
      <div className="grid grid-cols-2 gap-20">
        <h1 className="text-3xl p-6">𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚝𝚘 𝚁𝚎𝚜𝚒𝚍𝚎𝚗𝚝 𝟸𝙳. 𝙰𝚗 𝙰𝚙𝚊𝚛𝚝𝚖𝚎𝚗𝚝 𝚛𝚎𝚜𝚒𝚍𝚎𝚗𝚝 𝚠𝚎𝚋𝚜𝚒𝚝𝚎 𝚏𝚘𝚛 𝚌𝚘𝚖𝚙𝚊𝚛𝚒𝚜𝚘𝚗</h1>
        <img className="h-full rounded-md" style={{height: "500px", width: "400px"}} src="https://images.pexels.com/photos/982614/pexels-photo-982614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <button type="button" className="fixed m-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
    </div>
  );
}