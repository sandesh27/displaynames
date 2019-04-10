import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Language } from "../models";
import { LanguageService } from "../services";

@Component({
    selector: 'app-names',
    templateUrl: 'names.component.html'
})

export class NamesComponent implements OnInit {
    namesForm: FormGroup;
    submitted = false;
    isShowMessage = false;
    message = '';
    langauge: Language;

    constructor(
        private formBuilder: FormBuilder,
        private languageService: LanguageService
    ) { 

    }

    ngOnInit() {
        this.namesForm = this.formBuilder.group({
            name: ['', Validators.required],
            language: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.namesForm.controls; }

    onSubmit() {
        this.submitted = true;        

        // stop here if form is invalid
        if (this.namesForm.invalid) {
            return;
        }

        this.getLanguage();
        this.isShowMessage = true;
        this.message = (this.langauge && this.f.name.value) ? `${this.langauge[this.f.language.value]} ${this.f.name.value}` : '';
    }

    getLanguage() {
        return this.languageService.get().then( (language: Language) => {
            this.langauge = language;
        });
    }    

}