import { Component, OnInit } from '@angular/core';
import {Menu} from "../../../../models/Menu";
declare function clickMenuMobile(): any
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: Menu[] = [
    {
      name: 'Tổng quan thông tin',
      icon: 'fa-solid fa-book-journal-whills',
      path: 'chart',
    },
    {
      name: 'Quản lý thông tin sách',
      icon: 'fa-solid fa-list-check',
      path: 'book-manager',
    },
    {
      name: 'Quản lý tác giả',
      icon: 'fa-solid fa-bars-progress',
      path: 'author-manager',
    },
    {
      name: 'Quản lý tài khoản',
      icon: 'fa-solid fa-users',
      path: 'acc-manager',
    },
    {
      name: 'Quản lý nhân viên',
      icon: 'fa-solid fa-book-journal-whills',
      path: 'staff-manager',
    },
    {
      name: 'Quản lý thể loại sách',
      icon: 'fa-solid fa-business-time',
      path: 'category-manager',
    },
    {
      name: 'Quản lý nhà xuất bản',
      icon: 'fa-solid fa-user-secret',
      path: 'publishing-company',
    },
    {
      name: 'Quản lý mượn trả',
      icon: 'fa-solid fa-floppy-disk',
      path: 'loan-pay-manager',
    },
    {
      name: 'Quản lý vi phạm',
      icon: 'fa-solid fa-fire',
      path: 'delinquent-manager',
    },
    {
      name: 'Quản lý nhóm quyền',
      icon: 'fa-solid fa-user-group',
      path: 'role-manager',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClickMenu() {
    clickMenuMobile()
  }
}
