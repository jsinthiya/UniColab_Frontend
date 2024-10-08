<script lang="ts">
	import RelatedJobCard from './../../../customComponents/RelatedJobCard.svelte';
	import ListCard from './../../../customComponents/ListCard.svelte';

import type { PageData } from './$types';
    import JobHeader from '../../../customComponents/JobHeader.svelte';

    export let data: PageData;

</script>

<div class="flex flex-row">
    <div class="flex flex-col w-[75%]">

        <JobHeader></JobHeader>
        <div class="flex flex-col  gap-5 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-10 -mt-5"
        style="
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        ">
        
       
            <div  class="flex flex-col  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
            style="
            backdrop-filter: blur( 4px );
            -webkit-backdrop-filter: blur( 4px );
            border-radius: 10px;
            ">
                <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Description</span>
                <p class="font-alkatra ml-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque iste aut delectus rerum laboriosam voluptas in! Ducimus porro dicta consectetur sequi sapiente. Libero aspernatur modi dolor. Ipsam libero magnam officiis possimus ipsa ipsum excepturi consequatur numquam iste animi aliquid soluta corrupti incidunt at aperiam dolores consectetur, fugiat quibusdam porro nisi voluptatum dolorum a eius dicta? Similique laboriosam ducimus aperiam. Vero, officiis. Nisi, dolore. Quos neque suscipit iusto libero sed animi impedit beatae asperiores dicta temporibus voluptate quibusdam unde excepturi consectetur recusandae illum itaque, dolores corporis facere sequi architecto? Esse laudantium soluta reprehenderit exercitationem, natus eos tempora, error ratione ad est minima perspiciatis reiciendis? Incidunt pariatur dolorum illo quaerat ab fugit saepe omnis veritatis! Reprehenderit quibusdam nulla minus excepturi aspernatur nisi quisquam quasi consequuntur veritatis, laboriosam eum, laudantium a quod alias, eius dolor ipsa dicta nostrum architecto fuga optio! Sunt corrupti delectus, consectetur facilis, impedit aliquam reprehenderit minus excepturi possimus cum hic aspernatur harum accusamus. Corrupti rerum inventore voluptatibus soluta perspiciatis alias id, animi sequi cupiditate, adipisci vel, minima ullam! Architecto praesentium laboriosam fuga. Minima provident delectus quia odit molestias placeat quas numquam, perferendis perspiciatis maiores totam maxime veritatis dolores sunt optio expedita! Aliquid, recusandae! Quod, veniam recusandae? Hic, veniam?
                </p>

            </div>

            <div  class="flex flex-col  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
        style="
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        ">
            <div class="flex flex-row">
                <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">
                    Key Responsibilities
                </span>

            </div>
            <div class="font-alkatra ml-3">
                <div>
                 
                        <ListCard />
                        <ListCard />
                        <ListCard />
                    

            
                </div>
                        
            </div>

        </div>
        <div  class="flex flex-col  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
        style="
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        ">
            <div class="flex flex-row">
                <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">Skills</span>

            </div>
            <div class="font-alkatra ml-3">
                <div>
                 
                    <ListCard />
                </div>
                        
            </div>

        </div>
        <div  class="flex flex-col  gap-3 h-fit  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3] p-5"
        style="
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        ">
            <div class="flex flex-row">
                <span class="text-[#0b818e] dark:text-gray-100 font-major text-lg font-bold">
                    Exprience
                </span>

            </div>
            <div class="font-alkatra ml-3">
                <div>
                 
                    <ListCard />
                    <ListCard />
                </div>
                        
            </div>

        </div>
        </div>
    </div>
    <div class="flex flex-col  gap-3 h-fit w-[25%] m-5 pt-5 pl-5 pb-5 p-2  bg-[#ffffff40] dark:bg-[#394c6c40] dark:border dark:border-solid dark:border-[#384a66b3] border border-solid border-[#ffffffb3]"
    style="
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    ">
 

    <h3 class="text-[#617869] dark:text-gray-100 font-mono font-bold">
        Related Jobs
    </h3>
    <RelatedJobCard />
  
    </div>
</div>
