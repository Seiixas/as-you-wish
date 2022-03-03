import { RestartServerController } from "./RestartServerController";
import { RestartServerUseCase } from "./RestartServerUseCase";

const restartServerUseCase = new RestartServerUseCase();

const restartServerController = new RestartServerController(
  restartServerUseCase
);

export { restartServerController };