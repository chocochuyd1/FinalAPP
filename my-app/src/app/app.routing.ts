import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingComponent } from "./components/landing/app.landing.component";
import { DetailsComponent } from "./components/details/app.details.component";
import { LoginComponent } from "./components/login/app.login.component";
import { HomeComponent } from "./components/home/app.home.component";
import { bookListComponent } from "./components/booklist/app.booklist.component";
import { RegBookComponent } from "./components/regBook/app.regBook.component";

const appRoutes: Routes = [
  { path: "", component: LandingComponent },
  { path: "home", component: HomeComponent },
  { path: "details", component: DetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "list", component: bookListComponent },
  { path: "regbook", component: RegBookComponent },
  { path: "**", component: LandingComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
