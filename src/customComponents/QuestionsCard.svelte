<script>
	import Textarea from './../lib/components/ui/textarea/textarea.svelte';
    import * as Avatar from "$lib/components/ui/avatar";
   import Badge from "@/components/ui/badge/badge.svelte";
   import Button from "@/components/ui/button/button.svelte";
   import { Heart, Save } from "lucide-svelte";
   export let badge ="Question";
   import { Toggle } from "bits-ui";
   import * as Dialog from "$lib/components/ui/dialog";

   let love = false;

</script>
<a href="/questions/id" class="flex flex-col h-fit bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]  m-5 p-5 mt-8"
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
           <Badge class="bg-slate-50 text-gray-600 dark:bg-[#394c6cc6] dark:text-white dark:font-thin w-fit h-8 rounded-md -mt-10">
               {badge}
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
       <p class="font-self text-current">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ab animi odit perferendis quaerat iure fugit excepturi, inventore non consectetur voluptates, molestias ipsum, ratione aliquam. Beatae sint quibusdam ex mollitia! Veritatis eveniet pariatur, dolores vel ratione nam earum ipsum ea voluptatem animi perspiciatis, possimus molestiae est cumque temporibus hic repellat.</p>
  </div>
  <div class="flex flex-row gap-5 justify-evenly mt-5 text-center w-full">
    <Badge class="bg-[#0b818e82] w-full  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] h-8 rounded-md">120 Upvote</Badge>
    <Badge class="bg-[#0b818e82] w-full  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] h-8 rounded-md">3 Answers</Badge>
    <Badge class="bg-[#0b818e82] w-full  text-gray-800 hover:bg-[#d7d9e3ea] dark:bg-slate-600 dark:text-white dark:hover:bg-[#10151f40] h-8 rounded-md">3 Feedback</Badge>
</div>
  <a href="" class="flex flex-row gap-5 pl-5 mt-5">
    <a href="#user">
        <Avatar.Root class="w-12 rounded-full h-12 border-2 border-slate-600 dark:border-slate-50">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
    </a>
  
    <Dialog.Root>
    <Dialog.Trigger class="w-full h-12 flex flex-row justify-start text-center items-center p-3 rounded-2xl bg-[#ffffffe9] hover:bg-[#ffffff85] text-gray-700 border-2 border-gray-300 dark:bg-slate-800 dark:text-white dark:border-slate-700" >
        <span class="">Answer this.....</span>
    </Dialog.Trigger>
    <Dialog.Content class="flex flex-col min-w-[50%] h-fit bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;">
    
    <p class="font-mono border-b-2 pl-10 p-4">
        Write Your Answer
   </p>
   <div class="flex flex-col mt-3 ml-10">
        <div class="flex flex-row gap-5">
            <Avatar.Root class="w-12 rounded-full h-12 border-2 border-slate-600 dark:border-slate-50">
                <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
            <!-- svelte-ignore missing-declaration -->
            <Textarea on:keyup={
                (element) => {
                    if (element.target.scrollHeight < 400) {
                    element.target.style.height = "1px";
                    element.target.style.height = (25+element.target.scrollHeight)+"px";
                    }
                    }
            } placeholder="Type your answer here." />

        </div>

      

   </div>

   <Dialog.Footer>
    <Button type="submit">Post</Button>
  </Dialog.Footer>
    
    </Dialog.Content>
</Dialog.Root>
</a>


</a>