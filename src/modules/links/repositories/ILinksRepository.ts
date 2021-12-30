import { Link } from "../entities/Link";

interface ICreateLinkDTO {
    targetLink: string;
    code: string;
}

interface ILinksRepository {
    create({ targetLink, code }: ICreateLinkDTO): Link;
}

export { ILinksRepository, ICreateLinkDTO };
