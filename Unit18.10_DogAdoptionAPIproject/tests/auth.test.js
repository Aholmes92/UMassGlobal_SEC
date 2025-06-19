process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');

const should = chai.should();
chai.use(chaiHttp);

describe('Auth', () => {
  before(async () => {
    await User.deleteMany({});
  });

  after(async () => {
    await mongoose.connection.close();
  });

  describe('/POST register', () => {
    it('it should register a new user', (done) => {
      const user = { username: 'testuser', password: 'password123' };
      chai.request(app)
        .post('/api/auth/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property('username').eql('testuser');
          done();
        });
    });
  });

  describe('/POST login', () => {
    it('it should login and return a token', (done) => {
      const user = { username: 'testuser', password: 'password123' };
      chai.request(app)
        .post('/api/auth/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('token');
          done();
        });
    });
  });
});