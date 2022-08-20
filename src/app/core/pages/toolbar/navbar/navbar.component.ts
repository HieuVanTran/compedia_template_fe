import { Component, OnInit } from '@angular/core';
import {Token} from "@angular/compiler";
import {TokenService} from "../../../../services/token.service";
declare function toggleMenu(): any
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }
  toggleMenu() {
    toggleMenu()
  }
  logout() {
    this.tokenService.clearKey()
  }
}
