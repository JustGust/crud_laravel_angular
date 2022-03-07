import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillService } from '../../services/bill.service';
import { ItemService } from '../../services/item.service';
import { Seller } from '../../model/seller';
import { Buyer } from '../../model/buyer';
import { Item } from '../../model/item';

@Component({
  selector: 'app-save-bill',
  templateUrl: './save-bill.component.html',
  styleUrls: ['./save-bill.component.css'],
})
export class SaveBillComponent implements OnInit {
  form!: FormGroup;
  formItem!: FormGroup;
  message: string = '';
  idBill: number = 0;
  billItemTotal: number = 0;
  itemIva: number = 0;
  sellers: Seller[] = [];
  buyers: Buyer[] = [];
  products: Item[] = [];
  totalPay: Item[] = [];

  constructor(
    private _billService: BillService,
    private _itemService: ItemService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    /* return number between 10000 and 99999 */

    function random(min: any, max: any) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ////////////////////////////////

    this.showSellerBuyer();

    this.idBill = random(10000, 99999);

    this.showItem();

    /*--------------- validate fields ---------------*/

    this.form = new FormGroup({
      id: new FormControl(''),
      seller_id: new FormControl('', [Validators.required]),
      buyer_id: new FormControl('', [Validators.required]),
      value_before_iva: new FormControl(''),
      iva: new FormControl('',),
      total_pay: new FormControl(''),
    });

    this.formItem = new FormGroup({
      id: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'),]),
      unit_value: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'),]),
      value: new FormControl(''),
    });
  }

  ////////////////////////////////////


  get f() {
    return this.form.controls;
  }
  get g() {
    return this.formItem.controls;
  }

  /* ------ save bill -------- */

  saveBill() {
    this.form.value.id = this.idBill;
    this.form.value.total_pay = this.totalPay;
    this.form.value.iva = this.totalPay;
    this.form.value.value_before_iva = this.totalPay;
    

    this._billService.registerBill(this.form.value).subscribe({
      next: (v) => {
        this._router.navigate(['/listBill']);
        console.log('registro exitoso');
      },

      error: (e) => {
        this.message = e;
      },
    });
  }

  /* ------ save item -------- */

  saveItem() {
    this.formItem.value.id = this.idBill;
    this.billItemTotal =
      this.formItem.value.amount * this.formItem.value.unit_value;
    this.formItem.value.value = this.billItemTotal;

    this._itemService.registerItem(this.formItem.value).subscribe({
      next: (v) => {
        console.log('registro exitoso');
        this.showItem();
        this.formItem.reset();
      },

      error: (e) => {
        this.message = e;
      },
    });
  }

  /* ------ show item -------- */

  showItem() {
    this._itemService.getItem(this.idBill).subscribe((dataItem: Item[]) => {
      this.products = dataItem;
    });

    this._itemService.getTotalPay(this.idBill).subscribe((dataItem: Item[]) => {
      this.totalPay = dataItem;
  })
  }

 
  showSellerBuyer() {
    this._billService.getSeller().subscribe((dataSeller: Seller[]) => {
      this.sellers = dataSeller;
    });

    this._billService.getBuyer().subscribe((dataBuyer: Buyer[]) => {
      this.buyers = dataBuyer;
    });
  }
}
