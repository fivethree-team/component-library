import { IGoogleMap } from './../google-map';
import { Component, OnInit, Input } from '@angular/core';
import {
    GoogleMap, GoogleMaps, GoogleMapOptions, GoogleMapsEvent, HtmlInfoWindow, LatLng, Marker,
    MyLocation
} from '@ionic-native/google-maps';

@Component({
    selector: 'fiv-google-map-native',
    template: `<div id="map"></div>`,
    styleUrls: ['google-map-native.scss'],
})
export class GoogleMapNativeComponent implements OnInit, IGoogleMap {

    @Input() zoom: number = 14;
    @Input() mapOptions: GoogleMapOptions;

    public map: GoogleMap;
    public marker: Marker[] = [];

    constructor() { }

    ngOnInit() {
        console.log('GoogleMapNativeComponent ng on init');
        this.loadMap();
    }

    loadMap(): any {
        console.log("loading Map");
        this.map = GoogleMaps.create('map', {
            controls: {
                myLocation: true,
                myLocationButton: false,
                mapToolbar: false,
                compass: true,
            }
        });
        this.map.one(GoogleMapsEvent.MAP_READY).then(() => this.zoomToMyLocation());
    }

    async zoomToMyLocation() {
        const location: MyLocation = await this.map.getMyLocation({ enableHighAccuracy: true });
        this.moveCenterTo(location.latLng);
    }

    moveCenterTo(latLng: LatLng) {
        this.map.animateCamera({ zoom: this.zoom, target: latLng, duration: 350 });
    }

    addMarker(lat: number, lng: number) {
    }
}