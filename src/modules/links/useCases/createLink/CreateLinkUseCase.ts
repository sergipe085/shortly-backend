import { Link } from "../../entities/Link";
import { ILinksRepository } from "../../repositories/ILinksRepository";

interface IRequest {
    targetLink: string;
    code: string;
}

class CreateLinkUseCase {
    constructor(private linksRepository: ILinksRepository) {}

    execute({ targetLink, code }: IRequest): Link {
        const newLink = this.linksRepository.create({ targetLink, code });

        return newLink;
    }
}

export { CreateLinkUseCase };
