var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
let should = chai.should();
chai.use(chaiHttp);

// chai.use(chatHttp);
const { expect } = chai;

describe('Testing the article endpoints:', () => {
    // it('It should create an article', (done) => {
    //     const article = {
    //     title: 'First Awesome article',
    //     article: 'First awesome article content goes here'
    //     };
    //     chai.request(app)
    //     .post('/api/v1/articles')
    //     .set('Accept', 'application/json')
    //     .send(article)
    //     .end((err, res) => {
    //         expect(res.status).to.equal(201);
    //         expect(res.body.data).to.include({
    //         articleId: 1,
    //         message: 'Article successfully posted',
    //         title: article.title,
    //         article: article.article,
    //         createdOn: article.createdOn
    //         });
    //         done();
    //     });
    // });

    // it('It should not create an article with incomplete parameters', (done) => {
    //     const article = {
    //     title: 'This is an awesome article'
    //     };
    //     chai.request(app)
    //     .post('/api/v1/articles')
    //     .set('Accept', 'application/json')
    //     .send(article)
    //     .end((err, res) => {
    //         expect(res.status).to.equal(400);
    //         done();
    //     });
    // });

    // it('It should get all articles', (done) => {
    //     chai.request(app)
    //     .get('/api/v1/articles')
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(200);
    //         res.body.data[0].should.have.property('articleId');
    //         res.body.data[0].should.have.property('title');
    //         res.body.data[0].should.have.property('article');
    //         res.body.data[0].should.have.property('createdOn');
    //         res.body.data[0].should.have.property('userId');
    //         done();
    //     });
    // });

    // it('It should get a particular article', (done) => {
    //     const articleId = 1;
    //     chai.request(app)
    //     .get(`/api/v1/articles/${articleId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(200);
    //         res.body.data.should.have.property('articleId');
    //         res.body.data.should.have.property('title');
    //         res.body.data.should.have.property('article');
    //         res.body.data.should.have.property('createdOn');
    //         res.body.data.should.have.property('userId');
    //         done();
    //     });
    // });

    // it('It should not get a particular article with invalid id', (done) => {
    //     const articleId = 8888;
    //     chai.request(app)
    //     .get(`/api/v1/articles/${articleId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(404);
    //         res.body.should.have.property('message')
    //                             .eql(`Cannot find article with the id ${articleId}`);
    //         done();
    //     });
    // });

    // it('It should not get a particular article with non-numeric id', (done) => {
    //     const articleId = 'aaa';
    //     chai.request(app)
    //     .get(`/api/v1/articles/${articleId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(400);
    //         res.body.should.have.property('message')
    //                             .eql('Please input a valid numeric value');
    //         done();
    //     });
    // });

    // it('It should update an article', (done) => {
    //     const articleId = 1;
    //     const updatedArticle = {
    //     id: articleId,
    //     title: 'Updated Awesome article',
    //     article: 'Updated awesome article content here'
    //     };
    //     chai.request(app)
    //     .put(`/api/v1/articles/${articleId}`)
    //     .set('Accept', 'application/json')
    //     .send(updatedArticle)
    //     .end((err, res) => {
    //         expect(res.status).to.equal(200);
    //         expect(res.body.data.articleId).equal(updatedArticle.id);
    //         expect(res.body.data.title).equal(updatedArticle.title);
    //         expect(res.body.data.article).equal(updatedArticle.article);
    //         expect(res.body.data.createdOn).equal(updatedArticle.createdOn);
    //         done();
    //     });
    // });

    // it('It should not update an article with invalid id', (done) => {
    //     const articleId = '9999';
    //     const updatedArticle = {
    //     id: articleId,
    //     title: 'Updated Awesome article again',
    //     article: 'Updated awesome article content yet another time'
    //     };
    //     chai.request(app)
    //     .put(`/api/v1/articles/${articleId}`)
    //     .set('Accept', 'application/json')
    //     .send(updatedArticle)
    //     .end((err, res) => {
    //         expect(res.status).to.equal(404);
    //         res.body.should.have.property('message')
    //                             .eql(`Cannot find article with the id: ${articleId}`);
    //         done();
    //     });
    // });

    // it('It should not update an article with non-numeric id value', (done) => {
    //     const articleId = 'ggg';
    //     const updatedArticle = {
    //     id: articleId,
    //     title: 'Updated Awesome article again',
    //     article: 'Updated awesome article content yet another time'
    //     };
    //     chai.request(app)
    //     .put(`/api/v1/articles/${articleId}`)
    //     .set('Accept', 'application/json')
    //     .send(updatedArticle)
    //     .end((err, res) => {
    //         expect(res.status).to.equal(400);
    //         res.body.should.have.property('message')
    //                             .eql('Please input a valid numeric value');
    //         done();
    //     });
    // });


    // it('It should delete a article', (done) => {
    //     const articleId = 1;
    //     chai.request(app)
    //     .delete(`/api/v1/articles/${articleId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(200);
    //         expect(res.body.data).to.include({});
    //         done();
    //     });
    // });

    // it('It should not delete an article with invalid id', (done) => {
    //     const articleId = 56498;
    //     chai.request(app)
    //     .delete(`/api/v1/articles/${articleId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(404);
    //         res.body.should.have.property('message')
    //                             .eql(`Article with the id ${articleId} cannot be found`);
    //         done();
    //     });
    // });

    // it('It should not delete an article with non-numeric id', (done) => {
    //     const articleId = 'bbb';
    //     chai.request(app)
    //     .delete(`/api/v1/articles/${articleId}`)
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         expect(res.status).to.equal(400);
    //         res.body.should.have.property('message').eql('Please provide a numeric value');
    //         done();
    //     });
    // });

    // it('It should create an article comment', (done) => {
    //     const comment = {
    //     comment: 'First awesome comment on article'
    //     };
    //     chai.request(app)
    //     .post('/api/v1/articles/${articleId}/comment')
    //     .set('Accept', 'application/json')
    //     .send(comment)
    //     .end((err, res) => {
    //         expect(res.status).to.equal(201);
    //         expect(res.body.data).to.include({
    //         articleTitle: comment.article,
    //         message: 'Comment successfully posted',
    //         article: comment.article,
    //         comment: comment.comment,
    //         createdOn: comment.createdOn
    //         });
    //         done();
    //     });
    // });
});