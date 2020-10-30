import fake from 'faker';
// declare function require(name: string);
// var sampleModule = require('faker');
export class User {

    name: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {

        this.name = fake.name.firstName();
        this.location = {
            lat: parseFloat(fake.address.latitude()),
            lng: parseFloat(fake.address.longitude())

        }
    }

}