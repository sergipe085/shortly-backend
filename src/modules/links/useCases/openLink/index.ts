import { LinksRepository } from "../../repositories/implementations/LinksRepository";
import { OpenLinkController } from "./OpenLinkController";
import { OpenLinkUseCase } from "./OpenLinkUseCase";

export default (): OpenLinkController => {
    const linksRepository = LinksRepository.getInstance();
    const openLinkUseCase = new OpenLinkUseCase(linksRepository);
    const openLinkController = new OpenLinkController(openLinkUseCase);
    return openLinkController;
};
