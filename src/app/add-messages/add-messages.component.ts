import { MessagesService } from './../messages.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-messages',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-messages.component.html',
  styleUrl: './add-messages.component.css'
})
export class AddMessagesComponent {

  constructor(public MessagesService: MessagesService){
    
  }
  message: string =""

  addMessage(){
    this.MessagesService.add(this.message);
    this.message = "";
  }
}
