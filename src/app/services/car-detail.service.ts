import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44337/api/cars/getcarsdetail";

  constructor(private httpClint:HttpClient) { }

  getCarsDetail():Observable<CarDetailResponseModel>{
    return this.httpClint.get<CarDetailResponseModel>(this.apiUrl);
  }
}
