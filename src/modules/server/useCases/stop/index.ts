import { StopServerController } from "./StopServerController";
import { StopServerUseCase } from "./StopServerUseCase";

const stopServerUseCase = new StopServerUseCase();
const stopServerController = new StopServerController(stopServerUseCase);

export { stopServerController };