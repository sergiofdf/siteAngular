import { AddressSectionData } from './../../models/address-section-data.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() public addressData!: AddressSectionData;
  @Output() public elementCreated: EventEmitter<string>= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.elementCreated.emit('address');
  }

}
