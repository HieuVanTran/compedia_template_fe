import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishing-company-list',
  templateUrl: './publishing-company-list.component.html',
  styleUrls: ['./publishing-company-list.component.css']
})
export class PublishingCompanyListComponent implements OnInit {

  publishingCompany : publishingCompany[] = [
    {
      id: 1,
      name: "Nhà xuất bản 1",
      address: "Trần Quang Diệu",
      email: "company@gmail.com",
      agent_people: "Trần Văn A",
      date_founding: "1/1/2022"
    },
    {
      id: 1,
      name: "Nhà xuất bản 1",
      address: "Trần Quang Diệu",
      email: "company@gmail.com",
      agent_people: "Trần Văn A",
      date_founding: "1/1/2022"
    },
    {
      id: 1,
      name: "Nhà xuất bản 1",
      address: "Trần Quang Diệu",
      email: "company@gmail.com",
      agent_people: "Trần Văn A",
      date_founding: "1/1/2022"
    },
    {
      id: 1,
      name: "Nhà xuất bản 1",
      address: "Trần Quang Diệu",
      email: "company@gmail.com",
      agent_people: "Trần Văn A",
      date_founding: "1/1/2022"
    },
    {
      id: 1,
      name: "Nhà xuất bản 1",
      address: "Trần Quang Diệu",
      email: "company@gmail.com",
      agent_people: "Trần Văn A",
      date_founding: "1/1/2022"
    },
    {
      id: 1,
      name: "Nhà xuất bản 1",
      address: "Trần Quang Diệu",
      email: "company@gmail.com",
      agent_people: "Trần Văn A",
      date_founding: "1/1/2022"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface publishingCompany{
  id: number,
  name: string,
  address: string,
  email: string,
  agent_people: string,
  date_founding: string
}
