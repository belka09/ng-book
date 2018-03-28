import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { PaAttrDirective } from "./attr.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { PaStructureDirective } from "./paif.directive";
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaStructureDirective],
    bootstrap: [ProductComponent]
})
export class AppModule { }