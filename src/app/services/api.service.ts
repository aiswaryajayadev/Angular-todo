import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoResponse } from '../models/TodoResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
   }

   getData()
   {
    
return this.http.get<TodoResponse>('https://dummyjson.com/todos');


   }
}
