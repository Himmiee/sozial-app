import { Component, OnInit } from '@angular/core';
import { faSearch, faPlus ,faBell,faCaretDown ,faCog} from '@fortawesome/free-solid-svg-icons';



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
  faCog = faCog
  faCaretDown = faCaretDown

  ngOnInit(): void {
  }

}
