const expect = require('expect')
const request = require('supertest')

const {Todo} = require('./../model/todo')
const {app} = require('./../server')


const todos = [
    {text: "to add test"},
    {text:"first test todo"},
    {text:"second test todo"}]

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos)
    }).then(
        ()=> done())
})
describe('POST /todos',()=>{
    it('should add new todo',(done)=>{
        var text = "to add test"

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text)
            })
            .end((err,res)=>{
                if(err){
                    return done(err);
                }
            })

        Todo.find().then((todos)=>{
            expect(todos.length).toBe(3)
            expect(todos[0].text).toBe(text)
            done();
        }).catch((e)=> done(e))
    });

    it('should not add invalid todos',(done)=>{
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err,res)=>{
                return done(err)
            })

        Todo.find().then((todos)=>{
            expect(todos.length).toBe(3);
        },(err)=>{
            return done(err)
        })
    })
})

describe('Get /todos',()=>{
    it('should get all the todos',(done)=>{
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res)=>{
                expect(res.body.todos.length).toBe(3)
            })
            .end(done);
    })
})