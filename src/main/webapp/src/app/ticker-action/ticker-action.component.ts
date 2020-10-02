import { Component, OnInit, Input } from '@angular/core';
import { TickermainComponent } from "src/app/tickermain/tickermain.component";

@Component({
  selector: 'app-ticker-action',
  templateUrl: './ticker-action.component.html',
  styleUrls: ['./ticker-action.component.css']
})
export class TickerActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() public parentData;

}
