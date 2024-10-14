import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    FeedbackComponent,
    CartComponent,
    WishlistComponent,
    ContactUsComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
