<script>
    import Button from '@/components/ui/button/button.svelte';
    import { BACKEND_URL } from '@/constant/base';
    import Swal from 'sweetalert2';
    export let accessToken;
    export let org;
    async function approveOrg(){
        const res = await fetch(`${BACKEND_URL}/v1/org/approve`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+accessToken,
            },
            body: JSON.stringify({
                orgID: org.userID
            })
        });
        if(res.ok){
            Swal.fire({
                icon: 'success',
                title: 'Organization Approved',
                showConfirmButton: false,
                timer: 1500
            });
        }else
        {
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    async function approveUniversity(){
        const res = await fetch(`${BACKEND_URL}/v1/university/approve`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+accessToken,
            },
            body: JSON.stringify({
                uniID: org.userID
            })
        });
        if(res.ok){
            Swal.fire({
                icon: 'success',
                title: 'Organization Approved',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
</script>
<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {org.name}
    </th>
    <td class="px-6 py-4">
        {org.email}
    </td>
    <td class="px-6 py-4">
        {org.role}
    </td>
    <td class="px-6 py-4">
        {#if org.role === 'guestUniversity'}
            <Button on:click={approveUniversity} class="bg-green-500 text-white">Approve</Button>
        {/if}
        {#if org.role === 'guestOrg'}
            <Button on:click={approveOrg} class="bg-green-500 text-white">Approve</Button>
        {/if}
    </td>
</tr>