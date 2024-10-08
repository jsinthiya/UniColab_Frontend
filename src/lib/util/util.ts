import { setCookie } from "./cookies"

export function formatBytes(bytes:number, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export async function regenerateToken(refreshToken:string) {
    try {
        const res = await fetch('http://localhost:2000/v1/auth/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${refreshToken}`
            }
        })
        const result = await res.json();
        console.log(result)
        setCookie('accesstoken',result.accessToken,1)
        setCookie('refreshtoken',result.refreshToken,30)
        setCookie('user',JSON.stringify(result.user),1)
    } catch (error) {
        throw new Error('Failed to regenerate token')
    }
   
    
    return crypto.randomUUID()
}
