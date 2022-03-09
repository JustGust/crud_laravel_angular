import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from '../../services/bill.service';
import { ItemService } from '../../services/item.service';
import { Bill } from '../../model/bill';
import { Item } from '../../model/item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.css'],
})
export class ListBillComponent implements OnInit {
  form!: FormGroup;
  bills: Bill[] = [];
  items: Item[] = [];
  message: string = '';

  constructor(
    private _billService: BillService,
    private _itemService: ItemService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    
    this.showAllBill();

    /*--------------- validate fields ---------------*/

    this.form = new FormGroup({
      search: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  get g() {
    return this.form.controls;
  }

  showItem(id: number) {
    this._itemService.getItem(id).subscribe((dataItem: Item[]) => {
      this.items = dataItem;
      console.log(this.items);
    });
  }

  deleteBill(id: number) {
    this._billService.delete(id).subscribe((res) => {
      this.bills = this.bills.filter((item) => item.id !== id);
      this.message = 'Factura Eliminada con exito!';
    });
  }

  showBill() {
    this._billService
      .getBill(this.form.value.search)
      .subscribe((dataBill: Bill[]) => {
        this.bills = dataBill;
        console.log(this.bills);
      });
  }

  showAllBill() {
    this._billService.getAllBill().subscribe((dataItem: Bill[]) => {
      this.bills = dataItem;
    });
  }
}
