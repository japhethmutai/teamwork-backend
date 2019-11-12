var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
let should = chai.should();
chai.use(chaiHttp);

// chai.use(chatHttp);
const { expect } = chai;

describe('Testing the gif endpoints:', () => {
    // it('It should create a gif', (done) => {
    //     const gif = {
    //     title: 'First Awesome gif',
    //     image: 'https://res.cloudinary.com/japhethmutai/image/upload/v1573537874/samples/animals/kitten-playing.gif'
    //     };
    //     chai.request(app)
    //     .post('/api/v1/gifs')
    //     .set('Accept', 'application/json')
    //     .send(gif)
    //     .end((err, res) => {
    //         expect(res.status).to.equal(201);
    //         expect(res.body.data).to.include({
    //         gifId: 1,
    //         message: 'GIF image successfully posted',
    //         title: gif.title,
    //         imageUrl: gif.image,
    //         createdOn: gif.createdOn
    //         });
    //         done();
    //     });
    // });

    // it('It should not create a gif with incomplete parameters', (done) => {
    //     const gif = {
    //     title: 'This is an awesome gif'
    //     };
    //     chai.request(app)
    //     .post('/api/v1/gifs')
    //     .set('Accept', 'application/json')
    //     .send(gif)
    //     .end((err, res) => {
    //         expect(res.status).to.equal(400);
    //         done();
    //     });
    // });

    // it('It should get all gifs', (done) => {
    //     chai.request(app)
    //     .get('/api/v1/gifs')
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(200);
    //         res.body.data[0].should.have.property('gifId');
    //         res.body.data[0].should.have.property('title');
    //         res.body.data[0].should.have.property('image');
    //         res.body.data[0].should.have.property('createdOn');
    //         res.body.data[0].should.have.property('userId');
    //         done();
    //     });
    // });

    // it('It should get a particular gif', (done) => {
    //     const gifId = 1;
    //     chai.request(app)
    //     .get(`/api/v1/gifs/${gifId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(200);
    //         res.body.data.should.have.property('gifId');
    //         res.body.data.should.have.property('title');
    //         res.body.data.should.have.property('image');
    //         res.body.data.should.have.property('createdOn');
    //         res.body.data.should.have.property('userId');
    //         done();
    //     });
    // });

    // it('It should not get a particular gif with invalid id', (done) => {
    //     const gifId = 8888;
    //     chai.request(app)
    //     .get(`/api/v1/gifs/${gifId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(404);
    //         res.body.should.have.property('message')
    //                             .eql(`Cannot find gif with the id ${gifId}`);
    //         done();
    //     });
    // });

    // it('It should not get a particular gif with non-numeric id', (done) => {
    //     const gifId = 'aaa';
    //     chai.request(app)
    //     .get(`/api/v1/gifs/${gifId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(400);
    //         res.body.should.have.property('message')
    //                             .eql('Please input a valid numeric value');
    //         done();
    //     });
    // });

    // it('It should delete a gif', (done) => {
    //     const gifId = 1;
    //     chai.request(app)
    //     .delete(`/api/v1/gifs/${gifId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(200);
    //         expect(res.body.data).to.include({});
    //         done();
    //     });
    // });

    // it('It should not delete a gif with invalid id', (done) => {
    //     const gifId = 777;
    //     chai.request(app)
    //     .delete(`/api/v1/gifs/${gifId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(404);
    //         res.body.should.have.property('message')
    //                             .eql(`Gif with the id ${gifId} cannot be found`);
    //         done();
    //     });
    // });

    // it('It should not delete a gif with non-numeric id', (done) => {
    //     const gifId = 'bbb';
    //     chai.request(app)
    //     .delete(`/api/v1/gifs/${gifId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(400);
    //         res.body.should.have.property('message').eql('Please provide a numeric value');
    //         done();
    //     });
    // });

    // it('It should create an gif comment', (done) => {
    //     const comment = {
    //     comment: 'First awesome comment on gif'
    //     };
    //     chai.request(app)
    //     .post('/api/v1/gifs/${gifId}/comment')
    //     .set('Accept', 'application/json')
    //     .send(comment)
    //     .end((err, res) => {
    //         expect(res.status).to.equal(201);
    //         expect(res.body.data).to.include({
    //         message: 'Comment successfully posted',
    //         createdOn: comment.createdOn,
    //         gifTitle: comment.gif,
    //         comment: comment.comment,
    //         });
    //         done();
    //     });
    // });
});