import React from "react";
import logo from "../public/ResidenceLogo.png";

export default function Footer() {
  return (
    <footer class="relative rounded-lg shadow dark:bg-gray-900 my-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center items-center">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Residence Provider™
            </span>
          </div>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a class=" cursor-pointer hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a class="cursor-pointer hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a class="cursor-pointer hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a class="cursor-pointer hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 &nbsp;{" "}
          <p className=" cursor-pointer hover:underline">Residence Provider™</p>
          .&nbsp; All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
