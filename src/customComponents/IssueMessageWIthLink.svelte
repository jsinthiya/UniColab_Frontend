
<script>
    import * as Avatar from "$lib/components/ui/avatar";

</script>
<div class="flex items-start gap-2.5 mb-5 mt-5">
    <Avatar.Root class="w-8 h-8 rounded-full">
        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
    <div class="flex flex-col gap-1 w-full max-w-[320px]">
       <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
       </div>
       <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-slate-800">
          <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Check out this open-source UI component library based on Tailwind CSS:</p>
         <p class="text-sm font-normal pb-2.5 text-gray-900 dark:text-white"><a href="https://github.com/themesberg/flowbite" class="text-blue-700 dark:text-blue-500 underline hover:no-underline font-medium break-all">https://github.com/themesberg/flowbite</a></p>
         <a href="#" class="bg-gray-50  dark:bg-slate-900 rounded-xl p-4 mb-2 hover:bg-gray-200 dark:hover:bg-gray-700">
             <img src="https://flowbite.com/docs/images/og-image.png" class="rounded-lg mb-2" />
             <span class="text-sm font-medium text-gray-900 dark:text-white mb-2">GitHub - themesberg/flowbite: The most popular and open source libra ...</span>
             <span class="text-xs text-gray-500 dark:text-gray-400 font-normal">github.com</span>
         </a>
       </div>
       <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
    </div>
    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
       <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
       </svg>
    </button>
    <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
       <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
          <li>
             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
          </li>
          <li>
             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
          </li>
          <li>
             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
          </li>
          <li>
             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
          </li>
          <li>
             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
          </li>
       </ul>
    </div>
 </div>
 