export interface ILocation {
  id: string;
  location: string;
  locationCode: string;
  region: string;
  regionCode: string;
  country: string;
  countryCode: string;
}

export interface IAddLocation {
  location: string;
  locationCode: string;
  region: string;
  regionCode: string;
  country: string;
  countryCode: string;
}

export interface ICategory {
  id: string;
  name: string;
  subcategories?: ICategory[];
}

export interface ICreateICategory {
  name: string;
}
