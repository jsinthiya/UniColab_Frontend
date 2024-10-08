import type { PageServerLoad } from './$types';

export const load = (async ({cookies}) => {
    const accessToken = cookies.get('accesstoken');
    const user:any = cookies.get('user');
    return {
        accessToken,
        user:JSON.parse(user)
    };
}) satisfies PageServerLoad;