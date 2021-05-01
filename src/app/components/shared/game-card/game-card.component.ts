import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game : any;
  @Input() showDelete : boolean = false;
  @Output() outGameDeleted: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  goToGameDetails(gameId : string) : void {
    this.router.navigate([`game-details/${gameId}`]);
  }

  deleteFromCollection(gameId : string) {
    // emit to parent component that game has been deleted so it can reload collections
    this.apiService.deleteFromCollection(gameId).subscribe(() => this.outGameDeleted.emit()
    )
  }
}
