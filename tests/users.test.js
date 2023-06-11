const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const User = require('../models/User');

chai.use(chaiHttp);
chai.should();

describe('Users API', () => {
  // Test the GET /users route
  describe('GET /users', () => {
    it('should get all users', (done) => {
      chai.request(app.app) 
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          done();
        });
    });
  });

  // Test the POST /users route
  describe('POST /users', () => {
    it('should create a new user', (done) => {
      const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 25
      };

      chai.request(app.app) 
        .post('/users')
        .send(user)
        .end(async (err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('name').equal('John Doe');
          res.body.should.have.property('email').equal('johndoe@example.com');
          res.body.should.have.property('age').equal(25);

          // Retrieve the created user from the database
          const createdUser = await User.findOne({ email: 'johndoe@example.com' });
          const userId = createdUser._id;

          // Update the userId variable in the following test cases
          describe('GET /users/:id', () => {
            it('should get a single user by ID', (done) => {
              chai.request(app.app) 
                .get(`/users/${userId}`)
                .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.an('object');
                  done();
                });
            });
          });

          describe('PUT /users/:id', () => {
            it('should update a user by ID', (done) => {
              const updatedUser = {
                name: 'Updated Name',
                age: 30
              };

              chai.request(app.app) 
                .put(`/users/${userId}`)
                .send(updatedUser)
                .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.an('object');
                  done();
                });
            });
          });

          describe('DELETE /users/:id', () => {
            it('should delete a user by ID', (done) => {
              chai.request(app.app) // Use app.app instead of app
                .delete(`/users/${userId}`)
                .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.an('object');
                  done();
                });
            });
          });

          done();
        });
    });
  });
});
