import { Link } from "../../entities/Link";
import { ICreateLinkDTO, ILinksRepository } from "../ILinksRepository";

const links: Link[] = [];

class LinksRepository implements ILinksRepository {
    private static instance: LinksRepository;

    public static getInstance(): ILinksRepository {
        if (!LinksRepository.instance) {
            LinksRepository.instance = new LinksRepository();
        }

        return LinksRepository.instance;
    }

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
