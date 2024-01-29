import styled from "styled-components"
import {Link, useNavigate} from "react-router-dom"
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../Redux/apiCalls";
import { resetError } from "../Redux/userSlice";

const Container = styled.div`
   height: max(500px, 100vh);
   width: 100%;
   background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`

const Wrapper = styled.div`
   width: max(275px, 30%);
   padding: 40px;
   background-color: rgba(255, 255, 255, 0.5);
   margin-right: 10%;
`
const Title = styled.h1`
   font-size: 25px;
   font-weight: 400;
`
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`
const Input = styled.input`
   flex: 1;
   width: clamp(150px, 43%, 500px);
   margin: 20px 13px 0 0;
   padding: 13px;
   
`
const Button = styled.button`
   width: 100%;
   border: none;
   padding: 10px 13px;
   background-color: #d32f2f;
   color: white;
   cursor: pointer;
   margin-top: 20px;
   font-size: 23px;
   font-weight: 400;
`


const LoginPage = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {isFetching, error, currentUser} = useSelector(state => state.user); //user is from store.js

   const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, {username, password});
   };

   useEffect(()=>{
      dispatch(resetError())
   }, [dispatch]);

   useEffect(()=>
   {
      if(currentUser){
         navigate("/success")
      }
   }, [navigate, currentUser])

  return (
    <div>
      <Container>
         <Wrapper>
            <Title>WELCOME BACK!</Title>
            <Form>
               <Input placeholder='Username' 
                      onChange={(e)=> setUsername(e.target.value)}
               />
               <Input placeholder='Password' 
                      type='password'
                      onChange={(e)=> setPassword(e.target.value)}
               />   
               <Button onClick={handleClick} disabled={isFetching}>
                  LOG IN
               </Button>
               {error && <p style={{color: "red",}}>Error! Incorrect email or password! </p>}
               <p>Don't have an account? <Link to={'/register'}>Register here!</Link></p>
            </Form>
         </Wrapper>
      </Container>
    </div>
  );
};

export default LoginPage;