import { Component } from '@angular/core';
import { Language } from "../models";
import { LanguageService } from "../services";
@Component({
    selector: 'app-names',
    templateUrl: 'names.component.html'
})

export class NamesComponent {
    isShowMessage = false;
    message: String[];
    language: String;
    langaugeCode: Language;
    names: String;

    constructor(
        private languageService: LanguageService
    ) { 

    }

    getLanguage() {
        return this.languageService.get().then( (language: Language) => {
            this.langaugeCode = language;
        });
    }
    
    setMessage() {
        const names: String = this.names;
        if(names) {
            const namesArray = names.split(' ');
            let messageArray: String[] = [];
            this.getLanguage();
            if(this.langaugeCode) {
                namesArray.forEach(name => {
                    messageArray.push(`${this.langaugeCode['' + this.language]} ${name}`);
                });
                this.message = messageArray;
            }
        } else {
            this.message = [];
        }
    }
}