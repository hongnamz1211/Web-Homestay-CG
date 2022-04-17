import { Component, OnInit } from '@angular/core';
import {ChangePassComponent} from "../../dialog/change-pass/change-pass.component";
import {MatDialog} from "@angular/material/dialog";
import {RateCommentComponent} from "../../dialog/rate-comment/rate-comment.component";
import {Homestay2Service} from "../../service/homestay/homestay2.service";
import {YourBillDto} from "../../models/your-bill-dto";
import {MyHomestayDto} from "../../models/my-homestay-dto";
import {MyBillDto} from "../../models/my-bill-dto";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  idAcc = localStorage.getItem('ACCOUNT_ID')
  myBill!: MyBillDto[];

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

  openRate() {
    this.dialog.closeAll()
    this.dialog.open(RateCommentComponent, {
      width: '50%',
    });
  }
}
