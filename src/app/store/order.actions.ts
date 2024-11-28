import { Status } from "../models/status.enum"

export class SetName {
    static readonly type = '[Order] Set Name'
    constructor(public name: string) {}
}

export class SetTel {
    static readonly type = '[Order] Set Tel'
    constructor(public tel: string) {}
}

export class SetStatus {
    static readonly type = '[Order] Set Status'
    constructor(public status: Status) {}
}