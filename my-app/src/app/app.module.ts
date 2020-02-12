import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/app.navbar.component";
import { FooterComponent } from "./components/footer/app.footer.component";
import { LandingComponent } from "./components/landing/app.landing.component";
import { DetailsComponent } from "./components/details/app.details.component";
import { LoginComponent } from "./components/login/app.login.component";
import { routing, appRoutingProviders } from "./app.routing";
import { HomeComponent } from "./components/home/app.home.component";
import { RegBookComponent } from "./components/regBook/app.regBook.component";
import { bookListComponent } from "./components/booklist/app.booklist.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    bookListComponent,
    RegBookComponent,
    LandingComponent,
    DetailsComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, routing, NgbModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
