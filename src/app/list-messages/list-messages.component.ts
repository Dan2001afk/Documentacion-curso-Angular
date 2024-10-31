import { Component } from '@angular/core';
import { MessagesService } from './../messages.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-messages',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent {

  constructor(public MessagesService: MessagesService){
    
  }
}
