import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { UserLoginComponent } from 'src/app/header/login/user-login/user-login.component';
import { SignupComponent } from './header/login/signup/signup.component';
import { ProductsComponent } from 'src/app/products/products.component';
import { MobileComponent } from 'src/app/products/mobile/mobile.component';
import { FashionComponent } from 'src/app/products/fashion/fashion.component';
import { ElectronicsComponent } from 'src/app/products/electronics/electronics.component';
import { HomeFurnitureComponent } from 'src/app/products/home-furniture/home-furniture.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'new-user', component: SignupComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'mobile-store', component: MobileComponent },
  { path: 'fashion-store', component: FashionComponent },
  { path: 'electronics-store', component: ElectronicsComponent },
  { path: 'home-furniture-store', component: HomeFurnitureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
