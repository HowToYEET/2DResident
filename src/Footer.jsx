import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      class=" select-none relative rounded-lg shadow dark:bg-gray-900"
    >
      <div class="w-full max-w-screen-xl mx-auto md:py-6 text-center items-center">
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
        <hr class="my-0 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
      </div>
    </footer>
  );
}
