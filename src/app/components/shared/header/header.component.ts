import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() showNavigation : boolean = false;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(private router : Router ) { }

  ngOnInit(): void {
  }

  goTo(page : string) : void {
    this.router.navigate([page]);
  }
}
