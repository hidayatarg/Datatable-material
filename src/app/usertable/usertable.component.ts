import { UserService } from './../user.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayColumns= ['name','username','email'];
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.userService.getUser().subscribe(result=>{
      // fetched successfully
      if(!result){
        return;
      }
    this.dataSource= new MatTableDataSource(result);
    this.dataSource.sort= this.sort;
    });
  }

}
