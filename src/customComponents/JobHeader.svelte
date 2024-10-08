<script>
    import * as Avatar from "$lib/components/ui/avatar";
   import Badge from "@/components/ui/badge/badge.svelte";
   import Button from "@/components/ui/button/button.svelte";
   import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
   import {Hammer,ChevronDown} from "lucide-svelte/icons";


</script>
<div class="flex flex-col items-center w-full mb-5">
    <div class="flex flex-col h-32 w-full bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]  m-5 p-5 mt-0"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;


">

   <div class="flex flex-row w-full">
       <Avatar.Root class="rounded h-20 w-20">
           <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
           <Avatar.Fallback>CN</Avatar.Fallback>
         </Avatar.Root>
         <div class="flex flex-col ml-1 mt-3">
            <div class="flex flex-col ml-1 mt-3">
                <div class="flex flex-row gap-2">
                    <h3 class="ml-3 font-major text-[#0d6e6e] dark:text-white font-bold">NodeJS Developer</h3>
                    
                </div>
                    <div class="flex flex-row gap-2 mt-1">
                         <h3 class="ml-3 font-mono text-[#333333] dark:text-white font-bold">Programming Hero</h3>
     
                    </div>
            </div>
        </div>
         <div class="flex flex-col gap-y-4 justify-center items-center ml-auto ">
        
            <div class="flex flex-row  gap-2 ">
                
                <Button class="h-8 w-fit -mt-1 bg-[#f1f5f9] hover:bg-[#d7d9e3ea] text-slate-800 border-[#0b818e4e] hover:bg-[#d7dae3] dark:bg-[#1e293b] dark:hover:bg-slate-300 dark:hover:text-gray-800 hover:border-0 dark:text-gray-400 border border-dashed dark:border-gray-600">
                    Apply Now
                </Button>
            </div>

       </div>
       
   </div>

   <!-- <div class="flex flex-row gap-[5%] mt-5 text-center w-full ml-[5%]">
    <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">Full Time</Badge>
    <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[25%] h-8 rounded-md">Location</Badge>
    <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">Salary</Badge>
    <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[20%] h-8 rounded-md">3 Days left to Apply</Badge>

</div> -->

</div>

</div>




