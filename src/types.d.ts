export interface GeoLocation {
  lat: string;
  lon: string;
}

export interface UserLocation {
  country: string;
  city: string;
  geoLocation: GeoLocation;
}

export interface Weather {
  temperature: number;
  unit: Unit;
  description: string;
  city: string;
  icon: string;
}
