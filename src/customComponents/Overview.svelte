<script lang="ts">
	import FeatureCard from './FeatureCard.svelte';
    import * as Tabs from "$lib/components/ui/tabs";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import TaskCard from './TaskCard.svelte';


    export let data;

    const { tech,project } = data;
    const techList = Object.keys(tech);
</script>
{#if project.status != "Completed"}

<Tabs.Root value="all"  class="flex flex-col  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
">
    <div class="flex flex-row">
        <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Task Status</span>
    {#if project.isOwner}
        <button class="ml-10 h-fit text-sm border-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-[#ffffff40] hover:bg-[#0b818e] hover:text-white dark:bg-[#00000040] dark:hover:bg-slate-800">Add Task</button>
    {/if}  
    {#if project.isContributor || project.isOwner}   
  
        <Tabs.List class="flex font-mono font-bold flex-row ml-auto bg-blue-100 dark:bg-slate-800">
                <Tabs.Trigger value="all" >All Task</Tabs.Trigger>
               
                 <Tabs.Trigger value="my">My Task</Tabs.Trigger>
              </Tabs.List>
              {/if}

    </div>
    <div class="font-alkatra ml-3">
        <Tabs.Content value="all">
            {#if project.tasks.length == 0}
                <p>No tasks added yet</p>
            {/if}
            {#each project.tasks as task}
                <TaskCard task={task} DropdownMenu={DropdownMenu} Button={Button} />
            {/each}
            

    
          </Tabs.Content>
          <Tabs.Content value="my">
            {#if project.myTasks.length == 0}
                <p>No tasks added yet</p>
            {/if}
                 
        {#each project.myTasks as task}
            <TaskCard task={task} DropdownMenu={DropdownMenu} Button={Button} />
        {/each}
      </Tabs.Content>    </div>

</Tabs.Root>
{/if}
    <div  class="flex flex-col  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    ">
        <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Description</span>
        <p class="font-alkatra ml-3">
            {project.description}
        </p>

    </div>

    <div  class="flex flex-col  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
">
    <div class="flex flex-row">
        <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Features</span>
        <a href="#" class="ml-auto h-fit text-sm border-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-[#ffffff40] hover:bg-[#0b818e] hover:text-white dark:bg-[#00000040] dark:hover:bg-slate-800">Add</a>

    </div>
    <div class="font-alkatra ml-3">
        <div>
            {#if project.features.length == 0}
                <p>No features added yet</p>
            {/if}
            {#each project.features as feature}
                 <FeatureCard feature={feature}/>

            {/each}
        

    
        </div>
                
    </div>

</div>
<div  class="flex flex-col  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
">
    <div class="flex flex-row">
        <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Used Technology</span>
        <a href="#" class="ml-auto h-fit text-sm border-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-[#ffffff40] hover:bg-[#0b818e] hover:text-white dark:bg-[#00000040] dark:hover:bg-slate-800">Add</a>

    </div>
    <div class="font-alkatra ml-3">
        <div class="grid grid-cols-3">
         
            {#if project.usedTechnologies.length == 0}
                <p>No technologies added yet</p>
            {/if}
            {#each project.usedTechnologies as t}
            <a href="/tag/{t}" class="flex flex-row gap-x-2 dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                {@html tech[`${t}`]}
                {t}
            </a>
                
              {/each}
            
    
        </div>
                
    </div>

</div>