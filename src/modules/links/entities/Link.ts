import { v4 as uuidV4 } from "uuid";

class Link {
    id?: string;
    targetLink: string;
    code: string;

    constructor(targetLink: string, code: string) {
        if (!this.id) {
            this.id = uuidV4();
        }

        this.targetLink = targetLink;
        this.code = code;
    }
}

export { Link };
