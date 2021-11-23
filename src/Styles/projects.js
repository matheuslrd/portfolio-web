import styled from 'styled-components';

const Projects = styled.div`
  #Projects {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  .Title-Projects {
    font-size: 2em;
    font-weight: 500;
    text-align: center;
    padding: 2em 0 1em;
    width: 100%;
  }

  .Projects-Container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 83%;
  }

  .Project {
    text-align: start;
    background: ${(props) => props.theme.color.secundary};
    margin: 1em;
    padding: 2em 1.5em;
    font-size: 0.9em;
    border-radius: 0.3em;
    height: 15em;
    width: 30%;
  }

  .Title-Project {
    font-weight: 400;
    margin-bottom: 0.5em;
    height: 17%;
    width: 100%;
  }

  .Abstract-Project {
    font-weight: 500;
    height: 55%;
    width: 100%;
  }

  .Buttons-Project {
    display: flex;
    justify-content: space-between;
    height: 25%;
    width: 100%;
  }

  .link-btn-project {
    width: 45%;
  }

  .Btn-Project-Links {
    align-items: center;
    background: #5929cf;
    border: none;
    border-radius: 0.3em;
    color: #fdfdfd;
    cursor: pointer;
    display: flex;
    height: 2.3em;
    justify-content: center;
    outline: none;
    transition: 0.1s all ease-out;
    width: 100%;
  }

  .Btn-Project-Links:hover {
    background: #351980;
  }

  .Btn-Project-Title {
    margin-left: 0.3em;
  }

  .Repositories-On-GitHub {
    text-align: center;
    padding: 1.28em;
    width: 100%;
  }

  .Link-Repositories-On-GitHub {
    color: #5929cf;
    transition: 0.1s all ease-out;
  }

  .Link-Repositories-On-GitHub:hover {
    color: #754be7;
  }

  @media screen and (max-width: 768px) {
    .Projects-Container {
      display: flex;
      flex-flow: row wrap;
      width: 98%;
    }

    .Title-Projects {
      padding-bottom: 0.5em;
    }

    .Project {
      font-size: 0.7em;
      height: 17em;
      padding: 1.3em;
      width: 43%;
    }

    .Buttons-Project {
      display: flex;
      flex-flow: column nowrap;
    }

    .Abstract-Project {
      font-size: 0.95em;
      height: 45%;
    }

    .Buttons-Project {
      height: 35%;
    }

    .link-btn-project {
      width: 100%;
    }

    .Btn-Project-Links {
      font-size: 0.9em;
      height: 2.5em;
    }
  }

`;

export default Projects;
