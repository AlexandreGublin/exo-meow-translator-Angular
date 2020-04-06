import { Component } from '@angular/core';
import {Message} from '../../entities/Message';
import {LoginService} from '../../service/LoginService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  messages: Message[] = [];

  constructor(private loginService: LoginService) {
    this.messages.push({ originalMessage: 'test', translatedMessage: 'miaou'});
  }

  translateMessage(event: Message) {
    event.translatedMessage = 'miaou';
    this.messages.push(event);
  }

  disconnect() {
    this.loginService.disconnectUser();
  }
}
