import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() {}

  getItem(key:string):any{
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key:string, value:any):void{
    localStorage.setItem(key, JSON.stringify(value));
  }

  isInStorage(key:string):boolean{
    return Boolean(localStorage.getItem(key))
  }
}
