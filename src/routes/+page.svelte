<script lang="ts">
	import TopProjectCard from './../customComponents/TopProjectCard.svelte';
    import ScrollArea from "@/components/ui/scroll-area/scroll-area.svelte";
    import Header from "../customComponents/Header.svelte";
    import Sidebar from "../customComponents/Sidebar.svelte";
    import JobCard from "../customComponents/JobCard.svelte";
    import ProjectCard from '../customComponents/ProjectCard.svelte';
    import ResearchProposalCard from '../customComponents/ResearchProposalCard.svelte';
    import { BACKEND_URL } from '@/constant/base';
    import PostCardSkeleton from '../customComponents/PostCardSkeleton.svelte';
    import InfiniteLoading from 'svelte-infinite-loading';
    import { regenerateToken } from '@/util/util';
    import { get_cookie } from '@/util/cookies';
    import Button from '@/components/ui/button/button.svelte';

    export let data;
    const { refreshToken, accessToken } = data

    let page = 1;
    let projects:any = [];
    let jobs:any = [];
    let researchProposals:any = [];
    function infiniteHandler({ detail: { loaded, complete,error } }) {
		fetch(`${BACKEND_URL}/v1/dashboard/feed?limit=3&page=${page}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        )
			.then(response => response.json())
			.then(async(data) => {
                console.log(data);
                if(data.error){
                    error();
                }
        if (data.projects) {
          projects = [...projects, ...data.projects.data];
          loaded();
        }
        if (data.jobs) {
            jobs = [...jobs, ...data.jobs.data];
            loaded();
        }
        if (data.researchProposals) {
            researchProposals = [...researchProposals, ...data.researchProposals.data];
            loaded();

        }
        page += 1; 
        if(!data.projects.hasNext && !data.jobs.hasNext && !data.researchProposals.hasNext) {
            complete();
        }
      });
	}

    
</script>

<main
    class="flex flex-col h-screen bg-gradient-to-r from-[rgba(209,228,228,1)] from-0% via-[rgba(213,228,212,1)] via-21% via-[rgba(198,203,225,1)] via-48% via-[rgba(154,190,195,1)] via-78% to-[rgba(190,183,223,1)] to-100% dark:bg-gradient-to-r dark:from-[#1e293b] dark:via-[#203A43] dark:to-[#1e293b]"

>
    <div class="flex flex-1 overflow-hidden">
        <div class="flex p-4ml-6 mt-8 mb-6 rounded-xl">
            <!-- sidebar -->
            <Sidebar active="Home" refreshToken={refreshToken}/>
        </div>
        <div class="flex flex-1 flex-col">
            <div class="flex h-16 p-4 justify-center z-50">
                <Header />
            </div>
            <div
                class="flex flex-row h-full p-4 overflow-y-auto justify-center mt-5"
            >
                <ScrollArea class="flex flex-col w-full pl-5">
                    <h1 class="text-gray-600 dark:text-gray-300 font-bold font-mono text-lg">
                        Recomended For You
                    </h1>

                    {#each projects as project}
                        <ProjectCard project={project} />
                    {/each}
                    {#each jobs as job}
                        <JobCard job={job} />
                    {/each}
                    {#each researchProposals as proposal}
                        <ResearchProposalCard proposal={proposal} />
                    {/each}
                    
                    <InfiniteLoading on:infinite={infiniteHandler}>
                        <div slot="spinner">
                            <PostCardSkeleton />
                            <PostCardSkeleton />
                            <PostCardSkeleton />
                        </div>
                       
                    </InfiniteLoading>
                </ScrollArea>
                <div class="min-w-[25%]">
                    <div
                        class="flex flex-col bg-[#ffffffc8] border-[#d5dbdf] dark:bg-[#1e293b40] dark:border dark:border-solid dark:border-[#384a66b3] min-h-[48%] p-5"
                        style="backdrop-filter: blur(16px) saturate(180%);
                -webkit-backdrop-filter: blur(16px) saturate(180%);
                border-radius: 12px;
              "
                    >
                        <div class="flex flex-row gap-2">
                            <h3 class="text-[#617869] dark:text-white font-mono font-bold">
                                Upcomming Events
                            </h3>
                            <button
                                class="p-1 ml-2 font-thin text-xs font-mono dark:bg-[#586971] dark:text-white text-[#617869] hover:bg-[#c0e8ec] hover:text-[#64748b]"
                                style="backdrop-filter: blur(16px) saturate(180%);
                -webkit-backdrop-filter: blur(16px) saturate(180%);
                border-radius: 6px;
                border: 1px solid rgb(81 77 77 / 19%);"
                            >
                                View All
                            </button>
                        </div>
                        
                    </div>
                    <div class="my-4" />
                    <div
                        class="flex flex-col bg-[#ffffffc8] border-[#d5dbdf] dark:bg-[#1e293b40] dark:border dark:border-solid dark:border-[#384a66b3] border min-h-[48%] p-5 gap-3"
                        style="backdrop-filter: blur(16px) saturate(180%);

                -webkit-backdrop-filter: blur(16px) saturate(180%);
                border-radius: 12px;
              "
                    >
                        <div class="flex flex-row">
                            <h3 class="text-[#617869] dark:text-white font-mono font-bold">
                                Top Projects
                            </h3>
                            <button
                                class="p-1 ml-2 font-thin text-xs font-mono dark:bg-[#586971] dark:text-white text-[#617869] hover:bg-[#c0e8ec] hover:text-[#64748b]"
                                style="backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            border-radius: 6px;
            border: 1px solid rgb(81 77 77 / 19%);"
                            >
                                View All
                            </button>
                        </div>

                        <!-- project card with logo title and catagory -->
                        <!-- <TopProjectCard />
                        <TopProjectCard />
                        <TopProjectCard /> -->

                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
