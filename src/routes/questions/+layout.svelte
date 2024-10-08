<script >
    import Header from "../../customComponents/Header.svelte";
    import Sidebar from "../../customComponents/Sidebar.svelte";
    
    export let data;
    const { refreshToken } = data


    
</script>

<main
    class="flex flex-col h-screen bg-gradient-to-r from-[rgba(209,228,228,1)] from-0% via-[rgba(213,228,212,1)] via-21% via-[rgba(198,203,225,1)] via-48% via-[rgba(154,190,195,1)] via-78% to-[rgba(190,183,223,1)] to-100% dark:bg-gradient-to-r dark:from-[#1e293b] dark:via-[#203A43] dark:to-[#1e293b]"

>
    <div class="flex flex-1 overflow-hidden">
        <div class="flex p-4ml-6 mt-8 mb-6 rounded-xl">
            <!-- sidebar -->
            <Sidebar active="Questions" refreshToken={refreshToken} />
        </div>
        <div class="flex flex-1 flex-col">
            <div class="flex h-16 p-4 justify-center z-50">
                <Header />
            </div>
            <div
                class="flex flex-row h-full p-4 overflow-y-auto justify-center mt-5"
            >
                <slot></slot>
                
            </div>
            
        </div>
    </div>
</main>
