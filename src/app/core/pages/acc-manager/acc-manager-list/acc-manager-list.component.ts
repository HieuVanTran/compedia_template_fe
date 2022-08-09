import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acc-manager-list',
  templateUrl: './acc-manager-list.component.html',
  styleUrls: ['./acc-manager-list.component.css']
})
export class AccManagerListComponent implements OnInit {

  accManager : accManager[] = [
    {
      id: 1,
      username: "tendangnhap",
      password: "matkhau",
      full_name: "Cao Hải Đăng",
      date_of_birth: "01/01/2000",
      email: "mail@gmail.com",
      phone: "0912091212",
      status: "Online",
      role_id: "1"
    },
    {
      id: 1,
      username: "tendangnhap1",
      password: "matkhau",
      full_name: "Cao Hải Đăng",
      date_of_birth: "01/01/2000",
      email: "mail@gmail.com",
      phone: "0912091212",
      status: "Online",
      role_id: "2"
    },
    {
      id: 1,
      username: "tendangnhap",
      password: "matkhau",
      full_name: "Cao Hải Đăng",
      date_of_birth: "01/01/2000",
      email: "mail@gmail.com",
      phone: "0912091212",
      status: "Online",
      role_id: "1"
    },
    {
      id: 1,
      username: "tendangnhap",
      password: "matkhau",
      full_name: "Cao Hải Đăng",
      date_of_birth: "01/01/2000",
      email: "mail@gmail.com",
      phone: "0912091212",
      status: "Online",
      role_id: "1"
    },
    {
      id: 1,
      username: "tendangnhap",
      password: "matkhau",
      full_name: "Cao Hải Đăng",
      date_of_birth: "01/01/2000",
      email: "mail@gmail.com",
      phone: "0912091212",
      status: "Online",
      role_id: "1"
    },
    {
      id: 1,
      username: "tendangnhap",
      password: "matkhau",
      full_name: "Cao Hải Đăng",
      date_of_birth: "01/01/2000",
      email: "mail@gmail.com",
      phone: "0912091212",
      status: "Online",
      role_id: "1"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface accManager {
  id: number,
  username: string,
  password: string,
  full_name: string,
  date_of_birth: string,
  email: string,
  phone: string,
  status: string,
  role_id: string
}
