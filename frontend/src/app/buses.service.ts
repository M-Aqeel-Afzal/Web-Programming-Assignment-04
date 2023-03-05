import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BusesService {

  constructor(
    private http:HttpClient
  ) { }

  //get all buses
  getAllbuses():Observable<any>{
    return this.http.get("http://localhost:4000/vehicle/display-by-rt/20");
  }
}
