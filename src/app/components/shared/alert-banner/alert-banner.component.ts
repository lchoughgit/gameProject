import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-banner',
  templateUrl: './alert-banner.component.html',
  styleUrls: ['./alert-banner.component.scss']
})
export class AlertBannerComponent implements OnInit {

  @Input() alertMessage = '';
  @Input() alertClass : string = 'info';

  constructor() { }

  ngOnInit() { }

  hide (){
    this.alertMessage = '';
  }
}