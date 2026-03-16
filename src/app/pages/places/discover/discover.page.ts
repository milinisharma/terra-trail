import { Component, OnInit } from '@angular/core';
import { Places } from '../places';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  places!: Place[];

  constructor(
    private placeService: Places
  ) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

}
