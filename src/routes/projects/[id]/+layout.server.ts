import { BACKEND_URL } from '@/constant/base';

export const load = (async ({params,cookies}) => {
    const res = await fetch(`${BACKEND_URL}/uploads/tech.json`);
    const tech = await res.json();

    const accessToken = cookies.get('accesstoken');
    const project =  await fetch(`${BACKEND_URL}/v1/project/get/${params.id}`,{
        headers:{
            'Authorization':`Bearer ${accessToken}`
        }
    });
    const data = await project.json();
    return {
        tech,
        project:data
    };
}) 