import styled from "styled-components";

const COLOR = {
  body: "#282c34",
  form: "#123456",
};
const Container = styled.div`
  height: 30vh;
  background-color: ${COLOR.body};
  display: grid;
  place-items: center;
`;

const Form = styled.div`
  height: 30%;
  width: 15%;
  padding: 5vh 5vw;
  background-color: ${COLOR.form};
`;

const Wrapper = styled.div`
  position: relative;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  & ~ & {
    margin-top: 1em;
  }
  & input {
    width: 100%;
    height: 1.8em;
    line-height: 1.8em;
    border: none;
    outline: none;
    background-color: transparent;
    color: #fff;
  }

  & span {
    position: absolute;
    pointer-events: none;
    left: 0.2em;
    top: 0;
    transition: 0.5s;
  }

  & input:not(:placeholder-shown) ~ span,
  input:focus ~ span {
    font-size: 0.7em;
    transform: translateY(-10px);
    background-color: ${COLOR.form};
    padding: 0, 0.2em;
  }
`;
const CusInput = ({ name }) => {
  return (
    <Wrapper>
      <input type="text" required={true} placeholder={" "} />
      <span>{name}</span>
    </Wrapper>
  );
};
const ShowInput = () => {
  return (
    <Container>
      <Form>
        <CusInput name="email" />
        <CusInput name="message" />
      </Form>
    </Container>
  );
};

export default ShowInput;
