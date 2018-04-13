import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { PaAttrDirective } from "./attr.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { PaStructureDirective } from "./paif.directive";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { paToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { SimpleDataSource } from "./datasource.model";
import { Model } from "./repository.model";
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaStructureDirective, ProductFormComponent, ProductTableComponent, paToggleView, PaAddTaxPipe, PaCategoryFilterPipe,PaDiscountDisplayComponent, PaDiscountEditorComponent, PaDiscountPipe, PaDiscountAmountDirective],
    // providers: [{provide: LOCALE_ID, useValue: "fr-FR"}],
    providers: [DiscountService, SimpleDataSource, Model],
    bootstrap: [ProductComponent]
})
export class AppModule { }