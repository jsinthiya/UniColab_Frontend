<script>
	import { CircleDot, MessageSquareDot } from 'lucide-svelte';
    
    import * as HoverCard from "$lib/components/ui/hover-card";


  import * as Avatar from "$lib/components/ui/avatar";
    import Separator from '@/components/ui/separator/separator.svelte';
    import { BACKEND_URL } from '@/constant/base';

    export let DropdownMenu;
    export let Button;
    export let task;
    export let status = task.taskStatus;
    export let myTask = false
    
    

    const statusData = {
        color: {
            "Just Assigned": "bg-[#60a5fa39] border border-[#60a5fa49] text-blue-500",
            "Running task": "bg-[#c7e7de] border border-[#4bfacb] text-[#43bd9a]",
            "Pasued task": "bg-red-300 border border-red-300 text-red-700 text-red-700",
            "Feedback request": "bg-[#f59e0b39] border border-[#f59e0b49] text-yellow-500",
            "Task Completed": "bg-[#10b98139] border border-[#10b98149] text-green-500",
        },
       
    }
    

</script>
<div class="flex flex-row items-center mb-3 mt-3">
    <h3 class="f font-alkatra w-[25%]">{task.taskTitle}</h3>
    <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button class="h-fit w-[25%] {statusData.color[status]}
          } ml-5 rounded-xl hover:bg-transparent" variant="outline" builders={[builder]}>
            <CircleDot class="h-4 w-4 mr-1" />
            <p>{status}</p>
        </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-56">
          <DropdownMenu.Label>Task Status</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.RadioGroup bind:value={status}>
            <DropdownMenu.RadioItem on:click={
              async ()=>{
                const res = await fetch(`${BACKEND_URL}/v1/project/tasks/${task.taskID}?status=Just Assigned`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({status: 'Just Assigned'})
                });
                if(res.ok){
                  status = 'Just Assigned';
                }
              }
            } value="Just Assigned">Just Assigned</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem on:click={
              async ()=>{
                const res = await fetch(`${BACKEND_URL}/v1/project/tasks/${task.taskID}?status=Running task`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({status: 'Running task'})
                });
                if(res.ok){
                  status = 'Running task';
                }
              } }
             value="Running task">Running task</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem on:click={
              async ()=>{
                const res = await fetch(`${BACKEND_URL}/v1/project/tasks/${task.taskID}?status=Pasued task`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({status: 'Pasued task'})
                });
                if(res.ok){
                  status = 'Pasued task';
                }
              } 
            } value="Pasued task">Pasued task</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem on:click={
              async ()=>{
                const res = await fetch(`${BACKEND_URL}/v1/project/tasks/${task.taskID}?status=Feedback request`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({status: 'Feedback request'})
                });
                if(res.ok){
                  status = 'Feedback request';
                }
              }}
             value="Feedback request">Feedback request</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="Task Completed">Task Completed</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    <h6 class="f font-alkatra ml-5 w-[25%]">{new Date(task.taskTargetDate).toLocaleString('en-US', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric', weekday: undefined }).replace(/\b(\d{1,2})(?=,)/, (d) => d + (['th', 'st', 'nd', 'rd'][(d % 10 > 3 || [11, 12, 13].includes(d % 100)) ? 0 : d % 10]))}</h6>

    <div class="w-[25%] flex flex-row justify-end">
      {#each task.taskAssignUsers as user}
        <HoverCard.Root>
            <HoverCard.Trigger>
              <a href="/{user.username}">
                <Avatar.Root class="-ml-4 border-2">
                    <Avatar.Image src="{BACKEND_URL}/{user.avatar}" alt="@shadcn" />
                    <Avatar.Fallback>{user.name.at(0)}</Avatar.Fallback>
                  </Avatar.Root>
                </a>
            </HoverCard.Trigger>
            <HoverCard.Content align="start">
              <div class="flex col p-2">
                <div class="flex flex-row">
                  
                    <Avatar.Root class="-ml-4 border-2">
                        <Avatar.Image src="{BACKEND_URL}/{user.avatar}" alt="@shadcn" />
                        <Avatar.Fallback>{user.name.at(0)}</Avatar.Fallback>
                      </Avatar.Root>
                  
                      <div class="flex flex-col ml-2">
                        <p >{user.name}</p>
                        <p class="text-xs">@{user.username}</p>
                        <!-- button with border -->
                        <a href="/{user.username}" class="border rounded-md p-1 mt-1 w-fit text-xs"
                        >View Profile</a>
                      </div>
                </div>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>
      {/each}
        
      
        
    </div>
   

</div>
<Separator/>