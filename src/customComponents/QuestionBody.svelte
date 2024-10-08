<script>
	import Textarea from './../lib/components/ui/textarea/textarea.svelte';
    import * as Avatar from "$lib/components/ui/avatar";
   import Badge from "@/components/ui/badge/badge.svelte";
   import Button from "@/components/ui/button/button.svelte";
   import { Heart, Reply, ReplyIcon, Save, Send } from "lucide-svelte";
   export let badge ="Question";
   import { Toggle } from "bits-ui";
   import * as Dialog from "$lib/components/ui/dialog";
    import FeedbackCard from './FeedbackCard.svelte';
    import FeedbackBox from './FeedbackBox.svelte';
    import Answer from './Answer.svelte';

   let love = false;

</script>
<div class="flex flex-col h-fit bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]  m-5 p-5 mt-8"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;


">

   <div class="flex flex-row w-full">
       <a href="#user">
           <Avatar.Root class="rounded border-2 border-white dark:border-gray-700">
               <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
               <Avatar.Fallback>CN</Avatar.Fallback>
             </Avatar.Root>
       </a>
         <div class="flex flex-col ml-1">
           <div class="flex flex-row gap-2">
               <h3 class="ml-3 font-mono text-[#0d6e6e] dark:text-white font-bold">Rifat Hridoy</h3>
               <p class="text-gray-400 font-mono">from</p>
               <a href="#org" class="text-gray-600 dark:text-[#c2cbd1] font-mono">United International University</a>
           </div>
               <div class="flex flex-row gap-2">
                   <a href="#tag">
                       <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">NodeJS</Badge>

                   </a>
                   <a href="#tag">
                       <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">Javascript</Badge>

                   </a>
                   <a href="#tag">
                       <Badge class="font-light bg-slate-50 text-gray-600 w-fit hover:bg-slate-400 hover:text-white dark:bg-[#586f9640] dark:text-white dark:hover:bg-slate-400 dark:hover:text-black">Full Stack Web Developer</Badge>

                   </a>

               </div>
         </div>
         <div class="flex flex-col ml-auto ">
    
           

       </div>
   </div>
  <div class="p-5 flex flex-col gap-3 justify-center items-center bg-[#ffffff75] dark:bg-[#1e293b40] mt-2 rounded-md font-sans">
       <p class="font-self text-current">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ab animi odit perferendis quaerat iure fugit excepturi, inventore non consectetur voluptates, molestias ipsum, ratione aliquam. Beatae sint quibusdam ex mollitia! Veritatis eveniet pariatur, dolores vel ratione nam earum ipsum ea voluptatem animi perspiciatis, possimus molestiae est cumque temporibus hic repellat.</p>
       <img class="rounded-lg" src="https://img.freepik.com/free-vector/modern-question-mark-template-idea-message-vector_1017-47932.jpg" alt="">
  </div>
  <div class="flex flex-row gap-5 justify-evenly mt-5 text-center w-full">
        <Badge class="bg-[#0b818e82] w-full  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] h-8 rounded-md">120 Upvote</Badge>
        <a class="w-full" href="#answers">
         <Badge class="bg-[#0b818e82] w-full  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] h-8 rounded-md">3 Answers</Badge>
    </a>
    <Badge class="bg-[#0b818e82] w-full  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] h-8 rounded-md">3 Feedback</Badge>
</div>
  <div class="flex flex-row  gap-5 pl-5 mt-5">
    <a href="#user">
        <Avatar.Root class="w-12 rounded-full h-12 border-2 border-slate-600 dark:border-slate-50">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
    </a>
<div class="flex flex-row items-center w-full">
    <Textarea class="h-8 dark:bg-slate-800" on:keyup={
        (element) => {
            if (element.target.scrollHeight < 400) {
            element.target.style.height = "1px";
            element.target.style.height = (25+element.target.scrollHeight)+"px";
            }
            }
    } placeholder="Type your answer here." />
    <Button class="bg-transparent dark:bg-transparent text-[#0b818e] dark:text-white" size="icon">
        <Send />
    </Button>
</div>
</div>

<div class="flex flex-col min-w-[50%] h-fit m-5 bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;">
    <p id="answers" class="font-major font-bold m-5">Anwsers</p>
       
    <Answer />
    <Answer />
         
    </div>
</div>