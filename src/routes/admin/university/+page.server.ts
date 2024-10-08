import { BACKEND_URL } from '@/constant/base';
import type { PageServerLoad } from './$types';

export const load = (async ({cookies}) => {
    const accessToken = cookies.get('accesstoken');
const res = await fetch(`${BACKEND_URL}/v1/university/getAll`, {
    headers: {
        'Authorization': `Bearer ${accessToken}`,
    },
});
const orgs = await res.json();
    return {
        universities: orgs,
    };
}) satisfies PageServerLoad;