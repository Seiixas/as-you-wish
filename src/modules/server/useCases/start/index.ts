import { StartServerController } from "./StartServerController";
import { StartServerUseCase } from "./StartServerUseCase";

const startServerUseCase = new StartServerUseCase();
const startServerController = new StartServerController(startServerUseCase);

export { startServerController };