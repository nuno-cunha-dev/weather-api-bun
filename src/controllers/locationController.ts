import { Context } from "elysia";
import locationService from "../services/locationService";
import requestIp from "../utils/requestIp";

export default {
  async getLocation(context: Context) {
    const ip = requestIp.getClientIp(context.request);
    if (!ip) {
      throw new Error('IP not found');
    }

    return locationService.getLocationByIp(ip);
  },

  async getCity(context: Context) {
    const ip = requestIp.getClientIp(context.request);
    if (!ip) {
      throw new Error('IP not found');
    }

    const location = await locationService.getLocationByIp(ip);
    return location.city;
  },

  async getCountry(context: Context) {
    const ip = requestIp.getClientIp(context.request);
    if (!ip) {
      throw new Error('IP not found');
    }

    const location = await locationService.getLocationByIp(ip);
    return location.country;
  },

  async getGeoLocation(context: Context) {
    const ip = requestIp.getClientIp(context.request);
    if (!ip) {
      throw new Error('IP not found');
    }

    const location = await locationService.getLocationByIp(ip);
    return location.geoLocation;
  }
}