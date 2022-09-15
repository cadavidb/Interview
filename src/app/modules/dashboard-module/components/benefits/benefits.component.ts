import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css'],
})
export class BenefitsComponent implements OnInit {
  acceptedTerms: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  changeTerms(value: any) {
    const terms = value.target.checked;
    this.acceptedTerms = terms;
  }
}
