import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexModule} from "@angular/flex-layout";
import {NzCardModule} from "ng-zorro-antd/card";
import { TodoComponent } from './components/todo/todo.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import { MenuComponent } from './components/menu/menu.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import { WeatherComponent } from './components/weather/weather.component';
import { TodoLsitComponent } from './components/todo-lsit/todo-lsit.component';
import { FormComponent } from './components/form/form.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzListModule} from "ng-zorro-antd/list";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzPaginationModule} from "ng-zorro-antd/pagination";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    TodoComponent,
    MenuComponent,
    WeatherComponent,
    TodoLsitComponent,
    FormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexModule,
        NzCardModule,
        NzTabsModule,
        NzAlertModule,
        NzPageHeaderModule,

        NzMenuModule,
        NzIconModule,
        NzLayoutModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        ReactiveFormsModule,
        NzListModule,
        NzTypographyModule,
        NzPaginationModule
    ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
