import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FileDropModule } from "ngx-file-drop";
import { ClipboardModule } from "ngx-clipboard";
import { LogoBackgroundComponent } from "./components/logo-background/logo-background.component";

@NgModule({
  declarations: [LogoBackgroundComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    FileDropModule,
    LogoBackgroundComponent,
  ],
})
export class SharedModule {}
