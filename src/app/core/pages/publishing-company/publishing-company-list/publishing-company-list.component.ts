import { Component, OnInit } from '@angular/core';
import {PublishCompanyApiService} from "../../../../services/api/publish-company-api.service";
import {IResponseModel} from "../../../../models/commons/response.model";
import {IPublishCompanyResponse} from "../../../../models/responses/publish-company.response";
import {IPublishCompanyView} from "../../../../models/views/publish-company.view";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IEditPublishCompanyRequest, IPublishCompanyRequest} from "../../../../models/requests/publish-company.request";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-publishing-company-list',
  templateUrl: './publishing-company-list.component.html',
  styleUrls: ['./publishing-company-list.component.css']
})
export class PublishingCompanyListComponent implements OnInit {

  publishingCompany : IPublishCompanyView[] = [];
  publishCompanyInfoForm!: FormGroup;
  publishCompanySelected!: IPublishCompanyView;

  constructor(private publishCompanyApiService: PublishCompanyApiService,
              private fb:FormBuilder,
              private messageService: MessageService) {
    this.publishCompanyInfoForm = fb.group( {
      name: [null],
      address: [null],
      email: [null],
      agent_people: [null],
      date_founding: [null]
    })
  }

  ngOnInit(): void {
    this.getAllPublishCompany()
  }

  getAllPublishCompany() {
    this.publishCompanyApiService._getAllPublishCompany().subscribe(
      (res: IResponseModel<IPublishCompanyResponse[]>) => {
        this.publishingCompany = [];
        res.data.forEach( publishCompanyRes => {
          const publishCompanyView: IPublishCompanyView = {
            id: publishCompanyRes.company_id,
            name: publishCompanyRes.publish_name,
            address: publishCompanyRes.address,
            email: publishCompanyRes.email,
            agent_people: publishCompanyRes.agent_people,
            date_founding: publishCompanyRes.date_founding
          };
          this.publishingCompany.push(publishCompanyView)
        })

      }
    )
  }

  onAddNewPublishCompany() {
    const createNewPublishCompanyRequest: IPublishCompanyRequest = {
      publish_name: this.publishCompanyInfoForm.value.name,
      address: this.publishCompanyInfoForm.value.address,
      email: this.publishCompanyInfoForm.value.email,
      agent_people: this.publishCompanyInfoForm.value.agent_people,
      date_founding: this.publishCompanyInfoForm.value.date_founding
    };
    this.publishCompanyApiService._createNewPublishCompany(createNewPublishCompanyRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo!', detail:'Thêm nhà xuất bản thành công! '});
        console.log('Them nha xuat ban thanh cong');
        this.getAllPublishCompany()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo!', detail:'Thêm nhà xuất bản thất bại!'});
        console.log('Them nha xuat ban that bai')
      }
    )
  }

  onDeletePublishCompany() {
    if(this.publishCompanySelected) {
      this.publishCompanyApiService._deletePublishCompany(this.publishCompanySelected.id).subscribe(
        (res: IResponseModel<any>) => {
          this.messageService.add({severity:'success', summary:'Thông báo!', detail:'Xóa thành công! '});
          console.log('');
          this.getAllPublishCompany()
        },
        err => {
          this.messageService.add({severity:'error', summary:'Thông báo!', detail:'Xóa thất bại! '});
          console.log('')
        }
      )
    }
  }

  editPublishCompany(i: IPublishCompanyView) {
    this.publishCompanySelected = i;
    this.publishCompanyInfoForm.patchValue(
      {
        name: i.name,
        address: i.address,
        email: i.email,
        agent_people: i.agent_people,
        date_founding: i.date_founding
      }
    )
  }

  onEditPublishCompany() {
    const editPublishCompanyRequest: IEditPublishCompanyRequest = {
      publish_name: this.publishCompanyInfoForm.value.name,
      address: this.publishCompanyInfoForm.value.address,
      email: this.publishCompanyInfoForm.value.email,
      agent_people: this.publishCompanyInfoForm.value.agent_people,
      date_founding: this.publishCompanyInfoForm.value.date_founding,
      id: this.publishCompanySelected.id
    };
    this.publishCompanyApiService._editPublishCompany(editPublishCompanyRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo!', detail:'Cập nhật thành công!'});
        console.log('Cập nhật thành công');
        this.getAllPublishCompany()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo!', detail:'Cập nhật thất bại!'});
        console.log('Cập nhật thất bại')
      }
    )
  }

  selectPublishCompany(i: IPublishCompanyView) {
    this.publishCompanySelected = i;
    console.log(this.publishCompanySelected)
  }
}

