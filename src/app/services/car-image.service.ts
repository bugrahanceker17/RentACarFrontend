import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44337/api/";

  constructor(private httpClient: HttpClient) { }

  getImage(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "carimages/getimage?id=" + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "carimages/getbycar?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  add(carImage: CarImage) {
    return this.httpClient.post<ListResponseModel<CarImage>>(this.apiUrl + "carimages/add", carImage)
  }
}
