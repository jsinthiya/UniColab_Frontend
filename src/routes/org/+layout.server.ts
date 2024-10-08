import { BACKEND_URL } from '@/constant/base';
import type { LayoutServerLoad } from './$types';

export const load = (async ({cookies}) => {
    const accessToken = cookies.get('accesstoken');
    const refreshToken = cookies.get('refreshtoken');
    const user = cookies.get('user');
    const res = await fetch(`${BACKEND_URL}/v1/org/getAllApplications`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });
    const orgs = await res.json();
    console.log('res', orgs);
    return {
        orgs,
        accessToken,
        refreshToken,
    };
}) satisfies LayoutServerLoad;