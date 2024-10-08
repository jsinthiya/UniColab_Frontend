<script>
    import * as Avatar from "$lib/components/ui/avatar";
   import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import { BACKEND_URL } from "@/constant/base";
   import { ChevronsUp, Save, Tags } from "lucide-svelte";
   export let project;
</script>
<div class="flex flex-col h-fit bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]  m-5 p-5 mt-8"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;">

   <div class="flex flex-row w-full">
    <a href="projects/{project.projectID}">
        <Avatar.Root class="rounded border-2 border-white dark:border-gray-700">
            <Avatar.Image src={BACKEND_URL}/{project.projectLogo} alt="@shadcn" />
               <Avatar.Fallback class="rounded border-2">{project.title.at(0)}</Avatar.Fallback>
             </Avatar.Root>
    </a>
         
         <div class="flex flex-col ml-1">
           <div class="flex flex-row gap-2">
               <a href="projects/{project.projectID}" class="ml-3 font-mono text-[#0d6e6e] dark:text-white font-bold">{project.title}</a>
               <p class="text-gray-400 font-mono">by</p>
               <a href="/{project.ownerUsername}" class="text-gray-600 dark:text-[#c2cbd1] font-mono">{project.ownerName}</a>
           </div>
               <div class="flex flex-row gap-2">
                {#if project.tags.length > 4}
                    {#each project.tags.slice(0, 4) as tag}
                    <a href="/tag/{tag}">
                    <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">{tag}</Badge>
                    </a>
                    {/each}
                    <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">{project.tags.length-4} More Tags</Badge>
                {:else}
                    {#each project.tags as tag}
                    <a href="/tag/{tag}">
                    <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">{tag}</Badge>
                      </a>
                    {/each}
                {/if}
                  
               </div>
         </div>
         <div class="flex flex-col ml-auto ">
            <Badge class="bg-slate-50 text-gray-600 dark:bg-[#394c6cc6] dark:text-white dark:font-thin w-fit h-8 rounded-md -mt-10">
                {project.status} Project
            </Badge>

            <Button
            variant="secondary"
            size="icon"
            class="rounded-xl bg-transparent hover:bg-white dark:hover:bg-slate-600 ml-2 mt-2"
          >
          <Save />
            </Button>

        </div>
   </div>
  <div class="p-3 bg-[#ffffff75] dark:bg-[#1e293b40] mt-2 rounded-md font-sans">
    
       <a href="/projects/{project.projectID}" class="font-self">
            {#if project.description.split(' ').length > 120}
                {project.description.split(' ').slice(0, 100).join(' ')}...
            {:else}
                {project.description}
            {/if}
       </a>
  </div>
 
  {#if project.status === "Under Development"}
  <div class="flex flex-row gap-x-[5%] mt-5 text-center w-full gap-12 ml-[25%]">
    <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">{project.contributors} Contributors</Badge>
    <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">{project.contributions} Contributions</Badge>
    <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">
     <ChevronsUp class="w-5 h-5" />
     {project.upvotes} Upvote
 </Badge>
   </div>
  {:else if project.status === "Completed"} 
  <div class="flex flex-row gap-x-[5%] mt-5 text-center w-full gap-12 ml-[25%]">
    <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">{project.reviews} Reviews</Badge>
    <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">{project.rating} Ratting</Badge>
    <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">
     <ChevronsUp class="w-5 h-5" />
     {project.upvotes} Upvote
 </Badge>
</div>
  {/if}

</div>