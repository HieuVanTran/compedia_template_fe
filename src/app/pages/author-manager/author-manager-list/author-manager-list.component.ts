import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-manager-list',
  templateUrl: './author-manager-list.component.html',
  styleUrls: ['./author-manager-list.component.css']
})
export class AuthorManagerListComponent implements OnInit {

  authorManager : authorManager[] = [
    {
      id: 1,
      name: "Tác giả 2",
      address: "Địa chỉ 2",
      title: "Nhà văn",
      note: "...."
    },
    {
      id: 1,
      name: "Tác giả 2",
      address: "Địa chỉ 2",
      title: "Nhà văn",
      note: "...."
    },
    {
      id: 1,
      name: "Tác giả 2",
      address: "Địa chỉ 2",
      title: "Nhà văn",
      note: "...."
    },
    {
      id: 1,
      name: "Tác giả 2",
      address: "Địa chỉ 2",
      title: "Nhà văn",
      note: "...."
    },
    {
      id: 1,
      name: "Tác giả 2",
      address: "Địa chỉ 2",
      title: "Nhà văn",
      note: "...."
    },
    {
      id: 1,
      name: "Tác giả 2",
      address: "Địa chỉ 2",
      title: "Nhà văn",
      note: "...."
    },
    {
      id: 1,
      name: "Tác giả 2",
      address: "Địa chỉ 2",
      title: "Nhà văn",
      note: "...."
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}

interface authorManager {
  id: number,
  name: any,
  address: any,
  title: any,
  note: any,
}
