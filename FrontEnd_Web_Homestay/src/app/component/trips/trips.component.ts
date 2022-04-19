import { Component, OnInit } from '@angular/core';
import {ChangePassComponent} from "../../dialog/change-pass/change-pass.component";
import {MatDialog} from "@angular/material/dialog";
import {RateCommentComponent} from "../../dialog/rate-comment/rate-comment.component";
import {Homestay2Service} from "../../service/homestay/homestay2.service";
import {YourBillDto} from "../../models/your-bill-dto";
import {MyHomestayDto} from "../../models/my-homestay-dto";
import {MyBillDto} from "../../models/my-bill-dto";
import {ConfirmBookComponent} from "../../dialog/confirm-book/confirm-book.component";
import {Bill} from "../../models/bill";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  idAcc = localStorage.getItem('ACCOUNT_ID')
  myBill!: MyBillDto[];
  date_today! : any;

  constructor(private dialog: MatDialog,
              private homestayService: Homestay2Service) { }

  ngOnInit(): void {
    this.getBillByAccountId()
  }

  getBillByAccountId() {
    this.homestayService.getMyBillByAccountId(this.idAcc).subscribe((data) => {
      this.myBill = data;
      console.log(this.myBill);
    })
  }

  openRate(homeId: any) {
    this.dialog.closeAll()
    this.dialog.open(RateCommentComponent, {
      width: '50%',
      data : homeId
    });
  }

  openCancellingInvoiceClient(myBill:MyBillDto) {
    this.dialog.open(ConfirmBookComponent, {
      width: '50%',
      data :  myBill
    });
    // @ts-ignore
    document.getElementById("cancelling-invoice-client").hidden = false;
  }

  openCheckInBill(myBill:MyBillDto) {
    this.dialog.open(ConfirmBookComponent, {
      width: '50%',
      data :  myBill
    });
    // @ts-ignore
    document.getElementById("check-in-bill-client").hidden = false;
  }

  openCheckOutBill(myBill:MyBillDto) {
    this.dialog.open(ConfirmBookComponent, {
      width: '50%',
      data :  myBill
    });
    // @ts-ignore
    document.getElementById("check-out-bill-client").hidden = false;
  }

  onCheckToday(date :any){

    let today = new Date();

    this.date_today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    return new Date(date) < this.date_today;
  }

}
