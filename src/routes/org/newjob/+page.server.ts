import type { PageServerLoad } from './$types';

export const load = (async ({cookies}) => {
    const accessToken = cookies.get('accesstoken');
    const user = cookies.get('user');
    const refreshToken = cookies.get('refreshtoken');
    
    return {
        accessToken,
        user:JSON.parse(user),
        refreshToken
    };
}) satisfies PageServerLoad;