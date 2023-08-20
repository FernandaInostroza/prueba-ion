import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  save<T>(name: string, data: T) {
    const parseData = btoa(encodeURIComponent(JSON.stringify(data)));
    localStorage.setItem(this.obfuscate(name), parseData);
  }

  load<T>(name: string, defaultValue: T): T {
    const rawData = localStorage.getItem(this.obfuscate(name));
    if (rawData) {
      return JSON.parse(decodeURIComponent(atob(rawData)));
    }
    return defaultValue;
  }

  private obfuscate(text: string) {
    return `x$${btoa(text)}._=`;
  }
}
