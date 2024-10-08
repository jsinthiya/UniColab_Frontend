<script lang="ts">
	import {APP_URL, BACKEND_URL}  from '$lib/constant/base.js';
  import * as Avatar from "$lib/components/ui/avatar";
  import { writable } from 'svelte/store';

export const searchResults = writable([]);
   
    import {Search, BellDot, MessageSquareDot, GitCommit, ChevronUp, ChevronsUp, MessageSquareQuote, FileScan} from "lucide-svelte";

    import { Button } from "$lib/components/ui/button/index.js";
   
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    
    import * as Command from "$lib/components/ui/command";
  import { onMount } from "svelte";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
 
  import { toggleMode } from "mode-watcher";
 
  let open = false;
  let search = "";
  $: console.log(search);
  let students = [];
  async function fetchSearchResults(query) {
    if (query.length === 0) {
      searchResults.set([]);
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/v1/dashboard/search?key=${query}`);
      const data = await response.json();
      searchResults.set(data.students); // Assuming the API returns an object with a 'students' array
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }

  $: fetchSearchResults(search);
 
  onMount(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        open = !open;
      }
    }
 
    document.addEventListener("keydown", handleKeydown);
 
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
  
  </script>
<header class="sticky bg-[#cfe7eb] dark:bg-[#1e293b] top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6 shadow-2xl border-dotted	backdrop-blur-md  ml-5 mr-5 rounded-2xl"
style="backdrop-filter: blur(5px) saturate(180%);
-webkit-backdrop-filter: blur(5px) saturate(180%);

border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.125);">
    <div class="flex w-full items-center pl-20 pr-20 gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <img class="hidden dark:block" src="{APP_URL}/icon-light.svg" width="30px" alt="">
      <img class="block dark:hidden" src="{APP_URL}/icon-dark.svg" width="30px" alt="">
      <form class="ml-auto flex-1 sm:flex-initial">
        <div class="relative">
          <Command.Dialog bind:open>
            <Command.Input bind:value={search} placeholder="Type a command or search..." on:change={() => fetchSearchResults(search)} />
            <Command.List>
              <Command.Empty>No results found.</Command.Empty>
              <Command.Group heading="Suggestions">
                {#each $searchResults as student}
                  <Command.Item>{student.name}</Command.Item>
                {/each}
              </Command.Group>
            </Command.List>
          </Command.Dialog>
          <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            on:click={() => open = true}
            type="search"
            placeholder="Press ⌘ K to search..."
            class="pl-8  sm:w-[300px] md:w-[200px] lg:w-[500px] bg-transparent border-dotted border border-muted-foreground focus:outline-none"
          />
        </div>
      </form>
      <Button
            variant="secondary"
            size="icon"
            class="rounded-full bg-transparent hover:bg-white dark:hover:bg-slate-600"
          >
      <MessageSquareDot class="h-6 w-6 text-current" />

    </Button>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="secondary"
            size="icon"
            class="rounded-full bg-transparent hover:bg-white dark:hover:bg-slate-600"
          >
         
          <BellDot class="h-6 w-6 text-current" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="start">
          <DropdownMenu.Label>Notifications</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <GitCommit class="h-6 w-6 text-muted-foreground mr-1" />
            Jiyasmin Sinthiya Contribute on Medeasy
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <ChevronsUp class="h-6 w-6 text-muted-foreground mr-1" />
            Rifat Hridoy UpVote on Medeasy
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <MessageSquareQuote class="h-6 w-6 text-muted-foreground mr-1" />
            Medeasy got new review by Rifat Hridoy
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <FileScan class="h-6 w-6 text-muted-foreground mr-1" />
            Rifat Hridoy add a resource on Medeasy
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="secondary"
            size="icon"
            class="rounded-full bg-transparent hover:bg-white dark:hover:bg-slate-600"
          >
         
          <Avatar.Root class="h-8 w-8 border-2 border-current">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar.Root>
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="start">
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
          <DropdownMenu.Item>Support</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Logout</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <Button on:click={toggleMode} class="h-10 w-10 rounded-full bg-transparent hover:bg-white dark:hover:bg-slate-600" size="icon">
        <Sun
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black"
        />
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>


      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="secondary"
            class="rounded bg-yellow-500 text-gray-900 border-2 border-yellow-500 hover:text-gray-900 dark:hover:text-white"
          >
         
         Create New
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="start">
          <DropdownMenu.Item><a href="/projects/new">Project</a></DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item><a href="#">Question</a></DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item><a href="#">Research Proposal</a></DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

    


    </div>
  </header>