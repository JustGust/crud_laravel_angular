import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from "../../services/bill.service";
import { ItemService } from "../../services/item.service";
import { Bill } from "../../model/bill";
import { Item } from "../../model/item";
@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.css']
})
export class ListBillComponent implements OnInit {

  bills: Bill[] =[];
  items: Item[] =[];
  message: string = '';

  constructor(private _billService: BillService, private _itemService: ItemService, private _router: Router) { }

  ngOnInit(): void {

    this._billService.getAllBill().subscribe((dataItem: Bill[]) => {
      this.bills = dataItem;
    });
  
  }

  showItem(id: number) {
    this._itemService.getItem(id).subscribe((dataItem: Item[]) => {
      this.items = dataItem;
      console.log(this.items);
    });
  }

  deleteBill(id: number){
    this._billService.delete(id).subscribe(res => {
         this.bills = this.bills.filter(item => item.id !== id);
        this.message = 'Factura Eliminada con exito!';
    })
  }

}
