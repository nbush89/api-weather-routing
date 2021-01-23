import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  data: any;
  constructor(
    private service: WeatherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.service.getData(queryParams.city).subscribe(data => {
        this.data = data;
      });
    });
  }
}
