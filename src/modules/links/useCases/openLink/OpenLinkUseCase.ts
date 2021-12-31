import { AppError } from "../../../../errors/AppError";
import { Link } from "../../entities/Link";
import { ILinksRepository } from "../../repositories/ILinksRepository";

interface IRequest {
    code: string;
}

class OpenLinkUseCase {
    constructor(private linksRepository: ILinksRepository) {}

    execute({ code }: IRequest): Link {
        const link = this.linksRepository.getLink(code);

        if (!link) {
            throw new AppError("esse link nao existe", 404);
        }

        return link;
    }
}

export { OpenLinkUseCase };
