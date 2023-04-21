import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'User',
    profilePicture: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png',
    bio: 'In Progress....',
    email: 'user@gmail.com',
    phone: '5555555555',
    location: 'Alappuzha,Kerala'
  };
}

