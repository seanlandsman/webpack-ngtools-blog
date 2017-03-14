import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

// application
import {AppComponent} from "./app.component";
import {SquareComponent} from "./components/square.component";
import {CubeComponent} from "./components/cube.component";
import {QuadComponent} from "./components/quad.component";
import {Simple1Component} from "./components/simple-1.component";
import {Simple2Component} from "./components/simple-2.component";
import {Simple3Component} from "./components/simple-3.component";
import {Simple4Component} from "./components/simple-4.component";
import {Simple5Component} from "./components/simple-5.component";
import {Simple6Component} from "./components/simple-6.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        SquareComponent,
        CubeComponent,
        QuadComponent,
        Simple1Component,
        Simple2Component,
        Simple3Component,
        Simple4Component,
        Simple5Component,
        Simple6Component
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
