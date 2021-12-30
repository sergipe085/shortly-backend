import { Link } from "../../entities/Link";
import { ICreateLinkDTO, ILinksRepository } from "../ILinksRepository";

class LinksRepository implements ILinksRepository {
    async create({ targetLink, code }: ICreateLinkDTO): Promise<Link> {
        const newLink = new Link(targetLink, code);

        return newLink;
    }
}

export { LinksRepository };
