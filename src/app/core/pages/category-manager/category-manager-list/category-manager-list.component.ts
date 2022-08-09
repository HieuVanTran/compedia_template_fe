import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-manager-list',
  templateUrl: './category-manager-list.component.html',
  styleUrls: ['./category-manager-list.component.css']
})
export class CategoryManagerListComponent implements OnInit {

  categoryManager : categoryManager[] = [
    {
      id: 1,
      code: "S1",
      name: "Tác giả 2",
    },
    {
      id: 1,
      code: "S1",
      name: "Tác giả 2",
    },
    {
      id: 1,
      code: "S1",
      name: "Tác giả 2",
    },
    {
      id: 1,
      code: "S1",
      name: "Tác giả 2",
    },
    {
      id: 1,
      code: "S1",
      name: "Tác giả 2",
    },
    {
      id: 1,
      code: "S1",
      name: "Tác giả 2",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface categoryManager {
  id: number,
  code: string,
  name: string
}
