import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CanDeactivatedGuardService } from './services/can-deactivated-guard.service';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'products/:id',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'feedback',component:FeedbackComponent,
  canDeactivate: [CanDeactivatedGuardService]},
  {path:'cart',component:CartComponent,canActivate:[AuthGuardService]},
  {path:'wishlist',component:WishlistComponent,canActivate:[AuthGuardService]}, //visit wishlist only if authenticated
  {path:'contactUs',component:ContactUsComponent},
  {path:'aboutUs',component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
