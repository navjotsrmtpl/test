import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserdetailComponent,
    LoginComponent,
    DetailsComponent,
    DebouncetimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    UserlistComponent
  ]
})
export class AppModule { }
