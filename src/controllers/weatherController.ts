import requestIp from "../utils/requestIp";
import { Context } from "elysia";
import weatherService from "../services/weatherService";
import locationService from "../services/locationService";

export default {
  async getCurrent(context: Context) {
    const ip = requestIp.getClientIp(context.request);
    if (!ip) {
      throw new Error('IP not found');
    }

    const location = await locationService.getLocationByIp(ip);
    return weatherService.getCurrent(location);
  }
}