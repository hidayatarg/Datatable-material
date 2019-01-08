import { UserService } from './../user.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator  } from '@angular/material';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort= this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
