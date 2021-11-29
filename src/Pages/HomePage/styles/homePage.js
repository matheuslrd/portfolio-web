import styled from 'styled-components';

const HomePage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap');

  #Home-Page {
    height: 100vh;
    padding-top: 8%;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  #luxbar {
    background: ${(props) => props.theme.color.secundary};
    padding: 0 2rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  .luxbar-menu-dark {
    background: ${(props) => props.theme.color.secundary};
    color: ${(props) => props.theme.color.text};
    overflow: hidden;
  }

  .luxbar-item {
    align-items: center;
    display: flex;
  }

  .luxbar-item:hover {
    background: none;
    color: #5d2de2;
    transition: 0.2s all ease-out;
  }

  .Title-Name {
    font-family: 'Merienda', cursive;
    font-size: 1.2em;
  }

  .Nav-Bar {
    width: 39%;
  }

  .Nav-Bar ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 100%;
  }

  .Light-Theme-Icon {
    margin-left: 0.3em;
    margin-top: 0.1em;
  }

  .Nav-Bar ul a {
    font-weight: 600;
    color: ${(props) => props.theme.color.text};
    text-decoration: none;
    transition: all 0.1s ease-out;
  }

  .Nav-Bar ul a:hover {
    color: #5d2de2;
  }

  /* CONTEÚDO PRINCIPAL */
  .Main-Content {
    display: flex;
    justify-content: space-around;
    height: 75%;
    width: 100%;
  }

  .Main-Content .Contacte-Me-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
  }

  .Introduction {
    font-size: 1.5em;
  }

  .Student-Web {
    font-weight: 500;
  }

  .Main-Content .Blob-svg {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 45%;
  }

  .Main-Content .Blob {
    position: relative;
    z-index: 0;
    height: 100%;
    display: flex;
    width: 100%;
  }

  .Container-Buttons-Contact {
    margin-top: 0.5em;
    margin-left: 8em;
    position: absolute;
    width: 15%;
  }

  .Btn-Contact {
    align-items: center;
    background: #e3d42d;
    border: none;
    border-radius: 0.3em;
    color: #202024;
    cursor: pointer;
    display: flex;
    font-size: 1em;
    font-weight: 600;
    height: 2.5em;
    justify-content: center;
    margin-bottom: 1em;
    outline: none;
    width: 100%;
  }

  .Btn-Contact:hover {
    background: #ffef3c;
  }

  .Btn-Whatsapp {
    background: #dbcd33;
  }

  .Btn-LinkedIn {
    background: #e3d42d;
  }

  .Btn-GitHub {
    background: #dbcd33;
  }

  .whats {
    margin-left: 0.3em;
  }

  .Scrool-Text {
    margin-bottom: 0.5em;
    margin-top: -1em;
  }

  .seta {
    align-items: center;
    color: #5d2de2;
    display: flex;
    flex-flow: column nowrap;
    height: 5.5em;
    justify-content: center;
    width: 100%;
  }

  .Mouse-Seta {
    color: #5d2de2;
  }

  @media screen and (max-width: 768px) {
    #Home-Page {
      padding-top: 0;
    }

    .Header {
      display: none;
    }

    .Nav-Bar {
      display: none;
    }

    .Main-Content {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;
      height: 78%;
      justify-content: space-evenly;
    }

    .Main-Content .Contacte-Me-Container {
      height: 30%;
      text-align: center;
      width: 80%;
    }

    .Blob-svg {
      height: 50%!important;
      width: 100%!important;
    }

    .Main-Content .Blob {
      display: none;
      height: 100%;
      width: 100%;
    }

    .Container-Buttons-Contact {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      margin-left: 0;
      height: 30%;
      width: 80%;
    }

    .Btn-Contact {
      height: 3em;
    }
  }
`;

export default HomePage;
