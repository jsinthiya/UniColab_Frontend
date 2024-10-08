<script >
	import QuestionsCard from './../../customComponents/QuestionsCard.svelte';
	import PlanningProjectCard from './../../customComponents/PlanningProjectCard.svelte';
        import Input from "@/components/ui/input/input.svelte";
import ScrollArea from "@/components/ui/scroll-area/scroll-area.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import { FolderPen, GanttChart, Hammer, UserRound, Users,LandPlot, PackageCheck, BarChart2, UserSearch, UserCheck, ImageUp, Paperclip, Tag } from "lucide-svelte";
    import UnderDevelopmentProjectCard from "../../customComponents/UnderDevelopmentProjectCard.svelte";
    import ProjectCard from "../../customComponents/ProjectCard.svelte";
    import PostCardSkeleton from '../../customComponents/PostCardSkeleton.svelte';
    import { Textarea } from "$lib/components/ui/textarea";

    import * as Avatar from "$lib/components/ui/avatar";
   import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
   import { ChevronsUp, Save } from "lucide-svelte";
   import * as Dialog from "$lib/components/ui/dialog";
    import Skeleton from '@/components/ui/skeleton/skeleton.svelte';
    import { onMount } from 'svelte';
    import { formatBytes } from '@/util/util';
    import JobCard from '../../customComponents/JobCard.svelte';

    async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=200000");
    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
}

let fileSize = 0;
let fileName = "";
let fileType = "";
    
</script>

 

<ScrollArea class="flex flex-col w-full pl-2 mr-5">

    <Dialog.Root>
    <div class="flex flex-col h-fit bg-[#ffffff8f] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] pb-5"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;">
    
       <p class="font-mono border-b-2 pl-10 p-4">
            Any Questions? Ask here
       </p>
       <div class="flex flex-col mt-3 ml-10">
            <div class="flex flex-row gap-5">
                <Avatar.Root class="w-12 rounded-full h-12 border-2 border-slate-600 dark:border-slate-50">
                    <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                    <Avatar.Fallback>CN</Avatar.Fallback>
                </Avatar.Root>
                <Dialog.Trigger class="w-full h-12 flex flex-row justify-start mr-10 text-center items-center p-3 rounded-lg bg-[#ffffffe9] hover:bg-[#ffffff85] text-gray-700 border-2 border-gray-300 dark:bg-slate-800 dark:text-white dark:border-slate-700" >
                    <span class="">Ask a question?</span>
                </Dialog.Trigger>
            </div>
            <div class="flex flex-row mt-4 justify-evenly">
                <Dialog.Trigger class="flex flex-row w-full h-10 justify-center items-center align-middle mr-10 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent rounded-lg text-gray-600 dark:text-slate-50 dark:hover:bg-[#1e313f] hover:bg-slate-200 hover:text-slate-600 dark:hover:text-slate-50" >
                    <Tag class="w-5 h-5 text-gray-600 dark:text-white" />
                    <span class="ml-2">Tags</span>
                </Dialog.Trigger>
                <Dialog.Trigger class="flex flex-row w-full h-10 justify-center items-center align-middle mr-10 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent rounded-lg text-gray-600 dark:text-slate-50 dark:hover:bg-[#1e313f] hover:bg-slate-200 hover:text-slate-600 dark:hover:text-slate-50" >
                    <Paperclip class="w-5 h-5 text-gray-600 dark:text-white" />
                    <span class="ml-2">Attachment</span>
                </Dialog.Trigger>
                <Dialog.Trigger class="flex flex-row w-full h-10 justify-center items-center align-middle mr-10 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent rounded-lg text-gray-600 dark:text-slate-50 dark:hover:bg-[#1e313f] hover:bg-slate-200 hover:text-slate-600 dark:hover:text-slate-50" >
                    <ImageUp class="w-5 h-5 text-gray-600 dark:text-white" />
                    <span class="ml-2">Media</span>
                </Dialog.Trigger>
            </div>

       </div>
      
    </div> 

    <Dialog.Content class="flex flex-col min-w-[50%] h-fit bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;">
    
    <p class="font-mono border-b-2 pl-10 p-4">
        Any Questions? Ask here
   </p>
   <div class="flex flex-col mt-3 ml-10">
        <div class="flex flex-row gap-5">
            <Avatar.Root class="w-12 rounded-full h-12 border-2 border-slate-600 dark:border-slate-50">
                <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
            <Textarea on:keyup={
                (element) => {
                    if (element.target.scrollHeight < 400) {
                    element.target.style.height = "1px";
                    element.target.style.height = (25+element.target.scrollHeight)+"px";
                    }
                    }
            } placeholder="Type your message here." />

        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="h-fit rounded mt-4" >
            <div id="pdf" class="flex hidden flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-slate-800">
                <div class="flex items-start bg-gray-50  dark:bg-slate-900 rounded-xl p-3">
                   <div class="me-2">
                      <span class="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                         <svg fill="none" aria-hidden="true" class="w-5 h-5 flex-shrink-0" viewBox="0 0 20 21">
                            <g clip-path="url(#clip0_3173_1381)">
                               <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"/>
                               <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"/>
                               <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z"/>
                               <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"/>
                               <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"/>
                               <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"/>
                            </g>
                            <defs>
                               <clipPath id="clip0_3173_1381">
                                  <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)"/>
                               </clipPath>
                            </defs>
                         </svg>
                         {fileName}
                      </span>
                      <span class="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                         <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                            <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                         </svg>
                         {formatBytes(fileSize)}
                         <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                            <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                         </svg>
                         {fileType}
                      </span>
                   </div>
          
                </div>
             </div>
            <img id="img" src="http://localhost:2000/uploads/avatar/1714964387660-My%20project%20(1).jpg" alt="" class="rounded hidden border-2 h-32 w-auto border-gray-300 dark:border-gray-700 ml-5" />
            <input type="file" id="file" class="hidden" 
            on:change={
                (e)=>{
                    const file = e?.target?.files[0];
                    if(file.type == "image/png" || file.type == "image/jpeg" || file.type == "image/jpg"){
                        const img = document.getElementById('img');
                        img.src = URL.createObjectURL(file);
                        const pdf = document.getElementById('pdf');
                        pdf.style.display = "none";
                        img.style.display = "block";
                    }else{
                        const img = document.getElementById('img');
                        img.style.display = "none";
                        const pdf = document.getElementById('pdf');
                        pdf.style.display = "flex";
                        fileSize = file.size;
                        fileName = file.name;
                        fileType = file.type.split("/")[1];
                    }
                   
                  
                }
            
            } />

          </div>
      

        <div class="flex flex-row mt-4 justify-evenly">
            <Button class="flex flex-row w-full h-10 justify-center items-center align-middle mr-10 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent rounded-lg text-gray-600 dark:text-slate-50 dark:hover:bg-[#1e313f] hover:bg-slate-200 hover:text-slate-600 dark:hover:text-slate-50" >
                <Tag class="w-5 h-5 text-gray-600 dark:text-white" />
                <span class="ml-2">Tags</span>
            </Button>
            <Button on:click={()=>{
                document?.getElementById('file')?.click();
            }}
            class="flex flex-row w-full h-10 justify-center items-center align-middle mr-10 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent rounded-lg text-gray-600 dark:text-slate-50 dark:hover:bg-[#1e313f] hover:bg-slate-200 hover:text-slate-600 dark:hover:text-slate-50" >
                <Paperclip class="w-5 h-5 text-gray-600 dark:text-white" />
                <span class="ml-2">Attachment</span>
            </Button>
            <Button on:click={()=>{
                document?.getElementById('file')?.click();
            }}
             class="flex flex-row w-full h-10 justify-center items-center align-middle mr-10 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent rounded-lg text-gray-600 dark:text-slate-50 dark:hover:bg-[#1e313f] hover:bg-slate-200 hover:text-slate-600 dark:hover:text-slate-50" >
                <ImageUp class="w-5 h-5 text-gray-600 dark:text-white" />
                <span class="ml-2">Media</span>
            </Button>
        </div>

   </div>

   <Dialog.Footer>
    <Button type="submit">Post</Button>
  </Dialog.Footer>
    
    </Dialog.Content>
</Dialog.Root>
<QuestionsCard />
<QuestionsCard />
<QuestionsCard />
</ScrollArea>
<div class="min-w-[25%]">

    <div
        class="flex flex-col bg-[#d3dbe1] dark:bg-[#1e293b] h-full p-5 gap-3"
        style="backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        border-radius: 12px;
        border: 1px solid rgb(81 77 77 / 19%);"
    >
    <ScrollArea class="flex flex-col">
        <h3 class="text-[#617869] font-mono font-bold">
            Filter by
        </h3>
        
        <Input
            type="search"
            placeholder="Search..."
            class="w-[90%] bg-transparent border-dotted border-b border-muted-foreground focus:border-none mr-5 ml-2"
        />
        
        <span class="mt-2 text-gray-400">Info</span>
        <div class="flex flex-col text-gray-600  ml-2">
            <a href="#" class="flex flex-row gap-x-2 hover:bg-slate-50 focus:bg-slate-50 p-2 rounded">
                <BarChart2 class="w-5 h-5" />
                Popular Questions
            </a>
            <a href="#" class="flex flex-row gap-x-2 hover:bg-slate-50 focus:bg-slate-50 p-2 rounded">
                <UserSearch class="w-5 h-5" />
                My Questions
            </a>
            <a href="#" class="flex flex-row gap-x-2 hover:bg-slate-50 focus:bg-slate-50 p-2 rounded">
                <UserCheck class="w-5 h-5" />
                My Answers
            </a>
            
            
        </div>
        <Separator class="bg-gray-300" />
        <span class="mt-2 text-gray-400">Status</span>
        <div class="flex flex-col text-gray-600  ml-2">
            <a href="#" class="flex flex-row gap-x-2 hover:bg-slate-50 focus:bg-slate-50 p-2 rounded">
                <Hammer class="w-5 h-5" />
                New Questions
            </a>
            <a href="#" class="flex flex-row gap-x-2 hover:bg-slate-50 focus:bg-slate-50 p-2 rounded">
                <LandPlot class="w-5 h-5" />
                Unanswered Questions
            </a>
            <a href="#" class="flex flex-row gap-x-2 hover:bg-slate-50 focus:bg-slate-50 p-2 rounded">
                <PackageCheck class="w-5 h-5" />
                Answered Questions
            </a>
        </div>
   
       
    </ScrollArea>
        
    </div>
</div>
   
