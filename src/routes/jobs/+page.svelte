<script >
	import PlanningProjectCard from './../../customComponents/PlanningProjectCard.svelte';
        import Input from "@/components/ui/input/input.svelte";
import ScrollArea from "@/components/ui/scroll-area/scroll-area.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import { FolderPen, GanttChart, Hammer, UserRound, Users,LandPlot, PackageCheck } from "lucide-svelte";
    import UnderDevelopmentProjectCard from "../../customComponents/UnderDevelopmentProjectCard.svelte";
    import ProjectCard from "../../customComponents/ProjectCard.svelte";
    import PostCardSkeleton from '../../customComponents/PostCardSkeleton.svelte';
    import JobCard from '../../customComponents/JobCard.svelte';
    import { Checkbox, Label } from "bits-ui";
    import { Check, Minus } from "lucide-svelte";


    let filterData = {
        jobType: {
            fullTime: false,
            partTime: false,
            freelance: false,
            intern: false,
            remote: false
        },
        exprience: {
            noExprience: false,
            lessThan1: false,
            oneTo2: false,
            threeTo5: false,
            fivePlus: false
        }
    }
    
</script>

 

<ScrollArea class="flex flex-col w-full pl-5">
    
    <!-- <JobCard badge="Latest Job"/>
    <JobCard badge="Hot Job"/>
    <JobCard badge="Popular Job"/> -->
    
    
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
            <h3 class="text-[#617869] dark:text-gray-100 font-major font-bold">
                Filter by
            </h3>
            
            <Input
                type="search"
                placeholder="Search..."
                class="w-[90%] bg-transparent border-dotted border-b border-muted-foreground focus:border-none mr-5 ml-2"
            />
            
            <span class="mt-2 text-gray-400">Info</span>
            <div class="flex flex-col  ml-2">
                <a href="#" class="flex flex-row gap-x-2 dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <UserRound class="w-5 h-5"  />
                    Latest Jobs
                </a>
                <a href="#" class="flex flex-row gap-x-2 dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <UserRound class="w-5 h-5"  />
                    Popular Jobs
                </a>
              
                
            </div>
            <Separator class="bg-gray-300" />
            <span class="mt-2 text-gray-400">Job Type</span>
            <div class="flex flex-col  ml-2">
                <div class="flex flex-row gap-x-2 items-center dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <Checkbox.Root bind:checked={filterData.jobType.fullTime}
                    id="fulltime"
                    aria-labelledby="fulltime-label"
                    class="peer inline-flex size-[25px] items-center justify-center rounded-md border-2 border-black dark:border-white dark:hover:border-black  bg-transparent data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:border-dark-40"
                >
                    <Checkbox.Indicator
                    let:isChecked
                    class="inline-flex items-center justify-center"
                    >
                    {#if isChecked}
                        <Check class="size-[15px]" />
                    {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="fulltime-label"
                    for="fulltime"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Full Time
                </Label.Root>
                </div>
                <div class="flex flex-row gap-x-2 items-center dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <Checkbox.Root bind:checked={filterData.jobType.partTime}
                    id="partime"
                    aria-labelledby="partime-label"
                    class="peer inline-flex size-[25px] items-center justify-center rounded-md border-2 border-black dark:border-white dark:hover:border-black  bg-transparent data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:border-dark-40"
                >
                    <Checkbox.Indicator
                    let:isChecked
                    class="inline-flex items-center justify-center"
                    >
                    {#if isChecked}
                        <Check class="size-[15px]" />
                    {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="partime-label"
                    for="partime"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Part Time
                </Label.Root>
                </div>
                <div class="flex flex-row gap-x-2 items-center dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <Checkbox.Root bind:checked={filterData.jobType.freelance}
                    id="freelance"
                    aria-labelledby="freelance-label"
                    class="peer inline-flex size-[25px] items-center justify-center rounded-md border-2 border-black dark:border-white dark:hover:border-black  bg-transparent data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:border-dark-40"
                >
                    <Checkbox.Indicator
                    let:isChecked
                    class="inline-flex items-center justify-center"
                    >
                    {#if isChecked}
                        <Check class="size-[15px]" />
                    {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="freelance-label"
                    for="freelance"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Freelance
                </Label.Root>
                </div>
                <div class="flex flex-row gap-x-2 items-center dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <Checkbox.Root bind:checked={filterData.jobType.intern}
                    id="intern"
                    aria-labelledby="intern-label"
                    class="peer inline-flex size-[25px] items-center justify-center rounded-md border-2 border-black dark:border-white dark:hover:border-black  bg-transparent data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:border-dark-40"
                >
                    <Checkbox.Indicator
                    let:isChecked
                    class="inline-flex items-center justify-center"
                    >
                    {#if isChecked}
                        <Check class="size-[15px]" />
                    {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="intern-label"
                    for="intern"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Intern
                </Label.Root>
                </div>
                <div class="flex flex-row gap-x-2 items-center dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <Checkbox.Root bind:checked={filterData.jobType.remote}
                    id="remote"
                    aria-labelledby="remote-label"
                    class="peer inline-flex size-[25px] items-center justify-center rounded-md border-2 border-black dark:border-white dark:hover:border-black  bg-transparent data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:border-dark-40"
                >
                    <Checkbox.Indicator
                    let:isChecked
                    class="inline-flex items-center justify-center"
                    >
                    {#if isChecked}
                        <Check class="size-[15px]" />
                    {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="remote-label"
                    for="remote"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Remote
                </Label.Root>
                </div>
                
            </div>
            <Separator class="bg-gray-300" />
            <span class="mt-2 text-gray-400">Exprience</span>
            <div class="flex flex-col  ml-2">
                <div class="flex flex-row gap-x-2 items-center dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <Checkbox.Root bind:checked={filterData.exprience.noExprience}
                    id="noExprerience"
                    aria-labelledby="noExprerience-label"
                    class="peer inline-flex size-[25px] items-center justify-center rounded-md border-2 border-black dark:border-white dark:hover:border-black  bg-transparent data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:border-dark-40"
                >
                    <Checkbox.Indicator
                    let:isChecked
                    class="inline-flex items-center justify-center"
                    >
                    {#if isChecked}
                        <Check class="size-[15px]" />
                    {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="noExprerience-label"
                    for="noExprerience"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    No Exprience
                </Label.Root>
                </div>
                <div class="flex flex-row gap-x-2 items-center dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <Checkbox.Root bind:checked={filterData.exprience.lessThan1}
                    id="lessOne"
                    aria-labelledby="lessOne-label"
                    class="peer inline-flex size-[25px] items-center justify-center rounded-md border-2 border-black dark:border-white dark:hover:border-black  bg-transparent data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:border-dark-40"
                >
                    <Checkbox.Indicator
                    let:isChecked
                    class="inline-flex items-center justify-center"
                    >
                    {#if isChecked}
                        <Check class="size-[15px]" />
                    {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="lessOne-label"
                    for="lessOne"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Less than 1 year
                </Label.Root>
                </div>
                <div class="flex flex-row gap-x-2 items-center dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <Checkbox.Root bind:checked={filterData.exprience.oneTo2}
                    id="oneToTwo"
                    aria-labelledby="oneToTwo-label"
                    class="peer inline-flex size-[25px] items-center justify-center rounded-md border-2 border-black dark:border-white dark:hover:border-black  bg-transparent data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:border-dark-40"
                >
                    <Checkbox.Indicator
                    let:isChecked
                    class="inline-flex items-center justify-center"
                    >
                    {#if isChecked}
                        <Check class="size-[15px]" />
                    {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="oneToTwo-label"
                    for="oneToTwo"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                1-2 years
                </Label.Root>
                </div>
                <div class="flex flex-row gap-x-2 items-center dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <Checkbox.Root bind:checked={filterData.exprience.threeTo5}
                    id="threeToFive"
                    aria-labelledby="threeToFive-label"
                    class="peer inline-flex size-[25px] items-center justify-center rounded-md border-2 border-black dark:border-white dark:hover:border-black  bg-transparent data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:border-dark-40"
                >
                    <Checkbox.Indicator
                    let:isChecked
                    class="inline-flex items-center justify-center"
                    >
                    {#if isChecked}
                        <Check class="size-[15px]" />
                    {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="threeToFive-label"
                    for="threeToFive"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    3-5 years
                </Label.Root>
                </div>
                <div class="flex flex-row gap-x-2 items-center dark:text-gray-200 dark:hover:text-gray-900 hover:bg-slate-50  hover:text-gray-900 p-2 rounded">
                    <Checkbox.Root bind:checked={filterData.exprience.fivePlus}
                    id="fivePlus"
                    aria-labelledby="fivePlus-label"
                    class="peer inline-flex size-[25px] items-center justify-center rounded-md border-2 border-black dark:border-white dark:hover:border-black  bg-transparent data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:border-dark-40"
                >
                    <Checkbox.Indicator
                    let:isChecked
                    class="inline-flex items-center justify-center"
                    >
                    {#if isChecked}
                        <Check class="size-[15px]" />
                    {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="fivePlus-label"
                    for="fivePlus"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    5+ years
                </Label.Root>
                </div>
                
            </div>
            
           
        </ScrollArea>
        
    </div>
</div>
   
