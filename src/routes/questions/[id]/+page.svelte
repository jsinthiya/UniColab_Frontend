<script lang="ts">
	import QuestionBody from './../../../customComponents/QuestionBody.svelte';
    import ScrollArea from '@/components/ui/scroll-area/scroll-area.svelte';
import QuestionsCard from '../../../customComponents/QuestionsCard.svelte';
import type { PageData } from './$types';
    import { ChevronRight } from 'lucide-svelte';
    
    export let data: PageData;
</script>
<div class="flex flex-row">
    <div class="flex flex-col w-[75%]">
           <QuestionBody />
    </div>

    <div class="max-w-[25%] min-w-[25%]">

        <div
            class="flex flex-col bg-[#d3dbe1] dark:bg-[#1e293b] h-full p-5 gap-3"
            style="backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            border-radius: 12px;
            border: 1px solid rgb(81 77 77 / 19%);"
        >
        <ScrollArea class="flex flex-col">           
            
            <span class="mt-2 text-gray-400">Related Questions</span>
            <div class="flex flex-col text-gray-600  ml-2 mt-3">
                
                <div class="flex flex-row">
                    <ChevronRight class="w-5 h-5 mt-1 bg-slate-100 dark:text-gray-400 dark:bg-gray-500 rounded" />
                    <a href="" class="ml-2 text-gray-800 dark:text-gray-100">
                        How to create a custom hook in react?
                    </a>
                </div>
                
            </div>
           
       
           
        </ScrollArea>
            
        </div>
    </div>

</div>

