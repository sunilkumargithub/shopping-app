import { NgModule } from "@angular/core";
import { SigninComponent } from "src/app/auth/signin/signin.component";
import { SignupComponent } from "src/app/auth/signup/signup.component";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "src/app/auth/auth-routing.module";


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent

  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]

})
export class AuthModule { }
