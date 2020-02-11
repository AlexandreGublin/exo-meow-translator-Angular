import { Component, OnChanges } from '@angular/core';
import { Message } from '../entities/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'exo-meow-translator2';
  messages: Message[] = [];

  constructor() {
    this.messages.push({ originalMessage: 'test', translatedMessage: 'miaou'});
  }

  translateMessage(event: Message) {
      event.translatedMessage = 'miaou';
      this.messages.push(event);
  }
}
