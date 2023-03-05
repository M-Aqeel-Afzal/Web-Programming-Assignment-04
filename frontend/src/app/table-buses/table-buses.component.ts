import { Component, OnInit } from '@angular/core';
import { BusesService } from "../buses.service"

@Component({
  selector: 'app-table-buses',
  templateUrl: './table-buses.component.html',
  styleUrls: ['./table-buses.component.css']
})
export class TableBusesComponent implements OnInit {
  value = "";
  busData: Array<any> = [];
  constructor(private busService: BusesService) {  }
  
  search(value: string) {
    console.log(value);
    this.busService.getAllbuses().subscribe(
      (response) => {
        console.log(response)
        if (response[0].rt == value){
          this.busData = response;
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
