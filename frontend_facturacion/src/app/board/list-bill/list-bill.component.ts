import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from "../../services/bill.service";
import { Bill } from "../../model/bill";

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.css']
})
export class ListBillComponent implements OnInit {

  bills: Bill[] =[];
  message: string = '';

  constructor(private _billService: BillService, private _router: Router) { }

  ngOnInit(): void {

    this._billService.getAllBill().subscribe((dataItem: Bill[]) => {
      this.bills = dataItem;
    });
  }

  deleteBill(id: number){
    this._billService.delete(id).subscribe(res => {
         this.bills = this.bills.filter(item => item.id !== id);
        this.message = 'Factura Eliminada con exito!';
    })
  }

}
