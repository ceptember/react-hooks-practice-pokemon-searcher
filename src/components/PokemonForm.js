import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddNew}) {

  const [nameInput, setNameInput] = useState('');
  const [hpInput, setHpInput] = useState('');
  const [frontInput, setFrontInput] = useState('');
  const [backInput, setBackInput] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    const newPokemonObj={
      name: nameInput,
      hp: hpInput,
      sprites: {
        front: frontInput,
        back: backInput
      }
    }

    fetch('http://localhost:3001/pokemon',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPokemonObj)
    })
      .then(resp => resp.json())
      .then(addedPokemon => onAddNew(addedPokemon))


    setNameInput('');
    setHpInput('');
    setFrontInput('');
    setBackInput('');


  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={nameInput} onChange={ (e) => setNameInput(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hpInput} onChange={ e => setHpInput(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontInput}
            onChange={e => setFrontInput(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backInput}
            onChange={e => setBackInput(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
