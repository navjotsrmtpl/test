import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';


const routes: Routes = [
  {path:'',redirectTo:'user-list',pathMatch:'full'},
  {path:'user-list',component:UserlistComponent},
  {path:'user-detail',component:UserdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
