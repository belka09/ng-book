import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { PaAttrDirective } from "./attr.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { PaStructureDirective } from "./paif.directive";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { paToggleView } from "./toggleView.component";
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaStructureDirective, ProductFormComponent, ProductTableComponent, paToggleView],
    bootstrap: [ProductComponent]
})
export class AppModule { }