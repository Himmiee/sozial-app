import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {profileService } from "../../Services/profile.service"

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css'],
})
export class NetworkComponent implements OnInit {
  items: any[] = [];
  faPlus = faPlus;
  loading = false;
  addButtonLabel = 'Add Friend';
  constructor(private profile: profileService) {}

  ngOnInit(): void {
    this.profile.getFriends().subscribe((data: any) => (this.items = data));
  }

  setPending(id: string): void {

    this.items.map((item: any) => {
      if (item.id === id){
      // this.addButtonLabel = 'Pending...';
     }
    })

  }
}
