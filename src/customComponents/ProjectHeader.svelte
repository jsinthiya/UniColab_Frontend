<script>
    import * as Avatar from "$lib/components/ui/avatar";
   import Badge from "@/components/ui/badge/badge.svelte";
   import Button from "@/components/ui/button/button.svelte";
   import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
   import {Hammer,ChevronDown} from "lucide-svelte/icons";
   import { page } from "$app/stores";
    import { BACKEND_URL } from "@/constant/base";


   export let active = "Overview"
    export let project;
    console.log(project)
   let status = project.status;
</script>
<div class="flex flex-col items-center w-full">
    <div class="flex flex-col h-32 w-full bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]  m-5 p-5 mt-0"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;


">

   <div class="flex flex-row w-full">
       <Avatar.Root class="rounded h-20 w-20">
           <Avatar.Image src="{BACKEND_URL}/{project.logo}" alt="@shadcn" />
           <Avatar.Fallback>{project.title.at(0)}</Avatar.Fallback>
         </Avatar.Root>
         <div class="flex flex-col ml-1 mt-3">
           <div class="flex flex-row gap-2">
               <h3 class="ml-3 font-major text-[#0d6e6e] dark:text-white font-bold">{project.title}</h3>
               <p class="text-gray-400 font-mono">by</p>
               <a href="/{project.ownerUsername}"
                class="text-gray-600 dark:text-[#c2cbd1] font-edu">@{project.ownerUsername}</a>
                {#if project.privacy=="protected"}
               <Button class="h-8 w-fit -mt-1 bg-[#f1f5f9] hover:bg-[#d7d9e3ea] text-slate-800 border-[#0b818e4e] hover:bg-[#d7dae3] dark:bg-[#1e293b] dark:hover:bg-slate-300 dark:hover:text-gray-800 hover:border-0 dark:text-gray-400 border border-dashed dark:border-gray-600">Invite Member</Button>
                {/if}
            </div>
               <div class="flex flex-row gap-2 mt-1">
                    <h3 class="ml-3 font-mono text-[#333333] dark:text-white font-bold">{project.categoryName}</h3>
                    {#if !project.isOwner}
                    <Button class="flex felx-row gap-1 ml-3 h-7 text-[#0b1a8ec6] border border-dashed border-[#0b1a8e4e] dark:text-blue-300 dark:border-gray-400 bg-transparent  pl-2 pr-2 rounded-lg" variant="outline">
                        <Hammer class="h-3 w-3" /> 
                        <span class="text-sm">{status}</span>
                    </Button>
                    {:else}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild let:builder>
                          <Button class="flex felx-row gap-1 ml-3 h-7 text-[#0b1a8ec6] border border-dashed border-[#0b1a8e4e] dark:text-blue-300 dark:border-gray-400 bg-transparent  pl-2 pr-2 rounded-lg" variant="outline" builders={[builder]}>
                            <Hammer class="h-3 w-3" /> 
                            <span class="text-sm">{status}</span>
                            <ChevronDown class="h-3 w-3 mt-1" /> 
                        </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content align="start">
                          <DropdownMenu.Label>Switch Status</DropdownMenu.Label>
                          <DropdownMenu.Separator />
                          <DropdownMenu.RadioGroup bind:value={status}>
                            <DropdownMenu.RadioItem on:click={
                                async ()=>{
                                    let res = await fetch(`${BACKEND_URL}/v1/project/updatestatus/${project.projectID}?status=Under Development`,{
                                        method:"PUT",
                                        headers:{
                                            "Content-Type":"application/json"
                                        },
                                        body:JSON.stringify({status:"Under Development"})
                                    })
                                    if(res.ok){
                                        status = "Under Development"
                                    }
                                }
                              } value="Under Development">Under Development</DropdownMenu.RadioItem>
                            <DropdownMenu.RadioItem on:click={
                                async ()=>{
                                    let res = await fetch(`${BACKEND_URL}/v1/project/updatestatus/${project.projectID}?status=Compeleted`,{
                                        method:"PUT",
                                        headers:{
                                            "Content-Type":"application/json"
                                        },
                                        body:JSON.stringify({status:"Compeleted"})
                                    })
                                    if(res.ok){
                                        status = "Compeleted"
                                    }
                                }
                              
                            } value="Compeleted">Compeleted</DropdownMenu.RadioItem>
                          </DropdownMenu.RadioGroup>
                        </DropdownMenu.Content>
                      </DropdownMenu.Root>
                    {/if}
                
                    


               </div>
         </div>
         <div class="flex flex-col gap-y-4 justify-center items-center ml-auto ">
        
            <div class="flex flex-row  gap-2 ">
                
                {#if project.colabLink}
                    <a href="{project.colabLink}">
                        <Button class="h-8 w-fit -mt-1 bg-[#f1f5f9] hover:bg-[#d7d9e3ea] text-slate-800 border-[#0b818e4e] hover:bg-[#d7dae3] dark:bg-[#1e293b] dark:hover:bg-slate-300 dark:hover:text-gray-800 hover:border-0 dark:text-gray-400 border border-dashed dark:border-gray-600">
                            Open Colab Server
                        </Button>
                    </a>
                    <Button class="h-8 w-fit -mt-1 bg-[#f1f5f9] hover:bg-[#d7d9e3ea] text-slate-800 border-[#0b818e4e] hover:bg-[#d7dae3] dark:bg-[#1e293b] dark:hover:bg-slate-300 dark:hover:text-gray-800 hover:border-0 dark:text-gray-400 border border-dashed dark:border-gray-600">
                        Open Colab Server
                    </Button>

                {:else}
                
                {#if project.isOwner}
                <Button class="h-8 w-fit -mt-1 bg-[#f1f5f9] hover:bg-[#d7d9e3ea] text-slate-800 border-[#0b818e4e] hover:bg-[#d7dae3] dark:bg-[#1e293b] dark:hover:bg-slate-300 dark:hover:text-gray-800 hover:border-0 dark:text-gray-400 border border-dashed dark:border-gray-600">
                    Run Colab Server
                </Button>
                {/if}
                {/if}
            {#if project.liveLink}
            <a href="{project.liveLink}">
                <Button class="h-8 w-fit -mt-1 bg-[#f1f5f9] hover:bg-[#d7d9e3ea] text-slate-800 border-[#0b818e4e] hover:bg-[#d7dae3] dark:bg-[#1e293b] dark:hover:bg-slate-300 dark:hover:text-gray-800 hover:border-0 dark:text-gray-400 border border-dashed dark:border-gray-600">
                    Live View
                </Button>
            </a>
            {/if}
        

            </div>
            {#if project.lastCommitTime}
            <p class="text-gray-700 dark:text-gray-300 font-mono text-sm" >
                Last Updated on: {new Date(project.lastCommitTime).toLocaleString('en-US', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric', weekday: undefined }).replace(/\b(\d{1,2})(?=,)/, (d) => d + (['th', 'st', 'nd', 'rd'][(d % 10 > 3 || [11, 12, 13].includes(d % 100)) ? 0 : d % 10]))}
            </p>
            {/if}
            


       </div>
       
   </div>

</div>
<div class="flex flex-row items-center justify-center gap-3 h-fit w-[95%] bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-2 -mt-10 z-50"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
">

    <a href="/projects/{$page.url.pathname.split("/")[2]}">
        <Button class="{active=="Overview"?"bg-[#0b818e] text-white dark:bg-white dark:text-slate-800":"bg-[#ffffff40] text-slate-900 dark:bg-[#00000040] dark:text-white"} hover:bg-[#0b818e] hover:text-white dark:hover:bg-white dark:hover:text-slate-800 backdrop-blur-lg ">
            Overview
        </Button>
    </a>
   
    <a href="/projects/{$page.url.pathname.split("/")[2]}/discussion">
        <Button class="{active=="Discussions"?"bg-[#0b818e] text-white dark:bg-white dark:text-slate-800":"bg-[#ffffff40] text-slate-900 dark:bg-[#00000040] dark:text-white"} hover:bg-[#0b818e] hover:text-white dark:hover:bg-white dark:hover:text-slate-800 backdrop-blur-lg ">
            Discussions
        </Button>
    </a>
  
    <!-- <a href="/projects/{$page.url.pathname.split("/")[2]}/tasks">
        <Button class="{active=="Tasks"?"bg-[#0b818e] text-white dark:bg-white dark:text-slate-800":"bg-[#ffffff40] text-slate-900 dark:bg-[#00000040] dark:text-white"} hover:bg-[#0b818e] hover:text-white dark:hover:bg-white dark:hover:text-slate-800 backdrop-blur-lg ">
            Tasks
        </Button>
    </a> -->
    
    <!-- <a href="/projects/{$page.url.pathname.split("/")[2]}/resources">
        <Button class="{active=="Resources"?"bg-[#0b818e] text-white dark:bg-white dark:text-slate-800":"bg-[#ffffff40] text-slate-900 dark:bg-[#00000040] dark:text-white"} hover:bg-[#0b818e] hover:text-white dark:hover:bg-white dark:hover:text-slate-800 backdrop-blur-lg ">
            Resources
        </Button>
    </a> -->
    
    <a href="/projects/{$page.url.pathname.split("/")[2]}/contributions">
        <Button class="{active=="Contributions"?"bg-[#0b818e] text-white dark:bg-white dark:text-slate-800":"bg-[#ffffff40] text-slate-900 dark:bg-[#00000040] dark:text-white"} hover:bg-[#0b818e] hover:text-white dark:hover:bg-white dark:hover:text-slate-800 backdrop-blur-lg ">
            Contributions
        </Button>
    </a>
    {#if project.isOwner}
  <a href="/projects/{$page.url.pathname.split("/")[2]}/settings">
    <Button class="{active=="Settings"?"bg-[#0b818e] text-white dark:bg-white dark:text-slate-800":"bg-[#ffffff40] text-slate-900 dark:bg-[#00000040] dark:text-white"} hover:bg-[#0b818e] hover:text-white dark:hover:bg-white dark:hover:text-slate-800 backdrop-blur-lg ">
        Settings
    </Button>
  </a>
    {/if}
    

</div>

</div>




