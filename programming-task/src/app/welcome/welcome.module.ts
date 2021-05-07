import { NgModule } from '@angular/core';
import { WelcomeRouterModule } from './welcome-router.module';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [WelcomeRouterModule],
})
export class WelcomeModule { }
