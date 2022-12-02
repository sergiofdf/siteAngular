import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() public elementCreated: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() public sendSearchTerm: EventEmitter<string> =
    new EventEmitter<string>();

  public searchTerm!: string;

  constructor() {}

  ngOnInit() {
    this.elementCreated.emit('header');
  }

  public submitSearch(): void {
    this.sendSearchTerm.emit(this.searchTerm);
  }
}
