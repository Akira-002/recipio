import React, { Component } from 'react';
import { foodstuffs, seasonings, foodstuffUnits, seasoningUnits, } from '../../sample';
import {  addedFoodstuffs, addedSeasonings, methodsentences } from '../../addingSmaple';

//material-ui objects
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@material-ui/icons/Image';


export const MassSelector = ({seasoningsAndAmounts, onChange, value}) => {
    const handleSelectedSeasoning = (e) => {
        onChange(seasoningsAndAmounts.find((substanceAmount) => substanceAmount.id === e.target.value, 10))
    };
    return(
        <TextField
            select
            value={value ? value.id : ""}
            onChange={handleSelectedSeasoning}

        >
            <MenuItem value=""></MenuItem>
            {seasoningsAndAmounts.map((substanceAmount) => (
                <MenuItem key={substanceAmount.id} value={substanceAmount.id}>
                    {substanceAmount.text}
                </MenuItem>
            ))}
        </TextField>
    )
}

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodstuffName: "",
            seasoningName: "",
            choosedAmount: "",
            foodstuffAmount: "",
            seasoningAmount: "",
            dishTitle: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClickAddFoodstuffs = this.handleClickAddFoodstuffs.bind(this);
        this.handleClickAddSeasonings = this.handleClickAddSeasonings.bind(this);
    }

    handleChange(e) {
        this.setState({dishTitle: e.target.value});
    }

    handleClickAddFoodstuffs() {
        this.setState(state => {
            state.foodstuffName = "";
            state.foodstuffAmount = "";
            state.choosedFoodstuffUnit = "";
        }, () => { this.forceUpdate() })
    }

    handleClickAddSeasonings() {
        this.setState(state => {
            state.seasoningName = "";
            state.seasoningAmount = "";
            state.choosedSeasoningUnit = "";
        }, () => { this.forceUpdate() })
    }


    render() {
        return(
            <div>
                <div className="dishTitleField">
                    <TextField
                        id="standard-basic"
                        className="dishTitle"
                        name="dishname"
                        value={this.state.dishTitle}
                        label="Name of the dish"
                        onChange={this.handleChange}
                        variant="outlined"
                    />
                </div>
                <div>
                    <div className="two-row-setting">
                        {/* add pane */}
                        <div className="addPaneSetting">
                            <div className="foodstuffPane">
                                <div>
                                    <div className="selectorPane">
                                        <div className="seasoningSelector">
                                            <MassSelector
                                                seasoningsAndAmounts={foodstuffs}
                                                onChange={(foodstuffName) => { this.setState({foodstuffName}) }}
                                                value={this.state.foodstuffName}
                                            />
                                        </div>
                                    </div>
                                    <div className="selectorPane">
                                        <div className="amountSelector">
                                            <TextField
                                                className="amountField"
                                                label="Amounts"
                                                value={this.state.foodstuffAmount || ""}
                                                onChange={(e) => { this.setState({foodstuffAmount: e.target.value}) }}
                                                type="number"
                                                // InputLabelProps={{ shrink: true, }}
                                                inputProps={{ min: 0, max: 5, step: "0" }}
                                            />
                                            <MassSelector
                                                seasoningsAndAmounts={foodstuffUnits}
                                                onChange={(choosedFoodstuffUnit) => { this.setState({choosedFoodstuffUnit}) }}
                                                value={this.state.choosedFoodstuffUnit}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        onClick={this.handleClickAddFoodstuffs}
                                    >
                                        Add foodstuffs
                                    </Button>
                                </div>
                            </div>
                            <div className="seasoningPane">
                                <div>
                                    <div className="selectorPane">
                                        <div className="seasoningSelector">
                                            <MassSelector
                                                seasoningsAndAmounts={seasonings}
                                                onChange={(seasoningName) => { this.setState({seasoningName}) }}
                                                value={this.state.seasoningName}
                                            />
                                        </div>
                                    </div>
                                    <div className="selectorPane">
                                        <div className="amountSelector">
                                            <TextField
                                                className="amountField"
                                                label="Amounts"
                                                value={this.state.seasoningAmount || ""}
                                                onChange={(e) => { this.setState({seasoningAmount: e.target.value}) }}
                                                type="number"
                                                // InputLabelProps={{ shrink: true, }}
                                                inputProps={{ min: 0, max: 5, step: "0" }}
                                            />
                                            <MassSelector
                                                seasoningsAndAmounts={seasoningUnits}
                                                onChange={(choosedSeasoningUnit) => { this.setState({choosedSeasoningUnit}) }}
                                                value={this.state.choosedSeasoningUnit}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        onClick={this.handleClickAddSeasonings}
                                    >
                                        Add seasonings
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="methodSentence">
                        <TextField
                            className="methodSentenceWith"
                            id="standard-full-width"
                            placeholder="Method Sentence"
                            InputLabelProps={{ shrink: true }}
                        />
                        <div>
                            <Button
                                className="methodSentenceAddButton"
                                onClick={this.handleClickAddSeasonings}
                            >
                                Add method sentence
                            </Button>

                        </div>
                    </div>
                    <div className="addImgButtonSetting">
                        <div className="addImgButton">
                            <IconButton aria-label="addimg">
                                <ImageIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>

                {/* adding list pane */}
                <div className="listPaneSetting">
                    <div className="listPane">
                        <div className="listPaneTitle">Foodstuff List</div>
                        {addedFoodstuffs.map((addFoodstuff) => (
                            <div key={addFoodstuff.id}>
                                {addFoodstuff.foodsthuffName}
                                {addFoodstuff.foodstuffAmount}
                                {addFoodstuff.foodstuffunit}
                            </div>
                        ))}
                    </div>
                    <div className="listPane">
                        <div className="listPaneTitle">Seasoning List</div>
                        {addedSeasonings.map((addedSeasoning) => (
                            <div key={addedSeasoning.id}>
                                {addedSeasoning.seasoningName}
                                {addedSeasoning.seasoningAmount}
                                {addedSeasoning.seasoningUnit}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="listMethodPaneSetting">
                    <div className="listMethodPane">
                        <div className="listPaneTitle">Method Sentence</div>
                        {methodsentences.map((methodsentence) => (
                            <div key={methodsentence.id}>
                                <span>{methodsentence.num}. </span>
                                <span>{methodsentence.sentence}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default AddRecipe;