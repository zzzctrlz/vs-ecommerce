import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/apiCalls";


const Container = styled.div`
   height: 100vh;
   width: 100%;
   background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/1167160/pexels-photo-1167160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
`

const Wrapper = styled.div`
width: max(250px, 43%);
height: auto;
   padding: 20px;
   background-color: white;
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
   width: max(150px, 43%);
   margin: 20px 13px 0 0;
   padding: 13px;
`
const PrivacyAgreement = styled.span`
   font-size: 13px;
   margin: 15px 0px;
`
const Button = styled.button`
   width: clamp(200px, 30%, 400px);
   //justify-self: center; didn't work
   //align-self: center; didn't work
   border: none;
   padding: 10px 13px;
   background-color: #d32f2f;
   color: white;
   cursor: pointer;
   margin-top: 10px;
   font-size: 23px;
   font-weight: 400;
`
const PasswordsDiv = styled.div`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
`
const EmailsDiv = styled.div`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
`

const RegisterPage = () => {
   const [username, setUsername] = useState("");
   const [firstpassword, setFirstpassword] = useState("");
   const [password, setPassword] = useState(""); //will be compared to see if same as above firstpassword
   const [email, setEmail] = useState("");
   const [passError, setPasserror] = useState(false);
   const dispatch = useDispatch();
   const { isFetching, error } = useSelector(state => state.user);

   const handleClick = (e) => {
      e.preventDefault();
      if (firstpassword === password) {
         register(dispatch, { username, password, email });
         // console.log("registering");
         setPasserror(false);
      }
      else { setPasserror(true) };
   }

   return (
      <div>
         <Container>
            <Wrapper>
               <Title>CREATE AN ACCOUNT!</Title>
               <Form>
                  <EmailsDiv>
                     <Input placeholder='Username'
                        onChange={e => setUsername(e.target.value)}
                        required
                     />
                     <Input placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                        required
                     />
                  </EmailsDiv>
                  <PasswordsDiv>
                     <Input placeholder='Password'
                        onChange={e => setFirstpassword(e.target.value)}
                        required
                     />
                     <Input placeholder='Confirm Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                     />
                  </PasswordsDiv>
                  <span style={{ color: "red", marginTop: "10px" }}>{passError && "Passwords don't match!"}</span>

                  <PrivacyAgreement>By creating an account, I agree to the processing
                     of my personal information in accordance with the <b><a href='#'>PRIVACY POLICY</a></b>
                  </PrivacyAgreement>

                  <Button
                     disabled={isFetching}
                     onClick={handleClick}
                  >
                     CREATE
                  </Button>
                  {error && <span style={{ color: "red", marginTop: "10px" }}>{error}</span>}
                  <br />

                  <p style={{ marginTop: "25px", marginLeft: "20px" }}><Link to='/login' style={{ textDecoration: "none" }}>Already have an account? Login here!</Link></p>

               </Form>
            </Wrapper>
         </Container>
      </div>
   )
}

export default RegisterPage