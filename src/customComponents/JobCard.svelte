<script>
     import * as Avatar from "$lib/components/ui/avatar";
    import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import { Heart, Save } from "lucide-svelte";
    export let badge ="Job";
    import { Toggle } from "bits-ui";
    import { BACKEND_URL } from "@/constant/base";

    let love = false;
    export let job;

</script>
<div class="flex flex-col h-fit bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]  m-5 p-5 mt-8"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;


">

    <div class="flex flex-row w-full">
        <a href="/{job.orgUsername}">
            <Avatar.Root class="rounded border-2 border-white dark:border-gray-700">
                <Avatar.Image src="{BACKEND_URL}/{job.orgLogo}" alt="@shadcn" />
                <Avatar.Fallback class="rounded border-2">{job.orgName.at(0).toUpperCase()}</Avatar.Fallback>
              </Avatar.Root>
        </a>
          <div class="flex flex-col ml-1">
            <div class="flex flex-row gap-2">
                <a href="/{job.jobID}" class="ml-3 font-mono text-[#0d6e6e] dark:text-white font-bold">{job.title}</a>
                <p class="text-gray-400 font-mono">at</p>
                <a href="/{job.orgUsername}" class="text-gray-600 dark:text-[#c2cbd1] font-mono">{job.orgName}</a>
            </div>
            <div class="flex flex-row gap-2">
                {#if job.tags?.length > 4}
                    {#each job.tags.slice(0, 4) as tag}
                    <a href="/tag/{tag}">
                    <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">{tag}</Badge>
                    </a>
                    {/each}
                    <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">{job.tags.length-4} More Tags</Badge>
                {:else}
                    {#each job.tags as tag}
                    <a href="/tag/{tag}">
                    <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">{tag}</Badge>
                      </a>
                    {/each}
                {/if}
                  
               </div>
          </div>
          <div class="flex flex-col ml-auto ">
            <Badge class="bg-slate-50 text-gray-600 dark:bg-[#394c6cc6] dark:text-white dark:font-thin w-fit h-8 rounded-md -mt-10">
                {job.jobType} Job
            </Badge>

            <a href="">

                <Toggle.Root
                aria-label="toggle code visibility"
                class="toggle rounded-xl love bg-transparent hover:bg-white dark:hover:bg-slate-600 ml-1 mt-2"
                bind:pressed={love}
              >
                <Heart class="size-6" />
              </Toggle.Root>
               
            
            </a>
            

        </div>
    </div>
   <div class="p-3 bg-[#ffffff75] dark:bg-[#1e293b40] mt-2 rounded-md font-sans">
    <a href="/projects/{job.jobID}" class="font-self">
        {#if job.description.split(' ').length > 120}
            {job.description.split(' ').slice(0, 100).join(' ')}...
        {:else}
            {job.description}
        {/if}
   </a>
   </div>
  
    <div class="flex flex-row gap-[5%] mt-5 text-center w-full ml-[5%]">
        <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">{job.jobType}</Badge>
        <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[25%] h-8 rounded-md">{job.jobLocation}</Badge>
        <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[15%] h-8 rounded-md">{job.salary} BDT</Badge>
        <Badge class="bg-[#0b818e82]  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] w-[20%] h-8 rounded-md">{job.daysLeft} Days left to Apply</Badge>

    </div>


</div>