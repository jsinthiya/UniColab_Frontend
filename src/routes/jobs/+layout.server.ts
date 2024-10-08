import { redirect } from '@sveltejs/kit';
import { APP_URL, AUTH_URL } from '@/constant/base';

export const load = (async ({request,cookies}) => {
    
    const refreshToken = cookies.get('refreshtoken');
    if(!refreshToken)
        throw redirect(301,`${AUTH_URL}/auth?redirect=${APP_URL}${new URL(request.url).pathname}`);
    return {
        refreshToken
    };
}) 