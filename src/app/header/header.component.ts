import { Component, OnInit } from '@angular/core';
import { faSearch, faPlus ,faBell} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  faSearch = faSearch
  faPlus = faPlus
  faBell = faBell

  ngOnInit(): void {
  }

}
