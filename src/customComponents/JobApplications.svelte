<script>
    import Button from '@/components/ui/button/button.svelte';
    import { BACKEND_URL } from '@/constant/base';
    import Swal from 'sweetalert2';
    import * as Avatar from "$lib/components/ui/avatar";

    export let accessToken;
    export let org;
    console.log(org)
</script>
<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <Avatar.Root class="rounded border-2 border-white dark:border-gray-700">
            <Avatar.Image src={BACKEND_URL}/{org.avatar} alt="@shadcn" />
               <Avatar.Fallback class="rounded border-2">{org.student_name.at(0)}</Avatar.Fallback>
             </Avatar.Root>
    </th>
    <td class="px-6 py-4">
        {org.student_name}
    </td>
    <td class="px-6 py-4">
        {org.job_name}
    </td>
    <td class="px-6 py-4">
        {org.appStatus}
    </td>
    <td class="px-6 py-4">
        <Button on:click={
            async ()=>{
                const response = await fetch(`${BACKEND_URL}/v1/org/approveApplication/${org.appID}?status=Accepted`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                    
                });
                if(response.status === 200){
                    Swal.fire({
                        title: 'Approved',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }

        } class="bg-green-500 hover:bg-green-700">Approve</Button>
    </td>
    <td class="px-6 py-4">
        <Button on:click={
            async ()=>{
                const response = await fetch(`${BACKEND_URL}/v1/org/approveApplication/${org.appID}?status=Rejected`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                    
                });
                if(response.status === 200){
                    Swal.fire({
                        title: 'Rejected',
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }

        } class="bg-red-500 hover:bg-red-700">Reject</Button>
    </td>
 
</tr>