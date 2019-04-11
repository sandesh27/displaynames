import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';

// used to get languages
import { LanguageService } from './services/language.service';


import { AppComponent }  from './app.component';
import { NamesComponent } from './names';
import { routing }        from './app.routing';
import { TestComponent } from './test';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        NamesComponent,
        TestComponent
    ],
    providers: [
        // this is used to get language translated words from LanguageService
        LanguageService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }