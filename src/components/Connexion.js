import React from 'react';

class Connexion extends React.Component{
  goToApp = e => {
    const pseudo= this.boxInput.value;

    this.context.router.transitionTo(`/box/${pseudo}`) 
  };

  render(){
    return(
      <div className="connexionBox">
        <form className="connexion" onSubmit={(e)=>this.goToApp(e)}>
          <h1>Ma Boite à recettes</h1>
          <input
            type="text"
            placeholder="Nom du chef"
            pattern="[A-Za-z-]{1,}"
            required
            ref={(input)=>{this.boxInput = input}}/>
          <button type="submit">GO</button>
        </form>
      </div>
    );
  };
  static contextTypes = {
    router: React.PropTypes.object
  };
}

export default Connexion;
