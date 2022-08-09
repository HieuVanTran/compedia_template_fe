import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delinquent-manager-list',
  templateUrl: './delinquent-manager-list.component.html',
  styleUrls: ['./delinquent-manager-list.component.css']
})
export class DelinquentManagerListComponent implements OnInit {

  delinquentManager : delinquentManager[] = [
    {
      id: 1,
      name: "cao hải đăng",
      fined_amount: "100.000 VND",
      proceeds: "200.000 VND",
      staff_id: "abc123"
    },
    {
      id: 1,
      name: "cao hải đăng",
      fined_amount: "100.000 VND",
      proceeds: "200.000 VND",
      staff_id: "abc123"
    },
    {
      id: 1,
      name: "cao hải đăng",
      fined_amount: "100.000 VND",
      proceeds: "200.000 VND",
      staff_id: "abc123"
    },
    {
      id: 1,
      name: "cao hải đăng",
      fined_amount: "100.000 VND",
      proceeds: "200.000 VND",
      staff_id: "abc123"
    },
    {
      id: 1,
      name: "cao hải đăng",
      fined_amount: "100.000 VND",
      proceeds: "200.000 VND",
      staff_id: "abc123"
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}

interface delinquentManager  {
  id: number,
  name: string,
  fined_amount: string,
  proceeds: string,
  staff_id: string,
}
