import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css']
})
export class ChartListComponent implements OnInit {

  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
      datasets: [
        {
          label: 'Lượt mượn sách',
          data: [65, 59, 80, 81, 56, 55, 40,17,20,40,45,90]
        },
      ]
    }

    this.options = {
      title: {
        display: true,
        text: 'Biểu đồ tháng thư viện',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
  }

  ngOnInit(): void {
  }

}
