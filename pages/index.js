import styled from 'styled-components'
import Head from 'next/head';

import Widget from "../src/components/Widget"
import Footer from "../src/components/Footer"
import GitHubConer from "../src/components/GitHubConer"
import QuizBackground from "../src/components/QuizBackground"
import db from "../db.json"
import QuizLogo from '../src/components/QuizLogo';
import { useRouter } from 'next/router';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("")
  return(
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title> Quiz dos Jobs</title>
      </Head>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>Onde procurar um Emprego?</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento){
              infosDoEvento.preventDefault();
              router.push('/quiz?name=${name}');
              console.log("Sub via react")
            }}>
              <input onChange={function (infosDoEvento){
                console.log(infosDoEvento.target.value);
                setName(infosDoEvento.target.value)
              }}
              placeholder="Qual o seu nome ?"/>
              <button type="submit" disabled={name.length === 0}>
                Vamos Começar {name}?
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubConer projectUrl="https://github.com/victorvhs"/>
    </QuizBackground>
  );
}
