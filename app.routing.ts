import { Routes, RouterModule } from '@angular/router';
import { NamesComponent } from './names';
import { TestComponent } from './test';

const appRoutes: Routes = [
    { path: '', component: NamesComponent },  
    { path: 'test', component: TestComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }    
];

export const routing = RouterModule.forRoot(appRoutes);