import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"]
})
export class DateComponent implements OnInit {
  message: string = " Welcome to Australian Government Website";
  ourDate: string;
  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.ourDate = `${currentDate.toDateString()} ${currentDate.toLocaleTimeString()} `;
    }, 100);
  }

  ngOnInit() {}
}
