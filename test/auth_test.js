var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
let should = chai.should();
chai.use(chaiHttp);

const { expect } = chai;

describe('Testing the auth endpoints:', () => {
    it('It should create a user', (done) => {
        const user = {
            first_name: "Fifth", 
            last_name: "AwesomeUser", 
            email: "fifthawesome@gmail.com", 
            password: "Awesome@123", 
            gender: "Male", 
            job_role: "User", 
            department: "Sales", 
            address: "Fifth Awesome User Address"
        };
        chai.request(app)
        .post('/api/v1/auth/create-user')
        .set('Accept', 'application/json')
        .send(user)
        .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body).to.include({
                message: 'User account successfully created!',
                userId: user.user_id
            });
            done();
        });
    });
});