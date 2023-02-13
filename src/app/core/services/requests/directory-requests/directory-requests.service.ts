import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILocation, IAddLocation, ICategory, ICreateICategory } from '@shared-lib/models/interfaces/directory.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoryRequestsService {
  private readonly baseEndpoint = '/ads/directory/';
  private readonly endpoints = {
    LOCATION: 'location',
    CATEGORIES: 'categories',
  }

  constructor(private http: HttpClient) { }

  getLocations(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(`${[this.baseEndpoint, this.endpoints.LOCATION].join('/')}`)
  }

  adLocation(location: IAddLocation): Observable<string> {
    return this.http.post<string>(`${[this.baseEndpoint, this.endpoints.LOCATION].join('/')}`, location)
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${[this.baseEndpoint, this.endpoints.LOCATION].join('/')}`)
  }

  addCategory(location: ICreateICategory): Observable<string> {
    return this.http.post<string>(`${[this.baseEndpoint, this.endpoints.LOCATION].join('/')}`, location)
  }
}
