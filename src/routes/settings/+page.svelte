<script lang="ts">
    import type { PageData } from './$types';
    import * as Avatar from "$lib/components/ui/avatar";
    import Button from '@/components/ui/button/button.svelte';
    import { APP_URL } from '@/constant/base';
    import ScrollArea from '@/components/ui/scroll-area/scroll-area.svelte';
    import { CircleDot, Dot, Target } from 'lucide-svelte';
    import { page } from '$app/stores';
    import * as Dialog from "$lib/components/ui/dialog";
    import { Footer } from '@/components/ui/card';
    import Check from "lucide-svelte/icons/check";
  import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
  import * as Command from "$lib/components/ui/command/index";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { cn } from "$lib/utils.js";
  import { tick } from "svelte";

  const frameworks = [
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
 
  let open = false;
  let value = "";
 
  $: selectedValue =
    frameworks.find((f) => f.value === value)?.label ??
    "Select a framework...";
 
  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }

    export let data: PageData;

    $: console.log(selectedValue)
    const active = "Profile";
</script>
<div class="flex flex-row gap-5 h-full">
    <div class="flex flex-col w-[25%] gap-1 h-full items-center  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5 "
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    ">

    <Avatar.Root class="w-32 h-32 rounded">
        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
    <p class="font-major font-extrabold text-lg">Rifat Ibne Yousuf</p>
    <p class="text-sm text-gray-600 dark:text-gray-200">United International University</p>

    <nav
    class="flex flex-col gap-1 mt-3 min-w-[240px] font-sans text-base font-normal text-gray-700 mb-2"
>

    <a
        href="/"
        role="button"
        tabindex="0"
        class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all text-gray-500 hover:bg-[#1c73ff54] hover:text-[#1c73ff] outline-none dark:hover:bg-slate-100 dark:hover:text-[#1e293b] {active=="Profile"?"bg-[#1c73ff54] text-[#1c73ff] dark:bg-slate-100 dark:text-black":"dark:text-white"} "
    >
        <div class="grid place-items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>        </div>
        Profile
    </a>
    <a
    href="/"
    role="button"
    tabindex="0"
    class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all text-gray-500 hover:bg-[#1c73ff54] hover:text-[#1c73ff] outline-none dark:hover:bg-slate-100 dark:hover:text-[#1e293b] {active=="Security"?"bg-[#1c73ff54] text-[#1c73ff] dark:bg-slate-100 dark:text-black":"dark:text-white"} "
>
    <div class="grid place-items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>    </div>
    Security
</a>

<a
href="/"
role="button"
tabindex="0"
class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all text-gray-500 hover:bg-[#1c73ff54] hover:text-[#1c73ff] outline-none dark:hover:bg-slate-100 dark:hover:text-[#1e293b] {active=="Billings"?"bg-[#1c73ff54] text-[#1c73ff] dark:bg-slate-100 dark:text-black":"dark:text-white"} "
>
<div class="grid place-items-center mr-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll-text"><path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>     </div>
Billings
</a>
    
<a
href="/"
role="button"
tabindex="0"
class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all text-red-500 hover:bg-white outline-none"
>
<div class="grid place-items-center mr-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>    </div>
Delete Account
</a>
    
  
</nav>
        
    </div>
    <ScrollArea class="flex flex-col rounded-lg gap-5 h-full  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-10"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    ">
   
    <div  class="flex flex-col mt-5  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    ">
        
       <div class="flex flex-row">
        <Avatar.Root class="h-20 w-auto rounded">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar.Root>
          <div class="flex flex-col ml-5 justify-start items-start">
                <p class="font-mono font-extrabold text-xl">Rifat Ibne Yousuf</p>
                <p class=" text-gray-600 dark:text-gray-200">United International University</p>
                <p class=" text-[#0b818e] dark:text-gray-200">Student</p>

          </div>
            <Dialog.Root>
                <Dialog.Trigger class="ml-auto">
                    <Button class="ml-auto">Edit</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                <form method="get" action="http://localhost:2000" enctype="multipart/form-data">
                    <div class="flex flex-col justify-center items-stretch gap-3">
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="h-fit rounded" on:click={()=>{
                            document?.getElementById('file')?.click();
                        }}>
                            <img id="img" src="http://localhost:2000/uploads/avatar/1714964387660-My%20project%20(1).jpg" alt="" class="rounded border-2 h-32 w-32 border-gray-300 dark:border-gray-700 ml-5" />
                            <input name="file" type="file" id="file" class="hidden" 
                            on:change={
                                (e)=>{
                                    const file = e?.target?.files[0];
                                    const img = document.getElementById('img');
                                    img.src = URL.createObjectURL(file);
                                  
                                }
                            
                            } />
            
                          </div>
                            <div class="flex flex-col gap-3">
                                <input name="name" type="text" class="w-full p-2 border border-gray-300 dark:border-gray-700 rounded" placeholder="Full Name" />
                                <input name="uni" type="text" bind:value={selectedValue} class="hidden w-full p-2 border border-gray-300 dark:border-gray-700 rounded" placeholder="University Name" />
                                <Popover.Root bind:open let:ids>
                                    <Popover.Trigger asChild let:builder>
                                      <Button
                                        builders={[builder]}
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        class="w-[200px] justify-between"
                                      >
                                        {selectedValue}
                                        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                      </Button>
                                    </Popover.Trigger>
                                    <Popover.Content class="w-[200px] p-0">
                                      <Command.Root>
                                        <Command.Input placeholder="Search framework..." />
                                        <Command.Empty>No framework found.</Command.Empty>
                                        <Command.Group>
                                          {#each frameworks as framework}
                                            <Command.Item
                                              value={framework.value}
                                              onSelect={(currentValue) => {
                                                value = currentValue;
                                                closeAndFocusTrigger(ids.trigger);
                                              }}
                                            >
                                              <Check
                                                class={cn(
                                                  "mr-2 h-4 w-4",
                                                  value !== framework.value && "text-transparent"
                                                )}
                                              />
                                              {framework.label}
                                            </Command.Item>
                                          {/each}
                                        </Command.Group>
                                      </Command.Root>
                                    </Popover.Content>
                                  </Popover.Root>
                            </div>
    
                    </div>

                        <button type="submit">Submit</button>
                </form>
                </Dialog.Content>
              </Dialog.Root>
         
       </div>
        
        

    </div>

    <div  class="flex flex-col mt-5  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    ">
        <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Skills</span>
        


        <ol class="relative border-s border-gray-400 dark:border-gray-800">                  
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-50 rounded-full mt-1.5 -start-1.5 border-2 border-gray-500 dark:border-gray-300 dark:bg-gray-900"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Mid Level
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    NodeJS Development
                </h3>
            
        
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-50 rounded-full mt-1.5 -start-1.5 border-2 border-gray-500 dark:border-gray-300 dark:bg-gray-900"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Mid Level
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Laravel Development
                </h3>
            
        
            </li>
            
       
        </ol>
        
        

    </div>
    <div  class="flex flex-col mt-5  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    ">
        <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Exprience</span>
        

        <div class="flex flex-col">
            <div>
                <div class="flex flex-row items-center">
                    <Avatar.Root class="h-10 w-fit rounded">
                        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                        <Avatar.Fallback>CN</Avatar.Fallback>
                    </Avatar.Root>
                    <p class="ml-3 font-bold">Programming Hero</p>
    
                </div>
                <ol class="relative border-s ml-5 border-gray-400 dark:border-gray-800">                  
                    <li class=" ms-4">
                        <div class="absolute w-3 h-3 bg-gray-50 rounded-full mt-1.5 -start-1.5 border-2 border-gray-500 dark:border-gray-300 dark:bg-gray-900"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            February 2015 - February 2017
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Software Engineer
                        </h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Developed performance goals and objectives to ensure customer promise was met, while exceeding accuracy and quality standards. Solely responsible for up to 5,000 customer orders per hour 
                        </p>
                
                    </li>
                    
               
                </ol>
            </div>
            <div>
                <div class="flex flex-row items-center">
                    <Avatar.Root class="h-10 w-fit rounded">
                        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png" alt="@shadcn" />
                        <Avatar.Fallback>CN</Avatar.Fallback>
                    </Avatar.Root>
                    <p class="ml-3 font-bold">Programming Hero</p>
    
                </div>
                <ol class="relative border-s ml-5 border-gray-400 dark:border-gray-800">                  
                    <li class="ms-4">
                        <div class="absolute w-3 h-3 bg-gray-50 rounded-full mt-1.5 -start-1.5 border-2 border-gray-500 dark:border-gray-300 dark:bg-gray-900"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            February 2015 - February 2017
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Software Engineer
                        </h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Developed performance goals and objectives to ensure customer promise was met, while exceeding accuracy and quality standards. Solely responsible for up to 5,000 customer orders per hour 
                        </p>
                
                    </li>
                    
               
                </ol>
            </div>
        </div>

       
        
        

    </div>
    </ScrollArea>

</div>