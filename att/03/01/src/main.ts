import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//Só funciona se o componente for declarado em um módulo standalone
platformBrowserDynamic().bootstrapModule(AppModule);
