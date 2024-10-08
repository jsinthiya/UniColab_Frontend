<script>
        import * as Avatar from "$lib/components/ui/avatar";
        import * as Dialog from "$lib/components/ui/dialog";
        import { Textarea } from "$lib/components/ui/textarea";
</script>
<div class="flex flex-row gap-5 pl-20 pr-20 mt-5 ">
    <a href="#user">
        <Avatar.Root class="w-8 rounded-full h-8 border-2 border-slate-600 dark:border-slate-50">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
    </a>

    <Textarea class="h-8 dark:bg-slate-800" on:keyup={
        (element) => {
            if (element.target.scrollHeight < 400) {
            element.target.style.height = "1px";
            element.target.style.height = (25+element.target.scrollHeight)+"px";
            }
            }
    } placeholder="Type your answer here." />
        </div>