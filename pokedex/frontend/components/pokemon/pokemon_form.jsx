import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      image_url: "",
      moves: {}
    };

    this.update = this.update.bind(this);
    this.update_moves = this.update_moves.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(property) {
    if (property === "move_one") {
      return e => this.setState({[this.state.moves[0]]: e.target.value});
    } else if (property === "move_two") {
      return e => this.setState({[this.state.moves[1]]: e.target.value});
    } else
    return e => this.setState({[property]: e.target.value});
  }

  update_moves(e) {
    this.setState({
      moves: Object.assign(
        {}, this.state.moves, {[e.target.id]: e.target.value})
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.makeSinglePokemon(this.state);
  }



  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          Name:
          <input type="text" onChange={this.update('name')} />
          <br />
          Attack:
          <input type="text" onChange={this.update('attack')} />
          <br />
          Defense:
          <input type="text" onChange={this.update('defense')} />
          <br />
          Pokemon Type:
          <input type="text" onChange={this.update('poke_type')} />
          <br />
          Image url:
          <input type="text" onChange={this.update('image_url')} />
          <br />
          Move one:
          <input type="text" onChange={this.update("move_one")} />
          <br />
          Move Two:
          <input type="text" onChange={this.update("move_two")} />
          <br />

          <input type="submit" value="create poke" />
        </form>
      </div>
    );
  }
}

export default PokemonForm;
