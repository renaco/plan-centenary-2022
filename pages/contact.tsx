import Link from 'next/link';
import Layout from '../components/Layout';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default () => (
  <Layout title="Contact | Website">
    <h2>Contact me!</h2>
    <p>Use this form for contact me...</p>
    <StyledForm action="">
      <input type="text"/>
      <label htmlFor=""></label>
      <input type="text"/>
      <label htmlFor=""></label>
      <input type="text"/>
      <label htmlFor=""></label>
      <input type="text"/>
      <label htmlFor=""></label>
      <input type="text"/>
      <label htmlFor=""></label>
      <button>Send me</button>
    </StyledForm>
    <p><Link href='/'><a>Go home</a></Link></p>
  </Layout>
)
