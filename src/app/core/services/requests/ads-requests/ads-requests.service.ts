import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAd, IAdCreate, IAddLocation } from '@shared-lib';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdsRequestsService {
  private readonly adsEndpoint = '/ads';

  private readonly userEndpoint = 'user';

  constructor(private http: HttpClient) { }

  private getQuerySting(search: string | null, category: string | null, location: string | null) {
    const queryPairsArr: string[][] = [];

    if (search) {
      queryPairsArr.push(['search', search]);
    }

    if (category) {
      queryPairsArr.push(['category', category]);
    }

    if (location) {
      queryPairsArr.push(['location', location]);
    }

    return `?${queryPairsArr.map((pairs) => pairs.join('=')).join('&')}`;
  }

  public createAd(adData: IAdCreate): Observable<string> {
    return this.http.post<string>(`${this.adsEndpoint}`, adData);
  }

  public editAd(id: string, editData: Partial<IAdCreate>): Observable<string> {
    return this.http.patch<string>(`${[this.adsEndpoint, id].join('/')}`, editData);
  }

  public deleteAd(id: string): Observable<string>  {
    return this.http.delete<string>(`${[this.adsEndpoint, id].join('/')}`);
  }

  public getAds(searchValue: string | null, category: string | null, location: string | null) {
    return this.http.get<IAd>(`${this.adsEndpoint}${this.getQuerySting(searchValue, category, location)}`);
  }

  public getUserAds(userId: string): Observable<IAd[]> {
    return this.http.get<IAd[]>(`${[this.adsEndpoint, this.userEndpoint, userId].join('/')}`)
  }
}
