import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent{
  @Output() newMessage = new EventEmitter();
  @ViewChild('messageValue', { static: true }) messageValue: ElementRef;

  constructor() { }

  sendMessage() {
    this.newMessage.emit({ originalMessage: this.messageValue.nativeElement.value, translatedMessage: null });
  }

}


