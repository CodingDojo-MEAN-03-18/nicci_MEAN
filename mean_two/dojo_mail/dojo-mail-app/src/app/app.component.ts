import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {email: "blank@blank.com", importance: false, subject: 'unknown', content: 'unknown content'},
    {email: "maya@blank.com", importance: true, subject: 'maya', content: 'maya is awesome' },
    {email: "boys@blank.com", importance: false, subject: 'ash and ollie', content: 'little boys are awesome' },
  ]
  title = 'dojo mail';
}
// var arrayOfEmails: Array<string>;
// var subject: string = "subject string";
// var content: string = "content string";
// var importance: boolean = true;

// email_list = obj {

// }

