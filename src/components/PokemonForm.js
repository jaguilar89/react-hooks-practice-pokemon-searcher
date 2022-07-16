import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const form = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  };

  const [formData, setFormData] = useState(form);

  function handleInput(event) {
    setFormData({
      ...formData,
      name: event.target.value,
      hp: event.target.value,
      sprites: {
        front: event.target.value,
        back: event.target.value
      }
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    const newPokemon = await res.json();
    onAddPokemon(newPokemon)
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={handleInput}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp"
            onChange={handleInput} 
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={handleInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
