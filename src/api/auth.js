import request from '@/api/interceptor';

export async function openAuth() {
    return await request.get('/open/auth')
}

export async function openAuthPlatformList() {
    return await request.get('/oauth/openAuthPlatformList')
}

export async function renderAuthLink(source) {
    return await request.get('/oauth/render/' + source)
}

export async function getOauthUsers() {
    return await request.get('/oauth/users')
}

export async function bindSocialUser(data) {
    return await request.post('/oauth/bind', data)
}
