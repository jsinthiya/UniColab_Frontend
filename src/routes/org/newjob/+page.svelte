<script lang="ts">
	import ScrollArea from './../../../lib/components/ui/scroll-area/scroll-area.svelte';
    import Input from "@/components/ui/input/input.svelte";
    import ProjectHeader from "../../../customComponents/JobHeader.svelte";
    import * as Avatar from "$lib/components/ui/avatar";
    import Swal from 'sweetalert2';
    import type { PageData } from "./$types";
    import ContributorCard from "../../../customComponents/ContributorCard.svelte";
    import { onMount } from 'svelte';
    import { BACKEND_URL } from '@/constant/base';
    import { goto } from '$app/navigation';
    
    export let data;
    const { accessToken,user } = data
    let privacy = 'public';

    onMount(()=>{
        var labels = document.querySelectorAll('.btn.btn-outline.btn-outline-dashed.btn-active-light-primary');

            // Loop through each label
            labels.forEach(function(label) {
                // Add click event listener to each label
                label.addEventListener('click', function() {
                    // Remove 'active' class from all labels
                    labels.forEach(function(l) {
                        l.classList.remove('bg-gray-900');
                        l.classList.remove('text-white');
                    });
                    // Add 'active' class to the clicked label
                    this.classList.add('bg-gray-900');
                    this.classList.add('text-white');
                    
                });
            });

    });

    const upload = async()=>{
        const form = document.getElementById('form');
        // @ts-ignore
        const fd = new FormData(form);
        const req  = await fetch(`${BACKEND_URL}/v1/project/create`,{
            headers: {
                // @ts-ignore
                'Authorization': `Bearer ${accessToken}`,
            },
            method:"POST",
            body: fd
        }
        )
          // @ts-ignore
          const res = await req.json()
        if(req.status !== 200){
            Swal.fire({
                title: 'Error!',
                text: res.error.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
        else{
            goto(`/projects`)
        }
      
    }
    
    
</script>

<form id="form" method="post" on:submit|preventDefault={upload} class="w-full">
   <ScrollArea class="w-full h-full">
    <input type="text" name="owner" value="{user.userID}" class="hidden" />
    <div class="card border w-full border-gray-200 rounded-xl shadow bg-[#ffffffbe] dark:bg-[#1e293b] p-5" 
    style="backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border-radius: 12px;
    border: 1px solid rgb(81 77 77 / 19%);">
        <div class="card-header border-b border-gray-200 dark:border-gray-700 p-4">
            <div class="card-title text-2xl font-bold">
                New Project
            </div>
        </div>
        <div class="card-body p-4">
            <div class="row mb-8 flex flex-col md:flex-row items-start md:items-center">
                <div class="col-xl-3 w-full md:w-1/4 mb-4 md:mb-0">
                    <div class="text-lg font-semibold text-gray-950 dark:text-gray-50 mt-2 mb-3">
                        Project Logo
                    </div>
                </div>
                <div class="col-lg-8 w-full md:w-3/4">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="h-fit w-fit rounded" on:click={()=>{
                        document?.getElementById('file')?.click();
                    }}>
                        
                        <img id="img" src="../project_placeholder.png" alt="" class="rounded border-2 h-32 w-32 border-gray-300 dark:border-gray-700 ml-5" />
                        <input type="file" id="file" name="logo" class="hidden"  accept=".png, .jpg, .jpeg" 
                        on:change={
                            (e)=>{
                                const file = e?.target?.files[0];
                                const img = document.getElementById('img');
                                img.src = URL.createObjectURL(file);
                              
                            }
                        
                        } />
        
                      </div>
                    <div class="form-text text-sm text-gray-500 mt-2">
                        Allowed file types: png, jpg, jpeg.
                    </div>
                </div>
            </div>
            <div class="row mb-8 flex flex-col md:flex-row items-start md:items-center">
                <div class="col-xl-3 w-full md:w-1/4 mb-4 md:mb-0">
                    <div class="text-lg font-semibold text-gray-950 dark:text-gray-50 mt-2 mb-3">
                        Project Title
                    </div>
                </div>
                <div class="col-xl-9 w-full md:w-3/4">
                    <input type="text" name="title" placeholder="Project Title" class="form-control form-control-solid w-full p-2.5 border border-gray-300 dark:border-gray-700 focus:outline-gray-500 bg-[#ffffffd3] dark:bg-[#00000040] rounded-md" rows="5" />
                </div>
            </div>
            <div class="row mb-8 flex flex-col md:flex-row items-start md:items-center">
                <div class="col-xl-3 w-full md:w-1/4 mb-4 md:mb-0">
                    <div class="text-lg font-semibold text-gray-950 dark:text-gray-50 mt-2 mb-3">
                        Privacy
                    </div>
                </div>
                <div class="col-xl-9 w-full md:w-3/4">
                    <div class="row gap-9 flex flex-col md:flex-row">
                        <div class="col-md-4 col-lg-12 col-xxl-4 mb-4 md:mb-0 bg-[#ffffff] backdrop-blur-lg dark:bg-gray-800 text-gray-950 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-900 dark:text-gray-50 ">
                            <label class="btn btn-outline btn-outline-dashed btn-active-light-primary active flex items-start text-start p-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-md cursor-pointer">
                                <input class="form-check-input opacity-0" type="radio" name="privacy" bind:group={privacy} value="public" checked/>
                                <span>
                                    <span class="text-lg font-bold mb-1 block">Public</span>
                                </span>
                            </label>
                        </div>
                        <div class="col-md-4 col-lg-12 col-xxl-4 mb-4 md:mb-0 bg-[#ffffff] backdrop-blur-lg dark:bg-gray-800 text-gray-950 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-900 dark:text-gray-50 ">
                            <label class="btn btn-outline btn-outline-dashed btn-active-light-primary flex items-start text-start p-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-md cursor-pointer">
                                <input class="form-check-input opacity-0" type="radio" name="privacy" bind:group={privacy} value="private" />
                                <span>
                                    <span class="text-lg font-bold mb-1 block">Private</span>
                                </span>
                            </label>
                        </div>
                        <div class="col-md-4 col-lg-12 col-xxl-4 mb-4 md:mb-0 bg-[#ffffff] backdrop-blur-lg dark:bg-gray-800 text-gray-950 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-900 dark:text-gray-50 ">
                            <label class="btn btn-outline btn-outline-dashed btn-active-light-primary flex items-start text-start p-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-md cursor-pointer">
                                <input class="form-check-input opacity-0" type="radio" name="privacy" bind:group={privacy} value="protected" />
                                <span class="text-lg font-bold mb-1 block">Protected</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="row mb-8 flex flex-col md:flex-row items-start md:items-center">
                <div class="col-xl-3 w-full md:w-1/4 mb-4 md:mb-0">
                    <div class="text-lg font-semibold text-gray-950 dark:text-gray-50 mt-2 mb-3">
                        Description
                    </div>
                </div>
                <div class="col-xl-9 w-full md:w-3/4">
                    <textarea name="description" class="form-control form-control-solid w-full p-2.5 border border-gray-300 dark:border-gray-700 focus:outline-gray-500 bg-[#ffffff9f] dark:bg-[#00000040] rounded-md" placeholder="Long Description" rows="5"></textarea>
                </div>
            </div>
            <div class="row mb-8 flex flex-col md:flex-row items-start md:items-center">
                <div class="col-xl-3 w-full md:w-1/4 mb-4 md:mb-0">
                    <div class="text-lg font-semibold text-gray-950 dark:text-gray-50 mt-2 mb-3">
                        Github Repo Link
                    </div>
                </div>
                <div class="col-xl-9 w-full md:w-3/4">
                    <input type="text" name="gitLink" placeholder="Github Repo Link" class="form-control form-control-solid w-full p-2.5 border border-gray-300 dark:border-gray-700 focus:outline-gray-500 bg-[#ffffffd3] dark:bg-[#00000040] rounded-md" rows="5" />
                    
                </div>
            </div>
            
        </div>
        <div class="card-footer flex justify-end py-6">
            <button type="reset" class="btn btn-light btn-active-light-primary me-2 bg-white text-gray-700 border border-gray-300 dark:border-gray-700 focus:outline-gray-500 bg-[#ffffff9f] dark:bg-[#00000040] rounded-md px-4 py-2">Discard</button>
            <button type="submit" class="btn btn-primary bg-blue-600 text-white rounded-md px-4 py-2">Add Project</button>
        </div>
    </div>
   </ScrollArea>
</form>

