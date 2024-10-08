import type { PageServerLoad } from './$types';

export const load = (async () => {
    // const framework = await fetch('http://localhost:2000/uploads/framework.json')
    // const frameworkJSON = await framework.json();
    // const lang = await fetch('http://localhost:2000/uploads/lang.json')
    // const langJSON = await lang.json();
    // return {
    //     frameworkJSON,
    //     langJSON
    // };
}) satisfies PageServerLoad;