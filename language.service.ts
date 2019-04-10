import { Injectable } from '@angular/core';

import { Language } from '@/models';

const LANGAUGE: Language = {
    en: 'Hello',
    fr: 'Bonjour',
    it: 'Ciao',
    sp: 'Hola',
    gr: 'Hallo'
};

@Injectable({ providedIn: 'root' })
export class LanguageService {

    constructor() { }

    get() {
        return new Promise(resolve => resolve(LANGAUGE));
    }
}