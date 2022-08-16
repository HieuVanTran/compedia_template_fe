import { Component, OnInit } from '@angular/core';
import {IStaffManagerView} from "../../../../models/views/staff-manager.view";
import {StaffManagerApiService} from "../../../../services/api/staff-manager-api.service";
import {IResponseModel} from "../../../../models/commons/response.model";
import {IStaffManagerResponse} from "../../../../models/responses/staff-manager.response";

@Component({
  selector: 'app-staff-manager-list',
  templateUrl: './staff-manager-list.component.html',
  styleUrls: ['./staff-manager-list.component.css']
})
export class StaffManagerListComponent implements OnInit {

  staffManager: IStaffManagerView[] = [];

  constructor(private staffManagerApiService: StaffManagerApiService) { }

  ngOnInit(): void {
  }

  getAllStaffManager() {
    this.staffManagerApiService._getAllStaffManager().subscribe(
      (res: IResponseModel<IStaffManagerResponse[]>)  => {
        this.staffManager = [];
        res.data.forEach( staffManagerRes => {
          const staffManagerView: IStaffManagerView = {
            id: staffManagerRes.staffId,
            name: staffManagerRes.nameStaff,
            phoneNum: staffManagerRes.phoneNumber,
            address: staffManagerRes.address,
            dateOfBirth: staffManagerRes.dateOfBirth
          };
          this.staffManager.push(staffManagerView)
        })
      }
    )
  }
}

interface staffManager {
  id: number,
  name: string,
  phoneNum: string,
  address: string,
  dateOfBirth: string
}
