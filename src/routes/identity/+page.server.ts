import { goto } from '$app/navigation';
import { APP_URL, AUTH_URL, BACKEND_URL } from '@/constant/base.js';
import { redirect } from '@sveltejs/kit';

export const load = (async ({url,cookies}) => {
    const refreshToken = url.searchParams.get('refreshtoken');
    if (!refreshToken) {
        return redirect(301,`${AUTH_URL}/auth`);
    } 
    const res = await fetch(`${BACKEND_URL}/v1/auth/identity`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${refreshToken}`
        }
    });
    const result = await res.json();
    let u:Array<String> = [];
    url.searchParams.forEach((v,k,p)=>{
        if(k!='refreshtoken')
            {
                // u+=k
                // u+="&"
                // u+=v;
                u.push(`${k}=${v}`);
                
            }
    })




    cookies.set('accesstoken',result.accessToken,{
            path: '/',
            maxAge: 3600*24 // 1 day
        })
        cookies.set('refreshtoken',result.refreshToken,{
            path: '/',
            maxAge: 3600 * 24 * 30 // 1 month
        })
        cookies.set('user',JSON.stringify(result.user),{
            path: '/',
            maxAge: 3600*24 // 1 day
        })
    
    const redirectURL = u.join("&").split('redirect=')[1]
    throw redirect(301,redirectURL);
})