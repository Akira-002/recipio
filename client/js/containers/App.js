import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideMenue from './SideMenuePane/SideMenue';
import AddRecipe from './AddRecipe/AddRecipe';
import RecipeList from './RecipeList/RecipeList';
import OptionsAndUnitsList from './RecipeList/OptionsAndUnitsList';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="title-text">Recipio</div>
                <Router>
                    <SideMenue/>
                    <Route exact path='/' component={AddRecipe}/>
                    <Route path='/RecipeList' component={RecipeList}/>
                    <Route path='/OptionsAndUnitsList' component={OptionsAndUnitsList}/>
                </Router>
            </div>
        )
    }
}

export default App;