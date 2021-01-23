import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm, FormsModule } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(
    private service: WeatherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  searchCity(form: NgForm) {
    // console.log(form);
    this.router.navigate(["results"], {
      queryParams: { city: form.value.city }
    });
    form.reset;
  }
}
