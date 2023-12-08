import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import type  { User} from './users.types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
