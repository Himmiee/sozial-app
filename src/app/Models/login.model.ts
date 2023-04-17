export class LoginRes{
    constructor(
        public isAdmin: boolean,
        public isActive: boolean,
        public __id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public dob: string,
        public gender: string,
        public photoId: string,
        public createdDate: string,
        public __v: number,
        public token: string,
    ){}

}

export class ILogin{
    constructor(
        public email:string,
        public password:string,
    ){}
}

export class IReset{
    constructor(
        public password:string,
        public confirmPassword:string,
    ){}
}

export class IForgot{
    constructor(
        public email:string,
        public dob:string,
    ){}
}

export class IRegister{
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public dob: string,
        public gender: string,
        public password: string,
    ){}
}
