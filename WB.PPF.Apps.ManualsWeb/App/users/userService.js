"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
require('rxjs/add/operator/map');
let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
    }
    getUsers(sinceValue) {
        return this._http.get('https://api.github.com/users?per_page=10&since=' + sinceValue)
            .map(res => res.json());
    }
    getUserDetail(login) {
        return this._http.get('https://api.github.com/users/' + login)
            .map(res => res.json());
    }
    getUserRepos(login) {
        return this._http.get('https://api.github.com/users/' + login + '/repos')
            .map(res => res.json());
    }
    getUserFollowers(login, perPage, pageNumber) {
        return this._http.get('https://api.github.com/users/' + login + '/followers?per_page=' + perPage + '&page=' + pageNumber)
            .map(res => res.json());
    }
    getUserFollowing(login, perPage, pageNumber) {
        return this._http.get('https://api.github.com/users/' + login + '/following?per_page=' + perPage + '&page=' + pageNumber)
            .map(res => res.json());
    }
};
UserService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map