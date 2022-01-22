import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Adminuser',
        email:'admin@mail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'john',
        email:'john@mail.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'ram',
        email:'ram@mail.com',
        password:bcrypt.hashSync('123456',10)
    }
]

export default users