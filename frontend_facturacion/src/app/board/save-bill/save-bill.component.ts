import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { BillService } from "../../services/bill.service";
import { ItemService } from "../../services/item.service";
import { Seller } from "../../model/seller";
import { Buyer } from "../../model/buyer";


@Component({
  selector: 'app-save-bill',
  templateUrl: './save-bill.component.html',
  styleUrls: ['./save-bill.component.css']
})
export class SaveBillComponent implements OnInit {

  form!: FormGroup;
  formItem!: FormGroup;
  message: string = '';
  idBill: number = 0;
  itemValueTotal: number = 0;
  sellers: Seller[] = [];
  buyers: Buyer[] = [];

  constructor(private _billService: BillService, 
    private _itemService: ItemService, private _router: Router) { }

  ngOnInit(): void {

     /* load all sellers and buyers */

    this._billService.getSeller().subscribe((dataSeller: Seller[])=>{
      this.sellers = dataSeller;
    })

    this._billService.getBuyer().subscribe((dataBuyer: Buyer[])=>{
      this.buyers = dataBuyer;
    })


    /* return number between 10000 and 99999 */

    function random(min: any, max: any) {
      return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  /////////////////////////////

    this.idBill = random(10000, 99999);

    /*--------------- validate fields ---------------*/

    this.form = new FormGroup({
      id: new FormControl(''),
      seller_id: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      buyer_id: new FormControl('', [Validators.required]),
      value_before_iva: new FormControl('', [Validators.required]),
      iva: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      total_pay: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    });

    this.formItem = new FormGroup({
      id: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      unit_value: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      value: new FormControl(''),
    });
  
  }

  get f(){
    return this.form.controls;
  }
  get g(){
    return this.formItem.controls;
  }

  saveBill(){
    this.form.value.id = this.idBill;

    this._billService.registerBill(this.form.value).subscribe({
      next: (v) => {
        this._router.navigate(['/listBill']);
        console.log('registro exitoso');
      },
      
      error: (e) => {
        this.message = e
      }
    })
  }

  saveItem(){
  this.formItem.value.id = this.idBill;
  this.formItem.value.value = this.formItem.value.amount * this.formItem.value.unit_value;
 
   this._itemService.registerItem(this.formItem.value).subscribe({
    next: (v) => {
      console.log('registro exitoso');
    },
    
    error: (e) => {
      this.message = e
    }
  }) 
  
  }


}
