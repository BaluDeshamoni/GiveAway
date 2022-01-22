import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link } from 'react-router-dom'
import { Row,Col,Form,Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'


const RegisterScreen = ({history,location}) => {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('')

    const dispatch=useDispatch()
    
    const userRegister=useSelector(state=>state.userRegister)
    const {loading,error,userInfo}=userRegister
   
    const redirect=location.search?location.search.split("=")[1]:'/'

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history,redirect,userInfo])
    
    const submitHandler=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            setMessage("Paswords do not match")
        }else{
            dispatch(register(name,email,password))
        }
    }

    return (
        <FormContainer>
            <h1>sign Up</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {message && <Message variant='danger'>{message}</Message>}
            {loading&& <Loader></Loader>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>name </Form.Label>
                    <Form.Control 
                    type="name" placeholder="name" 
                    value={name} onChange={e=>setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                    type="email" placeholder="email" 
                    value={email} onChange={e=>setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" placeholder="password" 
                    value={password} onChange={e=>setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                    type="Password" placeholder="confirmPassword" 
                    value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">Register</Button>
            </Form>
            <Row className="py-3">
                <Col>
                Already have an account?<Link to={redirect?`/login?redirect=${redirect}`:'/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>    
        )
}

export default RegisterScreen
