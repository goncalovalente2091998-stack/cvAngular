import { provideServerRendering } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

export default () => 
  bootstrapApplication(App, {
    providers: [
      provideServerRendering()
    ]
  });
