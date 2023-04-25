import { Component, OnInit } from '@angular/core';
import { navData } from '../Models/navdata';
import {faSignInAlt } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor() { }

  faSignInAlt = faSignInAlt

  navData = navData

}
