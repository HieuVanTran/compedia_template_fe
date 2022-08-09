import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-pay-manager-list',
  templateUrl: './loan-pay-manager-list.component.html',
  styleUrls: ['./loan-pay-manager-list.component.css']
})
export class LoanPayManagerListComponent implements OnInit {

  loanPayManager : loanPayManager[] = [
    {
      id: 1,
      name: "Tên sách",
      card_number: "Mã thẻ",
      borrow_date: "Ngày mượn",
      pay_date: "Ngày trả",
      note: "Ghi chú",
      status: "Còn",
      staff_id: "CD123"
    },
    {
      id: 1,
      name: "Tên sách",
      card_number: "Mã thẻ",
      borrow_date: "Ngày mượn",
      pay_date: "Ngày trả",
      note: "Ghi chú",
      status: "Còn",
      staff_id: "CD123"
    },
    {
      id: 1,
      name: "Tên sách",
      card_number: "Mã thẻ",
      borrow_date: "Ngày mượn",
      pay_date: "Ngày trả",
      note: "Ghi chú",
      status: "Còn",
      staff_id: "CD123"
    },
    {
      id: 1,
      name: "Tên sách",
      card_number: "Mã thẻ",
      borrow_date: "Ngày mượn",
      pay_date: "Ngày trả",
      note: "Ghi chú",
      status: "Còn",
      staff_id: "CD123"
    },
    {
      id: 1,
      name: "Tên sách",
      card_number: "Mã thẻ",
      borrow_date: "Ngày mượn",
      pay_date: "Ngày trả",
      note: "Ghi chú",
      status: "Còn",
      staff_id: "CD123"
    },
    {
      id: 1,
      name: "Tên sách",
      card_number: "Mã thẻ",
      borrow_date: "Ngày mượn",
      pay_date: "Ngày trả",
      note: "Ghi chú",
      status: "Còn",
      staff_id: "CD123"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface loanPayManager {
  id: number,
  name: string,
  card_number: string,
  borrow_date: string,
  pay_date: string,
  note: string,
  status: string,
  staff_id: string
}

