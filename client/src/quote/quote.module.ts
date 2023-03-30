import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { ReactiveFormsModule } from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    CreateQuoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class QuoteModule { }
