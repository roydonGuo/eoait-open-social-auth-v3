import request from './request';

export const openAuth = () => {
    return request.get('/open/auth')
}

export const openAuthPlatformList = () => {
    return request.get('/oauth/openAuthPlatformList')
}
