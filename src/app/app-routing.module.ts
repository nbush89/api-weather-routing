import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "results", component: ResultsComponent },
  { path: "search", component: SearchComponent },
  { path: "**", component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
