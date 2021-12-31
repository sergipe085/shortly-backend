import { Link } from "../../entities/Link";
import { ICreateLinkDTO, ILinksRepository } from "../ILinksRepository";

const links: Link[] = [];

class LinksRepository implements ILinksRepository {
    create({ targetLink, code }: ICreateLinkDTO): Link {
        const newLink = new Link(targetLink, code);
        links.push(newLink);

        return newLink;
    }

    getLink(code: string): Link | undefined {
        const link = links.find((link) => link.code === code);
        return link;
    }
}

export { LinksRepository };
