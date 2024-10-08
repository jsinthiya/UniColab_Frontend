<script>
    import { goto } from "$app/navigation";
    import ScrollArea from "@/components/ui/scroll-area/scroll-area.svelte";
    import { APP_URL, AUTH_URL, BACKEND_URL } from "@/constant/base";
    import { delete_cookie } from "@/util/cookies";
    import { redirect } from "@sveltejs/kit";
    import { Toaster } from "svelte-sonner";
    import { toast } from "svelte-sonner";
    export let active;
    export let refreshToken;
      
    
</script>
<Toaster position="bottom-right" richColors />
<div
class="relative bg-[#d3dbe1] dark:bg-[#1e293b]  flex flex-col bg-clip-border ml-6 bottom-5 rounded-xl backdrop-blur-md text-current h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-sidebar"
style="backdrop-filter: blur(16px) saturate(180%);
-webkit-backdrop-filter: blur(16px) saturate(180%);
border-radius: 12px;
border: 1px solid rgb(81 77 77 / 19%);"
>
<div class="mb-2 p-4">
    <img class="block dark:hidden" src="{APP_URL}/logo-dark.png" width="100px" alt="" />
    <img class="hidden dark:block" src="{APP_URL}/logo-light.png" width="100px" alt="" />
</div>
<nav
    class="flex flex-col gap-1 min-w-[240px] font-sans text-base font-normal text-gray-700 mb-2"
>
    <a
        href="/org"
        role="button"
        tabindex="0"
        class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all text-[#0b818e] hover:bg-[#0b818e] hover:text-white outline-none dark:hover:bg-slate-100 dark:hover:text-[#1e293b] {active=="Home"?"bg-[#0b818e] text-white dark:bg-slate-100 dark:text-black":"dark:text-white"} "
    >
        <div class="grid place-items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        Home
    </a>

    <a href="/projects"
        role="button"
        tabindex="0"
        class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all text-[#0b818e] hover:bg-[#0b818e] hover:text-white outline-none dark:hover:bg-slate-100 dark:hover:text-[#1e293b] {active=="Projects"?"bg-[#0b818e] text-white dark:bg-slate-100 dark:text-black":"dark:text-white"} "    >
        <div class="grid place-items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-git-2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M18 19c-2.8 0-5-2.2-5-5v8"/><circle cx="20" cy="19" r="2"/></svg>
        </div>
        Projects
    </a>
    <div
        role="button"
        tabindex="0"
        class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all text-[#0b818e] hover:bg-[#0b818e] hover:text-white outline-none dark:hover:bg-slate-100 dark:hover:text-[#1e293b] {active=="Research"?"bg-[#0b818e] text-white dark:bg-slate-100 dark:text-black":"dark:text-white"} "    >
        <div class="grid place-items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>
        </div>
        Research
        <div
            class="grid place-items-center ml-auto justify-self-end"
        >
          
        </div>
    </div>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a href={APP_URL + "/auth/logout"}
    role="button"
    tabindex="0"
    class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all text-[#0b818e] hover:bg-[#0b818e] hover:text-white outline-none dark:text-white dark:hover:bg-slate-100 dark:hover:text-[#1e293b]"
    data-sveltekit-preload-data="tap"
    >
        <div class="grid place-items-center mr-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5"
            >
                <path
                    fill-rule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </div>
    Log Out
    </a>
    
  
</nav>


<!-- <div class="felx flex-row min-h-[30%]  p-5"
style="backdrop-filter: blur(16px) saturate(180%);
-webkit-backdrop-filter: blur(16px) saturate(180%);
border-radius: 12px;
border: 1px solid rgb(81 77 77 / 19%);">
     
<div class="flex flex-col gap-2">
    <h3 class="text-[#617869] font-mono font-bold text-sm">
        Workspaces
    </h3>
    <div class="flex flex-col gap-2">
        <div class="flex flex-row font-mono text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gantt-chart"><path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/></svg>
            <span class="ml-2">Workspace 1</span>
        </div>
        <div class="flex flex-row font-mono text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gantt-chart"><path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/></svg>
            <span class="ml-2">Workspace 2</span>
        </div>
        <div class="flex flex-row font-mono text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gantt-chart"><path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/></svg>
            <span class="ml-2">Workspace 3</span>
        </div>
        <div class="flex flex-row font-mono text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gantt-chart"><path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/></svg>
            <span class="ml-2">Workspace 4</span>
        </div>
         
    </div>

</div>
</div> -->
</div>