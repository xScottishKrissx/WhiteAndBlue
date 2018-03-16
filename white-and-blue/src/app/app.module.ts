import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { FixedImageComponent } from './fixed-image/fixed-image.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondLayerComponent } from './second-layer/second-layer.component';
import { TextAreasComponent } from './text-areas/text-areas.component';
import { SliderComponent } from './slider/slider.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FakeLogosComponent } from './fake-logos/fake-logos.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    FixedImageComponent,
    NavbarComponent,
    SecondLayerComponent,
    TextAreasComponent,
    SliderComponent,
    GalleryComponent,
    FakeLogosComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { 
}
