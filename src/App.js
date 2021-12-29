import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rows : 5,
      maincolor: '#000000',
    }
    this.drawTable = this.drawTable.bind(this);
  }
  componentDidMount() {
    this.drawTable(this.state.rows);
  }
 
  handleSubmit(e) {
    //hay un bug se debe hacer doble click para que funcione
    e.preventDefault();
    let rows = e.target.number.value;
    if(rows < 0) {
      alert("Please enter a positive number");
      return false;
    }
    if (rows > 10) {
      alert("Please enter a number less than 10");
      return false;
    }
    this.setState({
      rows : rows,
    });
    this.drawTable(this.state.rows);
  }
  drawTable(rows) {
    //delete table
    let table = document.getElementById('table');
    table.innerHTML = '';
    for (let i = 0; i < rows; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < rows; j++) {
        let td = document.createElement('td');
        td.style.border = '1px solid black';
        td.style.height = '40px';
        td.style.width = '40px';
        td.style.backgroundColor = '#000000';
        td.onclick = () => {
          td.style.backgroundColor = this.state.maincolor;
        }
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    
  }
  handleClickColor(e){
    let divs = document.getElementsByClassName('color');
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.border = 'none';
    }
    let div = document.getElementById(e.target.id);
    div.style.border = '5px solid yellow';
    this.setState({
      maincolor: e.target.id,
    });
    console.log(this.state);
  }

  render() {
    
    return (
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <label>
            NUMERO DE FILAS Y COLUMMNAS:
            <input type="number" name="number" />
          </label>
          <button type="submit">Dibujar Grilla</button>
        </form>
        <table id="table"></table>
        <div id="paleta" style={{display: 'flex'}}>
          <div onClick={(e)=>this.handleClickColor(e)} id='#000000' className="color" style={{backgroundColor: '#000000', height : 40, width: 40}}></div>
          <div onClick={(e)=>this.handleClickColor(e)} id='#0000ff' className="color" style={{backgroundColor: '#0000ff', height : 40, width: 40}}></div>
          <div onClick={(e)=>this.handleClickColor(e)} id='#00ff00' className="color" style={{backgroundColor: '#00ff00', height : 40, width: 40}}></div>
        </div>
        <p>No alcanzò para el css jeje, hay un bug se debe hacer 2 veces click al boton dibujar grilla</p>
      </div>
    )
  }
}

