import { Link } from "../../entities/Link";
import { ICreateLinkDTO, ILinksRepository } from "../ILinksRepository";

class LinksRepository implements ILinksRepository {
    create({ targetLink, code }: ICreateLinkDTO): Link {
        const newLink = new Link(targetLink, code);

        return newLink;
    }
}

export { LinksRepository };
