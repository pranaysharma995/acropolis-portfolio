import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ImageService } from './image-detail/shared/image.service';
import { ImageFilterPipe } from './image-detail/shared/filter.pipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { FooterComponent } from './footer/footer.component';
import { FilterdataPipe } from './filterdata.pipe';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GallaryComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    HeroBannerComponent,
    FooterComponent,
    FilterdataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
