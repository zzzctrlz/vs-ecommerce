import styled from "styled-components"

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
   width: 43%;
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
   min-width: 43%;
   margin: 20px 13px 0 0;
   padding: 13px;
`
const PrivacyAgreement=styled.span`
   font-size: 13px;
   margin: 15px 0px;
`
const Button = styled.button`
   width: 30%;
   //justify-self: center; didn't work
   //align-self: center; didn't work
   border: none;
   padding: 10px 13px;
   background-color: #d32f2f;
   color: white;
   cursor: pointer;
   margin-top: 10px;
   margin-left: 10px;
   font-size: 23px;
   font-weight: 400;
`


const Register = () => {
  return (
    <div>
      <Container>
         <Wrapper>
            <Title>CREATE AN ACCOUNT!</Title>
            <Form>
               <Input placeholder='First name' />
               <Input placeholder='Last name' />
               <Input placeholder='Email' />
               <Input placeholder='Password' />
               <Input placeholder='Confirm Password' />
               <PrivacyAgreement>By creating an account, I agree to the processing 
                  of my personal information in accordance with the <b><a href='#'>PRIVACY POLICY</a></b>
               </PrivacyAgreement>
               <Button>CREATE</Button>
            </Form>
         </Wrapper>
      </Container>
    </div>
  )
}

export default Register