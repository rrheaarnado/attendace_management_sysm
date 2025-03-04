import { NbThemeModule } from '@nebular/theme';

@NgModule({
    imports: [
        NbThemeModule.forRoot({ name: 'light' }) // Default theme
    ],
})
export class AppModule { }
