import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <FormStyled id="contact-form" method="post">
      <InputStyled>
        <label>Name:</label>
        <input type="text" />
      </InputStyled>

      <InputStyled>
        <label>Email:</label>
        <input type="email" />
      </InputStyled>

      <InputStyled>
        <label>Message:</label>
        <textarea rows="5" />
      </InputStyled>

      <button type="submit">Submit</button>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  button {
    margin-top: 1rem;
  }
`;

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60vh;

  label {
    color: white;
    padding-top: 1rem;
  }

  input,
  textarea {
    border: 2px solid #ccc;
    padding: 12px 20px;
    border-radius: 4px;
    width: 100%;

    &:focus {
      background-color: #416cd5;
      color: white;
    }
  }

  input {
    height: 100%;
  }

  textarea {
    height: 150%;
    box-align: border-box;
    resize: none;
  }
`;

export default ContactForm;
