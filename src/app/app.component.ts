import { Component, NgModule, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

enum travel_type {
  Outbound,
  Return
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

  TravelType = travel_type

  title = 'flight-todo'

  flight: any = {
    origin : "",
    dest : "",
    date : null,
    tstart : null,
    tend: null,
    isoutbound: true,
    price: 0
  };

  id_count: number = 0;
  /*flight: {
    origin : string,
    dest : string,
    date : any,
    tstart : any,
    tend: any,
    isoutbound: boolean,
    price: number
  };*/

  data = [
    {
      flight_id: 1,
      from: "KHH",
      to: "HKG",
      datestart: new Date(),
      dateend: new Date(),
      type: travel_type.Outbound,
      price: 9600
    },
    {
      flight_id: 2,
      from: "KIX",
      to: "TPE",
      datestart: new Date("2019/03/14"),
      dateend: new Date("2019/03/14"),
      type: travel_type.Outbound,
      price: 3100
    },
    {
      flight_id: 3,
      from: "TLV",
      to: "HKG",
      datestart: new Date("2019/03/04"),
      dateend: new Date("2019/03/04"),
      type: travel_type.Return,
      price: 36600
    },
    {
      flight_id: 4,
      from: "TLV",
      to: "HKG",
      datestart: new Date("2019/03/14"),
      dateend: new Date("2019/03/14"),
      type: travel_type.Outbound,
      price: 36600
    }
  ]

  ngOnInit() {
    window.addEventListener("dragEvent",(e : any)=>{
      //field change
      console.log(e.detail.flight_id);
      console.log(e.detail.dest_type);

      this.data.map( x => {
        if(x.flight_id == e.detail.flight_id){
          x.type = (e.detail.dest_type == "return" ? travel_type.Return : travel_type.Outbound);
        }
      })

    });

    /*this.flight = {
      origin : "TLV",
      dest : "HKG",
      date : "2019/03-31",
      tstart : "09:24",
      tend: "11:24",
      isoutbound: true,
      price: 2719
    }*/
  }

  public sortByDate(): void {
    this.data.sort((a, b)=>{
        return a.datestart.getDate() - b.datestart.getDate();
    })
  }

  public filterTypeForData(type: travel_type) : any[]{
    if(type == travel_type.Outbound){
      return this.data.filter((flight)=>{
        if(flight.type == travel_type.Outbound) return flight;
      })
    }else{ //return
      return this.data.filter((flight)=>{
        if(flight.type == travel_type.Return) return flight;
      })
    }
  }

  public addNewFlight(){
    let dateStart = new Date(this.flight.date);
    dateStart.setHours(this.flight.tstart.split(":")[0]);
    dateStart.setHours(this.flight.tstart.split(":")[1]);

    let dataEnd = new Date(this.flight.date);
    dataEnd.setHours(this.flight.tend.split(":")[0]);
    dataEnd.setHours(this.flight.tend.split(":")[1]);

    if(dateStart.toLocaleString('en-US', { hour12: true, timeZoneName:'short'}).toString() == "PM" && dataEnd.toLocaleString('en-US', { hour12: true, timeZoneName:'short'}).toString() == "AM"){
      dataEnd = new Date(dataEnd.setDate(dataEnd.getDate() + 1));
    }

    let fdata = {
      flight_id: this.id_count++,
      from: this.flight.origin.toString().toUpperCase(),
      to: this.flight.dest.toString().toUpperCase(),
      datestart: dateStart,
      dateend: dataEnd,
      type: (this.flight.isoutbound ? travel_type.Outbound : travel_type.Return),
      price: this.flight.price
    }

    this.data.push(fdata);
    this.sortByDate();

    this.flight = {
      origin : "",
      dest : "",
      date : null,
      tstart : null,
      tend: null,
      isoutbound: true,
      price: 0
    };
  }

  public deleteFlight(flight_id: number){

  }

  /*deleteFlight(flight_id: number){
    //search and splice.
    this.return_sort_by_date.splice(0, 2);
  }*/
}
