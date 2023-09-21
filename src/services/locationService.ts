import type { UserLocation } from "../types";
import { IPinfoWrapper } from 'node-ipinfo';
import config from "../config";

enum IpInfoGeoLocation {
  Latitude = 0,
  Longitude = 1,
}

export default {
  async getLocationByIp(ip: string): Promise<UserLocation> {
    if (!config.ipInfoToken) {
      throw new Error("IP_INFO_TOKEN is not set")
    }

    const ipInfoWrapper = new IPinfoWrapper(config.ipInfoToken)
    const ipInfo = await ipInfoWrapper.lookupIp(ip)
    const geolocation = ipInfo.loc.replace(/\s+/g, '').split(',');

    return {
      country: ipInfo.countryCode,
      city: ipInfo.city,
      geoLocation: {
        lat: geolocation[IpInfoGeoLocation.Latitude],
        lon: geolocation[IpInfoGeoLocation.Longitude],
      },
    }
  }
}