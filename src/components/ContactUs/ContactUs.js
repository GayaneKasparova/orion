import React from "react";
import styled from "styled-components"
import {theme} from "../../styles/theme";
import TitledSection from "../common/TitledSection/TitledSection";
import {graphql, useStaticQuery} from "gatsby";
import {StyledBtn} from "../../styles/globalStyles";

const ContactUs = ({title, bgImage}) => {

    const contactUsForm = useStaticQuery(graphql`
        query ContactUsFormQuery {
            datoCmsContactUsForm {
                nameFieldTitle
                emailFieldTitle
                phoneFieldTitle
                textFieldTitle
                submitBtnText
            }
        }
    `)

    const {
        datoCmsContactUsForm:
            {
                nameFieldTitle,
                emailFieldTitle,
                phoneFieldTitle,
                textFieldTitle,
                submitBtnText
            }
    } = contactUsForm

    return (
        <Banner bgImage={bgImage}>
            <TitledSection title={title} id={'contactUs'}>
                <ContactForm netlify method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <InputField
                        placeholder={nameFieldTitle}
                        name={'name'}
                        type={'text'}
                    />
                    <InputField
                        placeholder={emailFieldTitle}
                        name={'email'}
                        type={'email'}
                    />
                    <InputField
                        placeholder={phoneFieldTitle}
                        name={'phone'}
                        type={'tel'}
                    />
                    <TextArea
                        placeholder={textFieldTitle}
                        name={'message'}
                    />
                    <SubmitBtn
                        type='submit'>
                        {submitBtnText}
                    </SubmitBtn>
                </ContactForm>
            </TitledSection>
        </Banner>
    )
}


const Banner = styled.div`
{
  padding: 30px 0;
  display: flex;
  align-items: center;
  background-image: url("${props => props.bgImage.url}");
  background-size: cover;
  background-position: center;
  text-align: center;

  ${theme.media.md} {
    padding: ${theme.space.xl}px 0;
    text-align: left;
    height: calc(100vh - 90px);
  }

  ${theme.media.lg} {
    padding: ${theme.space.xxl}px 0;
  }

  ${theme.media.xl} {
    padding: 120px 0;
  }

  h2 {
    color: white;
  }
}
`

const ContactForm = styled.form`
  font-size: 16px;
`

const InputField = styled.input`
  width: 100%;
  min-height: 48px;
  margin: 8px auto;
  padding: 0 8px;
  background: #FFFFFF;
  border: 1px solid #AAB3C1;
  box-sizing: border-box;
  border-radius: 3px;
`
const TextArea = styled.textarea`
  width: 100%;
  min-height: 160px;
  resize: vertical;
  max-height: 600px;
  padding: 16px 8px;
`

const SubmitBtn = styled.button`
  ${StyledBtn};
  
  margin-top: 16px;
  border: unset;
  width: 100%;
`
export default ContactUs