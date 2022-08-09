import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css']
})
export class BookManagerComponent implements OnInit {

  bookArr: bookManager[] = [
    {
      id: 1,
      name: "Sách 1",
      img: "",
      price: "100.000đ",
      category: "Công nghệ",
      author: "Tác giả 1",
      pageNumber: "102",
      publishCompany: "Nhà xuất bản Hồng Đức",
      publishYear: "2000",
      amount: "5"
    },
    {
      id: 1,
      name: "Sách 2",
      img: "",
      price: "100.000đ",
      category: "Khoa học",
      author: "Tác giả 2",
      pageNumber: "89",
      publishCompany: "Nhà xuất bản Kim Đồng",
      publishYear: "2003",
      amount: "6"
    },
    {
      id: 1,
      name: "Sách 3",
      img: "",
      price: "100.000đ",
      category: "Chính trị",
      author: "Tác giả 3",
      pageNumber: "97",
      publishCompany: "Nhà xuất bản Quân đội",
      publishYear: "1996",
      amount: "4"
    },
    {
      id: 1,
      name: "Sách 4",
      img: "",
      price: "100.000đ",
      category: "Đời sống",
      author: "Tác giả 4",
      pageNumber: "96",
      publishCompany: "Nhà xuất bản Lao động",
      publishYear: "1999",
      amount: "3"
    },
    {
      id: 1,
      name: "Sách 4",
      img: "",
      price: "100.000đ",
      category: "Đời sống",
      author: "Tác giả 4",
      pageNumber: "96",
      publishCompany: "Nhà xuất bản Lao động",
      publishYear: "1999",
      amount: "3"
    },
    {
      id: 1,
      name: "Sách 4",
      img: "",
      price: "100.000đ",
      category: "Đời sống",
      author: "Tác giả 4",
      pageNumber: "96",
      publishCompany: "Nhà xuất bản Lao động",
      publishYear: "1999",
      amount: "3"
    },
    {
      id: 1,
      name: "Sách 4",
      img: "",
      price: "100.000đ",
      category: "Đời sống",
      author: "Tác giả 4",
      pageNumber: "96",
      publishCompany: "Nhà xuất bản Lao động",
      publishYear: "1999",
      amount: "3"
    },
    {
      id: 1,
      name: "Sách 4",
      img: "",
      price: "100.000đ",
      category: "Đời sống",
      author: "Tác giả 4",
      pageNumber: "96",
      publishCompany: "Nhà xuất bản Lao động",
      publishYear: "1999",
      amount: "3"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
interface bookManager {
  id: number,
  name: any,
  img: any,
  price: any,
  category: any,
  author: any,
  pageNumber: any,
  publishCompany: any,
  publishYear: any,
  amount: any
}
