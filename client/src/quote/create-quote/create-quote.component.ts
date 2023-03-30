import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss'],
})
export class CreateQuoteComponent implements OnInit {
  isLinear = true;
  panelOpenState = false;
  QuoteForm!: FormGroup;
  dialog: any;
  get Businesses() {
    return this.QuoteForm.get('Businesses') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.QuoteForm = this.fb.group({
      QuoteNumber: [''],
      Premium: [''],
      AgentId: [''],
      RiskState: [''],
      Prospect: this.fb.group({
        OrganizationName: [''],
        Contact: [''],
        Email: [''],
        NumberOfUnits: [''],
      }),
      PolicyTerm: this.fb.group({
        EffectiveDate: [''],
        ExpiryDate: [''],
      }),
      Businesses: this.fb.array([
        this.fb.group({
          IndustryType: [''],
          Territory: [''],
          Exposure: [''],
          Address: this.fb.group({
            FirstLine: [''],
            SecondLine: [''],
            City: [''],
            State: [''],
            ZipCode: [''],
          }),
          Coverage: this.fb.group({
            CoverageName: [''],
            DuductibleAmount: [''],
            OccuranceLimit: [''],
            AggregateLimit: [''],
          }),
        }),
      ]),
    });
  }

  addBusiness() {
    this.Businesses.push(
      this.fb.group({
        IndustryType: [''],
        Territory: [''],
        Exposure: [''],
        Address: this.fb.group({
          FirstLine: [''],
          SecondLine: [''],
          City: [''],
          State: [''],
          ZipCode: [''],
        }),
        Coverage: this.fb.group({
          CoverageName: [''],
          DuductibleAmount: [''],
          OccuranceLimit: [''],
          AggregateLimit: [''],
        }),
      })
    );
  }

  removeBusiness(i:number){
    this.Businesses.removeAt(i);
  }
  onSubmit(){
    console.log(this.QuoteForm.value);
    
    // this.dialog.open(DialogElementsExampleDialog);
  }
}
