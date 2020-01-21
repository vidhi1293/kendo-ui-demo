import { Component, OnInit,ViewChild  } from '@angular/core';
import { GroupResult, groupBy } from '@progress/kendo-data-query';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { delay, switchMap, map, tap } from 'rxjs/operators';
import { dateFieldName } from '@progress/kendo-angular-intl';
import { HttpClient } from "@angular/common/http";
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  DemoEntity;
  submitted;
  btn_disable;

  public listItems: Array<string> = [ "Small", "Medium", "Large" ];

  public source: Array<{ name: string, id: number }> = [
    { name: "Small", id: 1 },
    { name: "Medium", id: 2 },
    { name: "Large", id: 3 }
  ];
  public data: Array<{ name: string, id: number }>;

  public data1: Array<any> = [
    { cid: 1, name: "Apple", category: "Food", subcategory: "Fruits" },
    { cid: 2, name: "Onion", category: "Food", subcategory: "Vegetables" },
    { cid: 3, name: "Grapes", category: "Food", subcategory: "Fruits" },
    { cid: 4, name: "Poteto", category: "Food", subcategory: "Vegetables" },
  ];
  public groupedData: GroupResult[] = groupBy(this.data1, [{field: "subcategory"}]);

  @ViewChild("list",{static: false}) list;

  // public source2: Array<{ CountryName: string, CountryId: number }> = [
  //     { CountryName: "Small", CountryId: 1 },
  //     { CountryName: "Medium", CountryId: 2 },
  //     { CountryName: "Large", CountryId: 3 }
  // ];

  //public data2: Array<{ text: string, value: number }>;

  data2: any;
  source2: any;
  public focusedDate: Date = new Date(2020, 1, 1);

  constructor(private http: HttpClient, private CommonService : CommonService) {
    this.data = this.source.slice();
    //this.data2 = this.source2.slice();
  }

  ngOnInit() {
    this.DemoEntity = {};
    this.data2 = [];
    this.source2 = [];
    this.DemoEntity.SelectedDate = new Date();
    this.DemoEntity.productId = 2;
    
    this.CommonService.getAll()
    .then((data) => {
      console.log(data);
      this.source2 = data;
      this.data2 = this.source2.slice();
    },
    (error) => {

    });
    

  }


  ngAfterViewInit() {
    const contains = CountryId => s => s.CountryName.toLowerCase().indexOf(CountryId.toLowerCase()) !== -1;

    this.list.filterChange.asObservable().pipe(
          switchMap(CountryId => from([this.source2]).pipe(
              tap(() => this.list.loading = true),
              delay(1000),
              map((data2) => data2.filter(contains(CountryId)))
          ))
      )
      .subscribe(x => {
          this.data2 = x;
          this.list.loading = false;
      });
  }

  handleFilter(value) {
    this.data = this.source.filter((s) => s.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  public isDisabledProducts: boolean = true;
  public isDisabledOrders: boolean = true;

  public defaultItemCategories: { categoryName: string, categoryId: number } = { categoryName: "Select category", categoryId: null };

  public defaultItemProducts: { productName: string, productId: number } = { productName: "Select product", productId: null };

  public defaultItemOrders: { orderName: string, orderId: number } = { orderName: "Select order", orderId: null };

  public dataCategory: Array<{ categoryName: string, categoryId: number }> = [
      { categoryName: "Beverages", categoryId: 1 },
      { categoryName: "Condiments", categoryId: 2 },
      { categoryName: "Seafood", categoryId: 3 }
  ];

  public dataProducts: Array<{ productName: string, productId: number,categoryId:number }> = [
      { productName: "Chai", productId: 1,categoryId: 1 },
      { productName: "Chang", productId: 2,categoryId: 1 },
      { productName: "Aniseed Syrup", productId: 3,categoryId: 2  },
      { productName: "Genen Shouyu", productId: 4,categoryId: 2  },
      { productName: "Ikura", productId: 5,categoryId: 3  },
      { productName: "Konbu", productId: 6,categoryId: 3  },
  ];

  public dataOrders: Array<{ orderName: string,orderId:number, productId: number, }> = [
      { orderName: "Cunewalde", orderId: 1, productId: 1 },
      { orderName: "Albuquerque", orderId: 2, productId: 1 },
      { orderName: "Geneva", orderId: 3, productId: 2 },
      { orderName: "Graz", orderId: 4, productId: 2 },
      { orderName: "London", orderId: 5, productId: 3 },
      { orderName: "I. de Margarita", orderId: 6, productId: 3 },
      { orderName: "Barquisimeto", orderId: 7, productId: 4 },
      { orderName: "Brandenburg", orderId: 8, productId: 4 },
      { orderName: "Cunewalde", orderId: 9, productId: 5 },
      { orderName: "Mexico D.F.", orderId: 10, productId: 5 },
      { orderName: "Mexico D.F.", orderId: 11, productId: 6 },
      { orderName: "Rio de Janeiro", orderId:12, productId: 6 }
  ];

  public dataResultProducts: Array<{ productName: string, productId: number,categoryId:number }>;

  public dataResultOrders: Array<{ orderName: string,orderId:number, productId: number, }>;

  public selectedCategory: { categoryName: string, categoryId: number};
  public selectedProduct: { productName: string, productId: number};
  public selectedOrder: { orderName: string, orderId: number};

  handleCategoryChange(value) {
    this.selectedCategory = value;
    this.selectedProduct = undefined;
    this.selectedOrder = undefined;

    if(value.categoryId == this.defaultItemCategories.categoryId){
      this.isDisabledProducts = true;
      this.dataResultProducts = [];
    } else {
      this.isDisabledProducts = false;
      this.dataResultProducts = this.dataProducts.filter((s) => s.categoryId === value.categoryId )
    }

    this.isDisabledOrders = true;
    this.dataResultOrders = [];
  }

  handleProductChange(value) {
    this.selectedProduct = value;
    this.selectedOrder = undefined;

    if(value.productId == this.defaultItemProducts.productId){
      this.isDisabledOrders = true;
      this.dataResultOrders = [];
    } else {
      this.isDisabledOrders = false;
      this.dataResultOrders = this.dataOrders.filter((s) => s.productId === value.productId )
    }
  }

  handleOrderChange(value) {
    this.selectedOrder = value;
  }

  addUpdate(countryForm) {
    console.log(this.DemoEntity);
    this.submitted = true;
    if (countryForm.valid) {
      alert('Valid form');
    } 
  }

}
