import { Elysia } from "elysia";
import healthController from "./controllers/healthController";
import locationController from "./controllers/locationController";
import weatherController from "./controllers/weatherController";

const routes = new Elysia();

routes.get('/health', healthController.check);

routes.group('/location', routes => routes
  .get('/', locationController.getLocation)
  .get('/city', locationController.getCity)
  .get('/country', locationController.getCountry)
  .get('/geo-location', locationController.getGeoLocation)
);

routes.group('/weather', routes => routes
  .get('/current', weatherController.getCurrent)
);

export default routes;
