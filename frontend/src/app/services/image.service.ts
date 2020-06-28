import { Injectable } from '@angular/core';
import { HttpClient , } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Produit } from '../models/produit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  getImage(imageUrl: string): Observable<File> {
    let headers={ responseType: 'Blob' }
    return null
}
}
