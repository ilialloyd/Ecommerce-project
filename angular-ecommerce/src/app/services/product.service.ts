import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor( private httpClient : HttpClient) { }

  //Map the JSON data from Spring REST to Product array
  getProductList() : Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
    }
  }

  //Unwraps the JSON from Spring Data REST _embedded entry
  interface GetResponse{
    _embedded:{
      products: Product[];
    }
  }
