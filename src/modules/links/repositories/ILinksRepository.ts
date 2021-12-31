import { Link } from "../entities/Link";

interface ICreateLinkDTO {
    targetLink: string;
    code: string;
}

interface ILinksRepository {
    create({ targetLink, code }: ICreateLinkDTO): Link;
    getLink(code: string): Link | undefined;
}

export { ILinksRepository, ICreateLinkDTO };
