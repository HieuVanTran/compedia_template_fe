import {NgModule} from "@angular/core";
import {SkeletonModule} from "primeng/skeleton";
import {BookManagerSkeletonComponent} from "./book-manager-skeleton/book-manager-skeleton.component";

@NgModule({
  declarations: [
    BookManagerSkeletonComponent
  ],
  imports: [SkeletonModule],
  exports: [
    BookManagerSkeletonComponent
  ]
})

export class SkeletonCustomModule { }
