// import supertest, { SuperTest } from "supertest";
// const request = supertest('https://gorest.co.in/public/v2/');

// import { expect } from "chai";

// const TOKEN =
//     '987cac931c63226b8576fb7105848cf8f71298adb6542f6a90a68809d26249f9';

// describe.only('Users', () => {
//     let userId;
//     describe('Post', () => {
//         it('/users', () => {
//             const data = {
//                 email: `test${Math.floor(Math.random()* 9999)}@mail.ca`,
//                 name: 'Test name',
//                 gender: 'male',
//                 status: 'inactive'
//             };
    
//             return request
//                 .post('users')
//                 .set("Authorization", `Bearer ${TOKEN}`)
//                 .send(data)
//                 .then((res) => {
//                     expect(res.body).to.deep.include(data);
//                     userId = res.body.id;
//                     console.log(userId);
//                 });
//         });
//     })

//     describe('GET', () => {
//         it('/users', () => {
//             return request.get(`users?access-token=${TOKEN}`).then((res) => {
//                 expect(res.body).to.not.be.empty;
//             });
//         });
    
//         it('/users/:id', () => {
//             return request.get(`users/${userId}?access-token=${TOKEN}`).then((res) => {
//                 expect(res.body.id).to.be.eq(userId);
//             });
//         })
    
    
//         it('/users with query params', () => {
//             const url = `users?access-token=${TOKEN}&page=5&gender=female&status=active`
    
//             return request.get(url).then((res) => {
//                 expect(res.body).to.not.be.empty;
//                 res.body.forEach(element => {
//                     expect(element.gender).to.eq('female');
//                     expect(element.status).to.eq('active');
//                 });
//             });
//         })
//     })

//     describe('PUT', () => {
//         it('PUT /users/:id', () => {
//             const data = {
//                 status: "active",
//                 name: `Luffy + ${Math.floor(Math.random()* 9999)}`
//             }
    
//             return request
//                 .put(`users/${userId}`)
//                 .set("Authorization", `Bearer ${TOKEN}`)
//                 .send(data)
//                 .then((res) => {
//                     expect(res.body).to.deep.include(data);
//                 });
//         });

//     })

//     describe('DELETE', () => {
//         it('DELETE /users/:id', () => {
//             return request
//                 .delete(`users/${userId}`)
//                 .set("Authorization", `Bearer ${TOKEN}`)
//                 .then((res) => {
//                     expect(res.body).to.be.empty;
//                 })
//         })
//     })

// });