<script lang="ts">
	import FeatureCard from './../../../customComponents/FeatureCard.svelte';
    import Input from '@/components/ui/input/input.svelte';
    import ProjectHeader from '../../../customComponents/ProjectHeader.svelte';
    import type { PageData } from './$types';
    import ContributorCard from '../../../customComponents/ContributorCard.svelte';
    import * as Tabs from "$lib/components/ui/tabs";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import TaskCard from '../../../customComponents/TaskCard.svelte';
    import Overview from '../../../customComponents/Overview.svelte';
    import Separator from '@/components/ui/separator/separator.svelte';


    export let data: PageData;

    const { tech,project } = data;
    const techList = Object.keys(tech);
</script>

<div class="flex flex-row">
    <div class="flex flex-col w-[75%]">

        <ProjectHeader project={project}></ProjectHeader>
        <div class="flex flex-col  gap-5 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-10 -mt-5"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
">

<Overview data={data}></Overview>

</div>
    </div>
    <div class="flex flex-col  gap-3 h-fit w-[25%] m-5 pt-5 pl-5 pb-5 p-2  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    ">
 
    


    <h3 class="text-[#617869] dark:text-gray-100 font-mono font-bold">
        Contributors
    </h3>
    {#each project.projectContributors as contributor}
    <ContributorCard contributor={contributor} />
    {/each}
  
    </div>
</div>
