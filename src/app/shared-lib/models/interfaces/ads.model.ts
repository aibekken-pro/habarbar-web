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
