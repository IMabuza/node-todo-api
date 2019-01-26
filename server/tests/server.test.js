const expect = require('expect');
const request = require('supertest');

// load the app from server and todo from models
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// Create Dummy todos (Seed data)

const todos = [{
    text: "First todo text"
},{
    text: "Second todo text"
}];


// wipe out the database before each call
beforeEach((done) =>{
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});
// Start Testing

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = "This some test text";

        // Create requiest using supertest

        request(app)
         .post('/todos')
         .send({text})
         .expect(200)
         .expect((res) => {
             expect(res.body.text).toBe(text);
         })
         .end((err, res) => {
            //  Handle error
            if(err){
                return done(err);
            }

            // Check if the todo was stored

            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
         });
    });

    // Test for bad requests

    it('should not create a todo', (done) => {

        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
           //  Handle error
           if(err){
               return done(err);
           }

           // Check if the todo was stored

           Todo.find().then((todos) => {
               expect(todos.length).toBe(2);
               done();
           }).catch((e) => done(e));
        });
    });
});

// Check if it returns all the todos
describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});