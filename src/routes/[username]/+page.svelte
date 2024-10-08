<script lang="ts">
    import type { PageData } from './$types';
    import * as Avatar from "$lib/components/ui/avatar";
    import Button from '@/components/ui/button/button.svelte';
    import { APP_URL } from '@/constant/base';
    import ScrollArea from '@/components/ui/scroll-area/scroll-area.svelte';
    import { CircleDot, Dot, Target } from 'lucide-svelte';
    import { page } from '$app/stores';
    export let data: PageData;

    const active = "Home";
</script>
<div class="flex flex-row gap-5 h-full">
    <div class="flex flex-col w-[50%] gap-1 h-full items-center  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5 "
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
        <div class="flex flex-row gap-3">
            <Button class="rounded-xl bg-white text-slate-900 hover:bg-slate-900 hover:text-white">Message</Button>
            <Button class="rounded-xl bg-slate-900 text-white hover:bg-white hover:text-slate-900">Hire me</Button>
        </div>
        <div class="mt-5">
            <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Bio</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, blanditiis repellat eos id minus inventore accusamus impedit eum ipsa, maxime aperiam corrupti aliquam eius fugit laboriosam quas provident dicta voluptates.</p>

        </div>
        
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
        <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Education</span>
        


        <ol class="relative border-s border-gray-400 dark:border-gray-800">                  
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-50 rounded-full mt-1.5 -start-1.5 border-2 border-gray-500 dark:border-gray-300 dark:bg-gray-900"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    February 2015 - February 2017
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Baralia High School
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    JSC - 2015 | SSC - 2018
                </p>
        
            </li>
            
       
        </ol>
        
        

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