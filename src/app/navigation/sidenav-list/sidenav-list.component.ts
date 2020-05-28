import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.closeSidenav.emit();
  }

  ngOnDestroy() {
    //this.authSubscription.unsubscribe();
  }

  onLogout() {
    //this.authService.logout();
    this.onClose();
  }
}
