import supertest, { SuperTest } from "supertest";
const request = supertest('https://gorest.co.in/public/v2/');

const { faker } = require('@faker-js/faker');
import { expect } from "chai";

const TOKEN =
    '987cac931c63226b8576fb7105848cf8f71298adb6542f6a90a68809d26249f9';

export const createRandomUserWithFaker = async () => {
    const userData = {
        email: faker.internet.email(),
        name: faker.name.firstName(),
        gender: 'male',
        status: 'inactive'
    };

    const res = await request
        .post('users')
        .set("Authorization", `Bearer ${TOKEN}`)
        .send(userData)

        console.log(res.body);
    return res.body.id;
}


export const createRandomUser = async () => {
    const userData = {
        email: `test${Math.floor(Math.random() * 9999)}@mail.ca`,
        name: 'Test name',
        gender: 'male',
        status: 'inactive'
    };

    const res = await request
        .post('users')
        .set("Authorization", `Bearer ${TOKEN}`)
        .send(userData)
    return res.body.id;
}