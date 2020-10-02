import { Component, OnInit} from '@angular/core';
import { TickermainService } from '../tickermain.service';

@Component({
  selector: 'app-tickermain',
  templateUrl: './tickermain.component.html',
  styleUrls: ['./tickermain.component.css']
})
export class TickermainComponent implements OnInit {

  public tickerList = [];
  public tickerId : string;
  public currentUser : string;
  constructor(private tickerMainService: TickermainService) { }

  ngOnInit(): void {
    this.tickerMainService.getTickerList()
      .subscribe(data => this.tickerList = data);
  }

  OnAction(ticker){
    console.log("onaction hit"+ ticker.tickerId);
    this.tickerId = ticker.tickerId;
    this.currentUser = ticker.currentUser;
  }
}
