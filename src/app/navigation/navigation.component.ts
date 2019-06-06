import { Component, OnInit } from '@angular/core';
import { NgbCollapse, NgbTabset} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navbarOpen = false;
  public isCollapsed = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}
