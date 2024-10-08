import { APP_URL, AUTH_URL } from '@/constant/base';
import { redirect } from '@sveltejs/kit';

// @ts-ignore
export const handle = async ({ event, resolve }) => {
	// Stage 1
	// let refreshToken = event.cookies.get('refreshtoken')
	// console.log('refreshToken', refreshToken)
	// const redirectBack = new URL(event.request.url);
	// if(!event.url.pathname.startsWith('/identity') && !refreshToken){
	// 	throw redirect(301,`${AUTH_URL}/auth?redirect=${APP_URL}${redirectBack.pathname}`);
	// }

	// const user = event.cookies.get('user')
	// const userJSON  =  JSON.parse(user);
	// if(userJSON.role === 'admin'){
	// 	throw redirect(301,`${APP_URL}/admin`);
	// }
	const response = await resolve(event) 


	return response
}