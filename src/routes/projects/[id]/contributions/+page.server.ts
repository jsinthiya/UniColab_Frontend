import { BACKEND_URL } from '@/constant/base';
import type { PageServerLoad } from './$types';

export const load = (async ({cookies,params}) => {

    const accessToken = cookies.get('accesstoken');
    const res = await fetch(`${BACKEND_URL}/v1/project/contributions/${params.id}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
});
const contributions = await res.json();
console.log('res', contributions);
    return {
        contributions,
    };
}) satisfies PageServerLoad;