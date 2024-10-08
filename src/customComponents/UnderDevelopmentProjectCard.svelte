<script>
    import * as Avatar from "$lib/components/ui/avatar";
   import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
   import { ChevronsUp, Save } from "lucide-svelte";
</script>
<div class="flex flex-col h-fit bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]  m-5 p-5 mt-8"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;">

   <div class="flex flex-row w-full">
    <Avatar.Root class="rounded border-2 border-white dark:border-gray-700">
        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
           <Avatar.Fallback>CN</Avatar.Fallback>
         </Avatar.Root>
         <div class="flex flex-col ml-1">
           <div class="flex flex-row gap-2">
               <h3 class="ml-3 font-mono text-[#0d6e6e] dark:text-white font-bold">MedEasy</h3>
               <p class="text-gray-400 font-mono">by</p>
               <p class="text-gray-600 dark:text-[#c2cbd1] font-mono">Rifat Hridoy</p>
           </div>
               <div class="flex flex-row gap-2">
                   <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">NodeJS</Badge>
                   <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">Javascript</Badge>
                   <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">Full Stack Web Developer</Badge>
                   <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">React Native</Badge>

               </div>
         </div>
         <div class="flex flex-col ml-auto ">
            <Badge class="bg-slate-50 text-gray-600 dark:bg-[#394c6cc6] dark:text-white dark:font-thin w-fit h-8 rounded-md -mt-10">
                Under Development
            </Badge>

            <Button
            variant="secondary"
            size="icon"
            class="rounded-xl bg-transparent hover:bg-white dark:hover:bg-slate-600 ml-20 mt-2"
          >
          <Save />
            </Button>

        </div>
   </div>
  <div class="p-3 bg-[#ffffff75] dark:bg-[#1e293b40] mt-2 rounded-md font-sans">
       <p class="font-self">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ab animi odit perferendis quaerat iure fugit excepturi, inventore non consectetur voluptates, molestias ipsum, ratione aliquam. Beatae sint quibusdam ex mollitia! Veritatis eveniet pariatur, dolores vel ratione nam earum ipsum ea voluptatem animi perspiciatis, possimus molestiae est cumque temporibus hic repellat.</p>
  </div>
 
   <div class="flex flex-row gap-x-[5%] mt-5 text-center w-full gap-12 ml-[25%]">
       <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">5 Contributors</Badge>
       <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">122 Commits</Badge>
       <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">
        <ChevronsUp class="w-5 h-5" />
        255 Upvote
    </Badge>

   </div>


</div>