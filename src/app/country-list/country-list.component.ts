import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { employees } from '../employees';
import { images } from '../images';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private CommonService : CommonService) { }

  @ViewChild(DataBindingDirective,{static: false}) dataBinding: DataBindingDirective;
  public gridData;
  public gridView: any[];

  public mySelection: string[] = [];

  public ngOnInit(): void {
      
    this.gridData = [];
    this.CommonService.getAll()
    .then((data) => {
      console.log(data);
      this.gridData = data;
      this.gridView = this.gridData;
    },
    (error) => {

    });

  }

  public onFilter(inputValue: string): void {
      this.gridView = process(this.gridData, {
          filter: {
              logic: "or",
              filters: [
                  {
                      field: 'CountryName',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                      field: 'CountryAbbreviation',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                      field: 'PhonePrefix',
                      operator: 'contains',
                      value: inputValue
                  }
              ],
          }
      }).data;

      this.dataBinding.skip = 0;
  }

}
