<script>
	import { CircleDot, MessageSquareDot } from 'lucide-svelte';
    
    import * as HoverCard from "$lib/components/ui/hover-card";


  import * as Avatar from "$lib/components/ui/avatar";
    import Separator from '@/components/ui/separator/separator.svelte';
    import { BACKEND_URL } from '@/constant/base';
    export let feature;

</script>
<div class="flex flex-row items-center mb-3 mt-3">
  <CircleDot class="h-4 w-4 mr-2 text-[#0b818e]" />
    <h3 class="f font-alkatra w-[25%]">{feature.featureName}</h3>

  
    <h6 class="f font-alkatra ml-5 w-[50%]">{feature.featureDescription}</h6>

    <div class="w-[25%] flex flex-row justify-end">
      {#each feature.featureContributors as user}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <a href="/{user.username}">
            <Avatar.Root class="-ml-4 border-2">
                <Avatar.Image src="{BACKEND_URL}/{user.avatar}" alt="@shadcn" />
                <Avatar.Fallback>{user.name.at(0)}</Avatar.Fallback>
              </Avatar.Root>
            </a>
        </HoverCard.Trigger>
        <HoverCard.Content align="start">
          <div class="flex col p-2">
            <div class="flex flex-row">
              
                <Avatar.Root class="-ml-4 border-2">
                    <Avatar.Image src="{BACKEND_URL}/{user.avatar}" alt="@shadcn" />
                    <Avatar.Fallback>{user.name.at(0)}</Avatar.Fallback>
                  </Avatar.Root>
              
                  <div class="flex flex-col ml-2">
                    <p >{user.name}</p>
                    <p class="text-xs">@{user.username}</p>
                    <!-- button with border -->
                    <a href="/{user.username}" class="border rounded-md p-1 mt-1 w-fit text-xs"
                    >View Profile</a>
                  </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
        {/each}
    </div>
   

</div>
<Separator/>