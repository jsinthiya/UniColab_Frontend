<script>
    import * as Avatar from "$lib/components/ui/avatar";
   import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import { Skeleton } from "@/components/ui/skeleton";
   import { ChevronsUp, Save } from "lucide-svelte";

</script>
<div class="flex flex-col h-fit bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]  m-5 p-5 mt-8"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;">

   <div class="flex flex-row w-full">
       <Avatar.Root class="rounded space-x-4 ">
           <Skeleton class="h-full w-full"  />
         </Avatar.Root>
         <div class="flex flex-col ml-1">
           <div class="flex flex-row gap-2">
               <Skeleton class="ml-3 font-mono h-5 w-36 font-bold"/>
               <Skeleton class=" h-5 w-6"/>
               <Skeleton class="h-5 w-10"/>
           </div>
               <div class="flex flex-row gap-2 mt-1">
                   <Skeleton class="w-16 h-6 "/>
                   <Skeleton class=" w-16 h-6 "/>
                   <Skeleton class="w-16 h-6 "/>
                   <Skeleton class="w-16 h-6 "/>

               </div>
         </div>
         <div class="flex flex-col ml-auto ">
            <Skeleton class="bg-slate-50 text-gray-600 dark:bg-[#394c6cc6] dark:text-white dark:font-thin w-30 h-8 rounded-md -mt-10" />

            <Skeleton class="w-10 h-10 mt-2 ml-20"/>
            
  

        </div>
   </div>
  <div class="p-3  mt-2 rounded-md">
       <Skeleton class="font-self h-28"/>
  </div>
 



</div>