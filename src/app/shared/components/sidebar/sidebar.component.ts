import { Component, EventEmitter, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "sidebar.component.html",
  styles: [],
})

export class SidebarComponent implements OnInit {
  searchFilter: string = "";
  @Input() searched: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearch(value: string) {
    this.searched.next(value);
  }
}
