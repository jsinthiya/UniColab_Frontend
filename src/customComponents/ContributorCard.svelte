<script>
        import { Separator } from '@/components/ui/separator';
        import * as Avatar from "$lib/components/ui/avatar";
    import { BACKEND_URL } from '@/constant/base';
        export let contributor;

</script>
<div class="flex flex-row w-full">
    <Avatar.Root class="rounded">
        <Avatar.Image src="{BACKEND_URL}/{contributor.avatar}" alt="@shadcn" />
        <Avatar.Fallback>{contributor.name.at(0)}</Avatar.Fallback>
      </Avatar.Root>
      <div class="flex flex-col ml-1">
        
            <h3 class="ml-3 text-[#0d6e6e] dark:text-white">{contributor.name}</h3>
            <span class="text-sm ml-3 text-gray-500">@{contributor.username}</span>
            
      </div>

     
</div>
<Separator class="bg-white dark:bg-[#1b2a44]"></Separator>