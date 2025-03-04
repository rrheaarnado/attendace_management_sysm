import { NbThemeModule } from '@nebular/theme';

@NgModule({
    imports: [
        NbThemeModule.forRoot({ name: 'default' }) // Default theme
    ],
})
export class AppModule { }
