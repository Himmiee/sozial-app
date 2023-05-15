import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { profileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:any[] = []

  constructor( private profile: profileService) { }

  faArrowAltCircleDown = faArrowAltCircleDown
  faStar = faStar


  ngOnInit(): void {
     this.profile.getPosts().subscribe((data:any[]) => this.items = data);
  }

}
