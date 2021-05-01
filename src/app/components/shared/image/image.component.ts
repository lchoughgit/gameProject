import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() imageUrl? : string = 'https://via.placeholder.com/150x210.png?text=This%20Game%20is%20Cool';
  @Input() bigOrSmall : string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.imageUrl ? this.imageUrl : 'https://via.placeholder.com/150x210.png?text=This%20Game%20is%20Cool';
  }

}
