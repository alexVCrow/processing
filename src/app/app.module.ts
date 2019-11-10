import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import {AppRoutingModule} from './app-routing.module';
import { EnvComponent } from './component/main/env/env.component';
import { CursorDirective } from './directive/cursor.directive';
import { RepoComponent } from './component/main/repo/repo.component';
import { DataComponent } from './component/main/data/data.component';
import { MachineComponent } from './component/main/machine/machine.component';
import { RunsComponent } from './component/main/runs/runs.component';
import { BaseComponent } from './component/main/shared/base/base.component';
import { DestroyComponent } from './component/main/shared/destroy/destroy.component';
import {NgxUiLoaderConfig, NgxUiLoaderModule} from 'ngx-ui-loader';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorInterceptor} from './interceptor/error';
import {LoaderInterceptor} from './interceptor/loading';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#9f78ff",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 9,
  "fgsColor": "#9f78ff",
  "fgsPosition": "center-center",
  "fgsSize": 100,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(243,243,243,0.8)",
  "pbColor": "#9f78ff",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "textPosition": "center-center"
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EnvComponent,
    CursorDirective,
    RepoComponent,
    DataComponent,
    MachineComponent,
    RunsComponent,
    BaseComponent,
    DestroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
