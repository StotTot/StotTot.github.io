import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from './services/comment.service';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Portfolio';

  name?:string
  email?:string
  subject?:string
  message?:string

  comment?:Comment

  constructor(private commentService:CommentService) { }
  


  postComment(){
    this.comment = new Comment(this.name, this.email, this.subject, this.message)
    this.commentService.addComment(this.comment).subscribe((data)=>{
      this.comment = data;
    });
    const toastBootstrap = Toast.getOrCreateInstance('#sentToast')
    toastBootstrap.show()
  }
}
