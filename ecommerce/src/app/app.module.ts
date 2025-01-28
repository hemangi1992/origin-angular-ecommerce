//Angular core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/login/signup/signup.component';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { UserLoginComponent } from './header/login/user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/header/login/login.service';
import { ProductsComponent } from './products/products.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { FashionComponent } from './products/fashion/fashion.component';
import { ElectronicsComponent } from './products/electronics/electronics.component';
import { HomeFurnitureComponent } from './products/home-furniture/home-furniture.component';
import { FiltersComponent } from './filters/filters.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserLoginComponent,
    SignupComponent,
    ProductsComponent,
    MobileComponent,
    FashionComponent,
    ElectronicsComponent,
    HomeFurnitureComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
