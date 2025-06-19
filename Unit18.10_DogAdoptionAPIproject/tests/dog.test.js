process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');
const Dog = require('../models/Dog');

const should = chai.should();
chai.use(chaiHttp);

let token, userId, dogId;

describe('Dogs', () => {
  before(async () => {
    await User.deleteMany({});
    await Dog.deleteMany({});

    // register and login a user
    const user = await chai.request(app).post('/api/auth/register').send({ username: 'dogowner', password: 'password123' });
    const loginRes = await chai.request(app).post('/api/auth/login').send({ username: 'dogowner', password: 'password123' });
    token = loginRes.body.token;
    userId = user.body.id;
  });

  after(async () => {
    await mongoose.connection.close();
  });

  describe('/POST register dog', () => {
    it('it should register a dog', (done) => {
      const dog = { name: 'Buddy', description: 'A friendly dog' };
      chai.request(app)
        .post('/api/dogs')
        .set('Authorization', `Bearer ${token}`)
        .send(dog)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property('name').eql('Buddy');
          dogId = res.body._id;
          done();
        });
    });
  });

  describe('/POST adopt dog', () => {
    it('it should not allow owner to adopt own dog', (done) => {
      chai.request(app)
        .post(`/api/dogs/${dogId}/adopt`)
        .set('Authorization', `Bearer ${token}`)
        .send({ message: 'Thanks!' })
        .end((err, res) => {
          res.should.have.status(403);
          done();
        });
    });
  });
});