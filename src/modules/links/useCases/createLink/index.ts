import { LinksRepository } from "../../repositories/implementations/LinksRepository";
import { CreateLinkController } from "./CreateLinkController";
import { CreateLinkUseCase } from "./CreateLinkUseCase";

export default (): CreateLinkController => {
    const linksRepository = new LinksRepository();
    const createLinkUseCase = new CreateLinkUseCase(linksRepository);
    const createLinkController = new CreateLinkController(createLinkUseCase);

    return createLinkController;
};
