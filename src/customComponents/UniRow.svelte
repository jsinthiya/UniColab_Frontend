<script>
    import Button from '@/components/ui/button/button.svelte';
    import { BACKEND_URL } from '@/constant/base';
    import Swal from 'sweetalert2';
    export let accessToken;
    export let org;
</script>
<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {org.name}
    </th>
    <td class="px-6 py-4">
        {org.email}
    </td>
    <td class="px-6 py-4">
        {org.type}
    </td>
    <td class="px-6 py-4">
        {org.website}
    </td>
 
</tr>