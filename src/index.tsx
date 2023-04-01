import React from "react";
import ReactDOM from "react-dom";

type LasProps = {
  edad: number;
};

function UnComponente(props: LasProps) {
  return <div>Tu edad es {props.edad}</div>;
}

class ShowQuote extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      quoteData: props.data,
    };
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Cotización:</h1>
        <div>{JSON.stringify(this.state.quoteData)}</div>
      </div>
    );
  }
}

class MyButton extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button style={{ backgroundColor: this.props.color }}>
        {this.props.children}, {this.props.texto}
      </button>
    );
  }
}

class Home extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      edad: 3,
    };
  }
  render() {
    const persona = {
      nombre: "Lucy",
      apellido: "Akerman",
      pasatiempos: "modelado",
      amigas: ["Sirena", "Dulci", "Beta"],
    };
    const cuantas =
      persona.amigas.length > 2 ? (
        <MyButton color="blanchedalmond">Muchas</MyButton>
      ) : (
        "Algunas"
      );
    const esLinda = true;
    const changeState = () => {
      this.setState({
        edad: 3.5,
      });
    };
    return (
      <div onClick={changeState}>
        Hola {persona.nombre + " " + persona.apellido}.
        <UnComponente edad={this.state.edad} />
        <br />
        {esLinda && "Sos muy linda chica"}. Tus amigas son {cuantas}
        :
        <br />
        <br />
        {persona.amigas.map((item) => (
          <MyButton color="#ACFF76" key={item}>
            {item}
          </MyButton>
        ))}{" "}
        son muy lindas chicas.
        <br />
        <br />
        <MyButton color="#FFAC76" texto="Actualiza edad">
          Aceptar
        </MyButton>
        <ShowQuote data={{price:12}}></ShowQuote>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("hello-example"));
