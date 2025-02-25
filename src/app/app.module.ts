import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';  // Import your routing module

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule], 
  providers: [],
  bootstrap: []
})
export class AppModule { }