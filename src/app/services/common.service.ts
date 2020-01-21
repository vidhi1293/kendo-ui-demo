import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getAll() {
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://moe-website-api.devbyopeneyes.com/Common/Country/getAll/' + 2) // 1-Active, 2-All
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

  
}

