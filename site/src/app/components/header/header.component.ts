import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchValue } from 'src/app/models/search-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public searchSite: EventEmitter<string> = new EventEmitter<string>();

  public resultSearch: string = '';


  public searchInput(): void{
    this.searchSite.emit(this.resultSearch);
  }

  constructor() { }

  ngOnInit() {
  }

}
