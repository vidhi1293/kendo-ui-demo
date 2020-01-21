import { Component, OnInit,ViewChild  } from '@angular/core';
import { GroupResult, groupBy } from '@progress/kendo-data-query';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { delay, switchMap, map, tap } from 'rxjs/operators';
import { dateFieldName } from '@progress/kendo-angular-intl';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
 

}
