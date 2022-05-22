import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideComponentComponent } from './side-component/side-component.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    SideComponentComponent,
    BannerHomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports : [
    SideComponentComponent,
    BannerHomeComponent,
    BannerComponent
  ]
})
export class ComponentsModule { }
