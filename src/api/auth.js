import request from '@/api/interceptor';

export async function openAuth() {
    return await request.get('/open/auth')
}

export async function openAuthPlatformList() {
    return await request.get('/oauth/openAuthPlatformList')
}
