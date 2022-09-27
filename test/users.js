import supertest, { SuperTest } from "supertest";
const request = supertest('https://gorest.co.in/public/v2/');

import { expect } from "chai";

const TOKEN =
    '987cac931c63226b8576fb7105848cf8f71298adb6542f6a90a68809d26249f9';

describe('Users', () => {
    it('GET /users', () => {
        // request.get(`users?access-token=${TOKEN}`).end((err, res) => {
        //     expect(res.body).to.not.be.empty;
        //     done();
        // });

        return request.get(`users?access-token=${TOKEN}`).then((res) => {
            expect(res.body).to.not.be.empty;
        });
    });

    it('GET /users/:id', () => {
        return request.get(`users/2162?access-token=${TOKEN}`).then((res) => {
            expect(res.body.id).to.be.eq(2162);
        });
    })


    it('GET /users with query params', () => {
        const url = `users?access-token=${TOKEN}&page=5&gender=female&status=active`

        return request.get(url).then((res) => {
            expect(res.body).to.not.be.empty;
            res.body.forEach(element => {
                expect(element.gender).to.eq('female');
                expect(element.status).to.eq('active');
            });
        });
    })

    it('POST /users', () => {
        const data = {
            email: `test${Math.floor(Math.random()* 9999)}@mail.ca`,
            name: 'Test name',
            gender: 'male',
            status: 'inactive'
        };

        return request
            .post('users')
            .set("Authorization", `Bearer ${TOKEN}`)
            .send(data)
            .then((res) => {
                expect(res.body).to.deep.include(data);
            });
    });

    it('PUT /users/:id', () => {
        const data = {
            status: "active",
            name: `Luffy + ${Math.floor(Math.random()* 9999)}`
        }

        return request
            .put('users/30753')
            .set("Authorization", `Bearer ${TOKEN}`)
            .send(data)
            .then((res) => {
                expect(res.body).to.deep.include(data);
            });
    });

    it('DELETE /users/:id', () => {
        return request
            .delete('users/4033')
            .set("Authorization", `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.body).to.be.empty;
            })
    })

});
