import { GetStatusServerController } from "./GetStatusServerController";
import { GetStatusServerUseCase } from "./GetStatusServerUseCase";

const getStatusServerUseCase = new GetStatusServerUseCase();
const getStatusServerController = new GetStatusServerController(
  getStatusServerUseCase
);

export { getStatusServerController };