import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../entities/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})


export class MessageComponent {
  @Input() messageValue = null;

  constructor() { }

}
