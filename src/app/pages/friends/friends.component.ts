import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { profileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
   
  items:any[]= []
  faArrowAltCircleDown = faArrowAltCircleDown
  constructor(private profile: profileService) { }

  ngOnInit(): void {

    this.profile.getFriends().subscribe((data:any) => this.items = data)
  }

}
