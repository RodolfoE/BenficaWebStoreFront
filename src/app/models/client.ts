import { Produto } from '../produto';

export class Client {
    _id? : string;
    name: string;
    email: string;
    phoneAreaCode: string;
    phoneNumber:string;
    street:string;
    number:string;
    complement:string;
    district:string;
    postalCode:string;
    city:string;
    state:string;
    country:string; //BRA
    

    public constructor(){}
}