<script>
    import * as Avatar from "$lib/components/ui/avatar";
   import Badge from "@/components/ui/badge/badge.svelte";
   import Button from "@/components/ui/button/button.svelte";
    import { BACKEND_URL } from "@/constant/base";
   import { Save } from "lucide-svelte";
   export let proposal;
</script>
<div class="flex flex-col h-fit bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]  m-5 p-5 mt-8"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;


">

   <div class="flex flex-row w-full">
    <a href="/{proposal.studentUsername}">
       <Avatar.Root class="rounded border-2 border-white dark:border-gray-700">
           <Avatar.Image src="{BACKEND_URL}/{proposal.studentAvatar}" alt="@shadcn" />
           <Avatar.Fallback class="rounded border-2">{proposal.studentName.at(0).toUpperCase()}</Avatar.Fallback>
         </Avatar.Root>
        </a>
         <div class="flex flex-col ml-1">
           <div class="flex flex-row gap-2">
               <a href="/{proposal.studentUsername}" class="ml-3 font-mono text-[#0d6e6e] dark:text-white font-bold">{proposal.studentName}</a>
               <p class="text-gray-400 font-mono">from</p>
               <a href="/{proposal.universityUsername}" class="text-gray-600 dark:text-[#c2cbd1] font-mono">{proposal.universityName}</a>
           </div>
           <div class="flex flex-row gap-2">
            {#if proposal.tags.length > 4}
                {#each proposal.tags.slice(0, 4) as tag}
                <a href="/tag/{tag}">
                <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">{tag}</Badge>
                </a>
                {/each}
                <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">{proposal.tags.length-4} More Tags</Badge>
            {:else}
                {#each proposal.tags as tag}
                <a href="/tag/{tag}">
                <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">{tag}</Badge>
                  </a>
                {/each}
            {/if}
              
           </div>
         </div>
        <div class="flex flex-col ml-auto ">
            <Badge class="bg-slate-50 text-gray-600 dark:bg-[#394c6cc6] dark:text-white dark:font-thin w-fit h-8 rounded-md -mt-10">
              Research Proposal
            </Badge>

            <Button
            variant="secondary"
            size="icon"
            class="rounded-xl bg-transparent hover:bg-white dark:hover:bg-slate-600 ml-12 mt-2"
          >
          <Save />
            </Button>

        </div>
   </div>
  <div class="p-3 bg-[#ffffff75] dark:bg-[#1e293b40] mt-2 rounded-md font-sans">
    <a href="/research/{proposal.proposalID}" class="font-self">
      {#if proposal.title.split(' ').length > 120}
          {proposal.title.split(' ').slice(0, 100).join(' ')}...
      {:else}
          {proposal.title}
      {/if}
 </a>    
  </div>
 


</div>