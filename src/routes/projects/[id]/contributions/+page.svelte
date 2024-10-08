<script lang="ts">
    import ProjectHeader from "../../../../customComponents/ProjectHeader.svelte";
    import type { PageData } from "./$types";
    import * as Avatar from "$lib/components/ui/avatar";
    import { BACKEND_URL } from "@/constant/base";
    import Button from "@/components/ui/button/button.svelte";


    export let data;
    const { tech, project,contributions } = data;
    console.log(contributions);
</script>

<div class="flex flex-row w-full">
    <div class="flex flex-col w-[170vh]">
        <ProjectHeader {project} active="Contributions"></ProjectHeader>
        <div
            class="flex flex-col gap-5 min-w-full bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-10 -mt-5"
            style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
"
        >
            <div class="flex flex-row gap-5  w-[150vh] h-full">
                <div
                    class="flex flex-col gap-3 h-full  w-full bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
                    style="backdrop-filter: blur( 4px ); -webkit-backdrop-filter: blur( 4px ); border-radius: 10px;"
                >
                <div class="flex flex-row gap-3">
                    <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Contributions</span>
                    <Button on:click={
                        async () => {
                            const res = await fetch(`${BACKEND_URL}/v1/project/addProjectContributors?projectID=${project.projectID}`, {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            });
                            const data = await res.json();
                            console.log(data);
                        }
                    
                    } class="ml-10 h-fit text-sm border-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-[#000000] hover:bg-[#0b818e] hover:text-white dark:bg-[#00000040] dark:hover:bg-slate-800">Fetch Contributions</Button>
    
                </div>
            

                

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Avatar
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Commit
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                    </tr>
                </thead>
        <tbody>
            {#each contributions as contribution} 
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Avatar.Root class="rounded border-2 border-white dark:border-gray-700">
                        <Avatar.Image src="{BACKEND_URL}/{contribution.contributor.avatar}" alt="@shadcn" />
                        <Avatar.Fallback class="rounded border-2">C</Avatar.Fallback>
                      </Avatar.Root>
                </th>
                <td class="px-6 py-4">
                    {contribution.contributor.name}
                </td>
                <td class="px-6 py-4">
                    {contribution.commit}
                </td>
                <td class="px-6 py-4">
                    {contribution.date}
                </td>
            </tr>
            {/each}

        
        </tbody>
    </table>
</div>

              
                </div>
                </div>    
    
    </div>
        
    </div>
</div>
