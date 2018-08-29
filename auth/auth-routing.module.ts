import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { SignupComponent } from "src/app/auth/signup/signup.component";
import { SigninComponent } from "src/app/auth/signin/signin.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";


const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
exports:[RouterModule,FormsModule]

})
export class AuthRoutingModule { }
