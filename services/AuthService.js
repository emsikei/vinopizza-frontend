import $api from "../http";

export default class AuthService {
    static async login(username, password) {
        return $api.post('/authorization/login', {username, password})
    }

    static async registration(username, password) {
        return $api.post('/authorization/registration', {username, password})
    }

    static async logout() {
        return $api.post('/authorization/logout')
    }
}