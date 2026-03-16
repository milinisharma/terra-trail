import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class Places {
  
  public places: Place[] = [
    new Place (
      'p1',
      'Mumbai Mansion',
      'In the heart of Mumbai',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227',
      3400
    ),
    new Place (
      'p2',
      'Goa Beach House',
      'Beautifull beach side villain Goa',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      4500
    ),
    new Place (
      'p3',
      'Delhi Royal Palace',
      'Luxury stay in Delhi',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      8200
    ),
    new Place (
      'p4',
      'Banglore Tech Villa',
      'Modern villa in Banglore',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c',
      2000
    ),
    new Place (
      'p5',
      'Kerala Backwater Resort',
      'Relaxing resort in Kerala Backwaters',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      3500
    )
  ];

  constructor () {}

  getPlaces() {
    return [...this.places];
  }

  getPlace(id: string) {
    return this.places.find( place => {
      id === place.id
    });
  }
}
