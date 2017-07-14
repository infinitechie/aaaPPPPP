export class ContactFormMessage {
    constructor(
            public id: number,
            public userName: string,
            public emailAddress: string,
            public message: string,
            public referencePoint?: string,
            public newsletter?: string,
    ){}
}