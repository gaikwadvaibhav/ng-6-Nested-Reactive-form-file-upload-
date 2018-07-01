import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgUploadComponent } from './img-upload/img-upload.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NestedformComponent } from './nestedform/nestedform.component';
import { ImageUploadModule } from 'angular2-image-upload';


@NgModule({
  declarations: [
    AppComponent,
    ImgUploadComponent,
    NestedFormComponent,
    NestedformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ImageUploadModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
