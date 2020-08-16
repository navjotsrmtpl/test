import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';


const routes: Routes = [
  {path:'',redirectTo:'debouncetime',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'details',component:DetailsComponent},
  {path:'debouncetime',component:DebouncetimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
