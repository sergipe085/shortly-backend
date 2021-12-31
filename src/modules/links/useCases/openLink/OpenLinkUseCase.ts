import { Link } from "../../entities/Link";
import { ILinksRepository } from "../../repositories/ILinksRepository";

interface IRequest {
    code: string;
}

class OpenLinkUseCase {
    constructor(private linksRepository: ILinksRepository) {}

    execute({ code }: IRequest): Link | undefined {
        const link = this.linksRepository.getLink(code);

        return link;
    }
}

export { OpenLinkUseCase };
