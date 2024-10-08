<script lang="ts">
	import IssueMessageWithFile from './../../../../customComponents/IssueMessageWithFile.svelte';
    import ProjectHeader from '../../../../customComponents/ProjectHeader.svelte';
    import type { PageData } from './$types';

    import { Tabs } from "bits-ui";

  import { Button } from "$lib/components/ui/button/index.js";
    import { Paperclip, Plus, Send, SquareDashedKanban } from 'lucide-svelte';
    import IssueMessage from '../../../../customComponents/IssueMessage.svelte';
    import ScrollArea from '@/components/ui/scroll-area/scroll-area.svelte';
    import IssueMessageReply from '../../../../customComponents/IssueMessageReply.svelte';
    import IssueMessageWithImage from '../../../../customComponents/IssueMessageWithImage.svelte';
    import IssueMessageWIthLink from '../../../../customComponents/IssueMessageWIthLink.svelte';
    import IssueMessageWithFileReply from '../../../../customComponents/IssueMessageWithFileReply.svelte';
    import IssueMessageWithImageReply from '../../../../customComponents/IssueMessageWithImageReply.svelte';
    import IssueMessageWithLinkReply from '../../../../customComponents/IssueMessageWithLinkReply.svelte';
    import Input from '@/components/ui/input/input.svelte';
    import { onMount } from 'svelte';
 
    onMount(()=>{
        var labels = document.querySelectorAll('.tabBtn');

            // Loop through each label
            labels.forEach(function(label) {
                // Add click event listener to each label
                label.addEventListener('click', function() {
                    // Remove 'active' class from all labels
                    labels.forEach(function(l) {
                        l.classList.remove('bg-[#0b818e]');
                        l.classList.remove('text-white');
                        l.classList.remove('bg-transparent');
                        l.classList.remove('text-[#0b818e]');
                        // l.classList.remove('dark:bg-[#0b818e]');
                        // l.classList.remove('dark:text-black');
                    });
                    // Add 'active' class to the clicked label
                    this.classList.add('bg-[#0b818e]');
                    this.classList.add('text-white');
                    // this.classList.add('dark:bg-[#0b818e]');
                    // this.classList.add('dark:text-black');
                    
                });
            });

    });
  

    //object of issues
    const issues = [
        {
            id: "a1",
            title: "issue 1: this is a long issue title",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam ratione veritatis possimus, fugiat voluptatum debitis asperiores, facilis minima magnam itaque iusto. Aliquam assumenda nostrum cupiditate ratione dolorum, expedita ex?"
        },
        {
            id: "a2",
            title: "issue 2: this is a long issue title",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam ratione veritatis possimus, fugiat voluptatum debitis asperiores, facilis minima magnam itaque iusto. Aliquam assumenda nostrum cupiditate ratione dolorum, expedita ex?"
        },
        {
            id: "a3",
            title: "issue 3: this is a long issue title",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam ratione veritatis possimus, fugiat voluptatum debitis asperiores, facilis minima magnam itaque iusto. Aliquam assumenda nostrum cupiditate ratione dolorum, expedita ex?"
        },
        {
            id: "a4",
            title: "issue 4: this is a long issue title",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam ratione veritatis possimus, fugiat voluptatum debitis asperiores, facilis minima magnam itaque iusto. Aliquam assumenda nostrum cupiditate ratione dolorum, expedita ex?"
        },
        {
            id: "a5",
            title: "issue 5: this is a long issue title",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam ratione veritatis possimus, fugiat voluptatum debitis asperiores, facilis minima magnam itaque iusto. Aliquam assumenda nostrum cupiditate ratione dolorum, expedita ex?"
        },
        {
            id: "a6",
            title: "issue 6: this is a long issue title",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam ratione veritatis possimus, fugiat voluptatum debitis asperiores, facilis minima magnam itaque iusto. Aliquam assumenda nostrum cupiditate ratione dolorum, expedita ex?"
        },
    ]


    let activeIssue:any;
    
    $: console.log(activeIssue)
    export let data;
    const { tech,project } = data;


 
</script>

<div class="flex flex-row h-[110vh]">
    <div class="flex flex-col">

        <ProjectHeader project={project} active="Discussions"></ProjectHeader>
        <div class="flex flex-col  gap-5 min-w-full bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-10 -mt-5"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
">

<Tabs.Root class="min-h-full"
onValueChange={(value) => {
    activeIssue = value;
    
}}
>
  
  <div class="flex flex-row gap-5 h-full">
    <div  class="flex flex-col  gap-3 h-full w-[50%] bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    ">

      <p>Channels</p>

      
        <Tabs.List class="flex flex-col items-start gap-2">
            {#each issues as issue}
            <Tabs.Trigger value={issue.id} class="justify-center items-center" > <Button class="tabBtn bg-transparent text-[#0b818e] hover:text-slate-50 dark:text-slate-50 dark:hover:text-slate-900">
                <SquareDashedKanban class="mr-3"></SquareDashedKanban> 
                {issue.title}
              </Button>
            </Tabs.Trigger>
            {/each}
            
            
        </Tabs.List>
        
            

    </div>
    {#each issues as issue}
    <Tabs.Content value={issue.id} >  <div  class="flex flex-col  gap-3 h-[85vh] w-[100vh]  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
        style="
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        ">
            <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">{issue.title}</span>
          
            <ScrollArea class="flex flex-col gap-5 h-full">
                
                <IssueMessage />
                <IssueMessageWithImage />
                <IssueMessageWithFile />
                <IssueMessageWIthLink />
                <IssueMessageWithFileReply />
                <IssueMessageWithImageReply />

                <IssueMessageReply />
                <IssueMessageWithLinkReply />

            </ScrollArea>
            <div class="flex flex-row p-5 border-t-2 border-gray-300 dark:border-gray-600">
               
                <Button class="bg-[#0b818e] h-10 w-10 text-white dark:text-white dark:bg-slate-800" size="icon">
                    <Paperclip class="h-5 w-5" />
                </Button>
                <Input
                    type="text"
                    placeholder="Type your message here..."
                    class="w-full bg-transparent border-dotted border-b border-muted-foreground focus:border-gray-100 mr-5 ml-2"
                />
                <Button class="bg-[#0b818e] h-10 w-16 text-white dark:text-white dark:bg-slate-800" size="icon">
                    <Send class="h-5 w-5" />
                </Button>
            </div>
        </div> </Tabs.Content>
    {/each}

        
   
  </div>
</Tabs.Root>

</div>
    </div>
    <!-- <div class="flex flex-col  gap-3 h-fit w-[25%] m-5 pt-5 pl-5 pb-5 p-2  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    ">
 
    
    <Input
        type="search"
        placeholder="Search..."
        class="w-[90%] bg-transparent border-dotted border-b border-muted-foreground focus:border-gray-100 mr-5 ml-2"
    />

    <h3 class="text-[#617869] dark:text-gray-100 font-mono font-bold">
        Contributors
    </h3>
    <ContributorCard />
  
    </div> -->
</div>
