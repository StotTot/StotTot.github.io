import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  addComment(comment: Comment):Observable<Comment> {

    console.log(comment)

    return this.http.request('POST', 'https://aristotle-portfolio-api-3da592118493.herokuapp.com/api/comments', 
      {
        body:comment,
        responseType:'json',
      })
 
  }
}