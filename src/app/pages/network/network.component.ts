import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { profileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  items: any[] = [];
  faPlus = faPlus
  constructor(private profile: profileService) { }

  ngOnInit(): void {
    this.profile.getFriends().subscribe((data:any) => this.items = data)
  }

}
