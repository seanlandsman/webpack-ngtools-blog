import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

// application
import {AppComponent} from "./app.component";
import {SquareComponent} from "./components/square.component";
import {CubeComponent} from "./components/cube.component";
import {QuadComponent} from "./components/quad.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        SquareComponent,
        CubeComponent,
        QuadComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
