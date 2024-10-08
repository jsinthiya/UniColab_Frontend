<script>
	import { ReplyIcon } from 'lucide-svelte';
        import * as Avatar from "$lib/components/ui/avatar";
    import FeedbackCard from './FeedbackCard.svelte';
    import FeedbackBox from './FeedbackBox.svelte';
    let visible = false;

    function toggleVissible() {
        visible = !visible
    }
</script>
<div class="flex flex-col mb-5">
    <div class="flex ml-10 items-start w-full gap-2.5">
       <Avatar.Root class="w-8 h-8 rounded-full">
           <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
           <Avatar.Fallback>CN</Avatar.Fallback>
         </Avatar.Root>
             <div class="flex flex-col gap-1 w-full max-w-[80%]">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
             <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
             <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
          </div>
          <div class="flex flex-col leading-1.5 p-4 w-full border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-slate-800">
             <p class="text-sm font-normal text-gray-900 dark:text-white w-fit"> 
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquid ea suscipit libero commodi nobis sint iure voluptates quas quisquam optio ducimus velit aut harum ipsa, magni eum recusandae. Architecto!
           </p>
          </div>
          
       </div>
       
       <button on:click={toggleVissible}  class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
          <ReplyIcon class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </button>
        
  
    </div>

    <FeedbackCard />
   
    {#if visible}
    <p>
        <FeedbackBox />
    </p>
    {/if}
         
           
   </div>
   