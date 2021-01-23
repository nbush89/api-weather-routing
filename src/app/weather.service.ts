import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  apiKey: string = "21fd5ac3710ae23f3172c9ff88d289bd";
  constructor(private http: HttpClient) {}

  getData(city: string = "detroit") {
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?", {
      params: { q: city, appid: this.apiKey, units: "imperial" }
    });
  }
}
