import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { APP_URL, AUTH_URL } from '@/constant/base';

export const load = (async ({cookies,request}) => {    
    cookies.set('accesstoken',"",{
        path: '/',
        maxAge: -1
    })
    cookies.set('refreshtoken',"",{
        path: '/',
        maxAge: -1
    })
    cookies.set('user',"",{
        path: '/',
        maxAge: -1
    })
    throw redirect(301,`${AUTH_URL}/auth/logout?redirect=${APP_URL}`);
}) satisfies PageServerLoad;