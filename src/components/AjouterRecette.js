import React from 'react';

class ajouterRecette extends React.Component{

  creerRecette = (e) => {
    e.preventDefault();
    const recette = {
      nom: this.nom.value,
      image: this.image.value,
      ingredients: this.ingredients.value,
      instructions: this.instructions.value,
    };

    this.props.ajouterRecette(recette);
    this.recetteForm.reset();
  }

  render(){
    return(
      <div className="card">
        <form className="admin-form ajouter-recette"
          ref={input => this.recetteForm = input}
          onSubmit={(e)=>this.creerRecette(e)}
          >
          <input type="text" placeholder="Nom de la recette"
            ref={input => this.nom = input}
            />
          <input type="text" placeholder="Adresse de l'image"
              ref={input => this.image = input}
              />
          <textarea
            placeholder="Liste des ingredients séparés par une virgule"
            rows="3"
            ref={input => this.ingredients = input}
            ></textarea>
            <textarea
              placeholder="Liste des instructions (une par ligne)"
              rows="15"
              ref={input => this.instructions = input}
              ></textarea>
            <button type="submit">+ Ajouter une recette</button>
        </form>
      </div>
    );
  }

  static propTypes = {
    //ajouterRecette: React.PropTypes.func.isRequired
  }
}

export default ajouterRecette;
