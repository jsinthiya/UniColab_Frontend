<script lang="ts">
	import ApproveRow from './../../../customComponents/ApproveRow.svelte';
    import Header from '../../../customComponents/Header.svelte';
    import type { PageData } from './$types';
    import AdminSidebar from '../../../customComponents/AdminSidebar.svelte';
    import UniRow from '../../../customComponents/UniRow.svelte';
    
    export let data: PageData;
    export const { universities } = data
    const { refreshToken, accessToken } = data
</script>
<main
    class="flex flex-col h-screen bg-gradient-to-r from-[rgba(209,228,228,1)] from-0% via-[rgba(213,228,212,1)] via-21% via-[rgba(198,203,225,1)] via-48% via-[rgba(154,190,195,1)] via-78% to-[rgba(190,183,223,1)] to-100% dark:bg-gradient-to-r dark:from-[#1e293b] dark:via-[#203A43] dark:to-[#1e293b]"

>
    <div class="flex flex-1 overflow-hidden">
        <div class="flex p-4ml-6 mt-8 mb-6 rounded-xl">
            <!-- sidebar -->
            <AdminSidebar active="University" refreshToken={refreshToken}/>
        </div>
        <div class="flex flex-1 flex-col">
            <div class="flex h-16 p-4 justify-center z-50">
                <Header />
            </div>
            <div
                class="flex flex-row h-full p-4 overflow-y-auto justify-center mt-5"
            >
                <div class="flex flex-col w-full">
                    <div class="flex flex-col  gap-5 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-10 -mt-5"
style="
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
">
<p>Need To approval</p>
<div>
    

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Website
                </th>
            </tr>
        </thead>
        <tbody>
            {#each universities as uni}
            <UniRow accessToken={accessToken} org={uni} />
            {/each}
        </tbody>
    </table>
</div>
</div>
              
            </div>
        </div>
    </div>
</main>
