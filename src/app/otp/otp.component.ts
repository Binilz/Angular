import { Component } from '@angular/core';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  moveToNext(event: any, nextInput: string) {
    const input = event.target;
    const length = input.value.length;
    const maxLength = input.maxLength;

    if (length === maxLength) {
      const element = document.getElementById(nextInput) as HTMLInputElement;
      element.focus();
    }
  }
}

