import {superValidate} from 'sveltekit-superforms/server';
import { z } from 'zod';
import { zod } from 'sveltekit-superforms/adapters';
import { error, fail, redirect } from '@sveltejs/kit';
import {APP_URL, AUTH_URL, BACKEND_URL} from '$lib/constant/base.js'
import { URL } from 'node:url'

// const loginSchema = z.object({
//     email: z.string({
//         required_error: 'Email is required',
//     }).email({
//         message: 'Email Must be a valid Email.',
//     }),
//     password: z.string({
//         required_error: 'Password is required',
//     }).min(6, {
//         message: 'Password must be at least 6 characters long',
//     }),
// });
// const registerSchema = z.object({
//     name: z.string({
//         required_error: 'Name is required',
//     }).min(3, {
//         message: 'Name must be at least 3 characters long',
//     }),
//     email: z.string({
//         required_error: 'Email is required',
//     }).email({
//         message: 'Email Must be a valid Email.',
//     }),
//     password: z.string({
//         required_error: 'Password is required',
//     }).min(6, {
//         message: 'Password must be at least 6 characters long',
//     }),
    
// });
export const load = (async (event) => {

    throw redirect(301,APP_URL)

    // const loginForm  = await superValidate(zod(loginSchema))
    // const registerForm  = await superValidate(zod(registerSchema));
    // const redirectURL = event.url.search.split('?redirect=')[1];
    //     if(redirectURL){
    //         event.cookies.set("redirectURL",redirectURL,{
    //             path: "/auth",
    //             maxAge: 3600
    //         })
    //     }
    //     else{
    //         event.cookies.set("redirectURL",APP_URL,{
    //             path: "/auth",
    //             maxAge: 3600
    //         })
    //     }
   
    
    
    
    // return {
    //     loginForm,
    //     registerForm
    // };
});

// export const actions = {
//     login: async ({request,cookies}) => {
        
        
//         const loginForm = await superValidate(request,zod(loginSchema));
//         if(!loginForm.valid){
//             return fail(400,{
//                 loginForm
//             })
//         }


//         const res = await fetch(`${BACKEND_URL}/v1/auth/login`,{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(loginForm.data)
//         });
//         const result = await res.json();
        
//         if(!res.ok){
//             return error(res.status,result.error.message);
//         }

        
//         const redirectURL = new URL(`${cookies.get("redirectURL")}`)

//         const identityURL= `${redirectURL.origin}/identity?refreshtoken=${result.refreshToken}&redirect=${redirectURL.href}`

//         return redirect(300,identityURL);

//         // cookies.set('accesstoken',result.accessToken,{
//         //     path: '/',
//         //     maxAge: 3600 // 1 hour
//         // })
//         // cookies.set('refreshtoken',result.refreshToken,{
//         //     path: '/',
//         //     maxAge: 3600 * 24 * 30 // 1 month
//         // })
//         // cookies.set('user',JSON.stringify(result.user),{
//         //     path: '/',
//         //     maxAge: 3600 // 1 hour
//         // })

//         // return redirect(300,'/');
//     },
//     register: async (request) => {
//         const registerForm = await superValidate(request,zod(registerSchema));
        
//         if(!registerForm.valid){
//             return fail(400,{
//                 registerForm
//             })
//         }

//         return {
//             registerForm
//         }
//     }
// }