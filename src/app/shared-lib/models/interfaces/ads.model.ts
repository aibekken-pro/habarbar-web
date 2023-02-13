export interface IAd {
  id:string,
  creatorId: string,
  category: string,
  title: string,
  description: string,
  location: string,
  price: number,
  images: string[],
  isNew: boolean,
  createDate: Date,
  lastEditDate: Date,
  moderated: boolean,
  author: {
    id: string,
    displayName: string
  }
}

export interface IAdCreate {
  category: string,
  title: string,
  description: string,
  location: string,
  price: number,
  images: string[],
  isNew: boolean,
}

export interface IGetAd {
  id: string,
  creatorId: string,
  category: string,
  title: string,
  description: string,
  location: string,
  price: number,
  images: string[],
  isNew: boolean,
  createDate: Date,
  lastEditDate: Date,
  moderated: boolean
}

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
