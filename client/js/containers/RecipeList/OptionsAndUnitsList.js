import React from 'react';
import { seasonings, foodstuffs, foodstuffUnits, seasoningUnits } from '../../sample/sample';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const OptionsAndUnitsList = () => {
    // export const ProductList = ({seasonings, foodstuffs}) => {
    return(
        <div>
            <div className="optionsListSetting">
                <div className="foodstuffoptionsListPane">
                    <div className="optionsAndUnitsListTitle">Foodstuff</div>
                    {foodstuffs.map((foodstuff) =>
                        <div className="listItem" key={foodstuff.id}>
                            <Checkbox
                                key={foodstuff.id}
                                // name={String(product.id)}
                                // onChange={handleCheck}
                                // inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <span>{foodstuff.text}</span>
                        </div>
                    )}
                </div>
                <div className="seasoningOptionsListPane">
                    <div className="optionsAndUnitsListTitle">Seasoning</div>
                    {seasonings.map((seasoning) =>
                        <div className="listItem" key={seasoning.id}>
                            <Checkbox
                                key={seasoning.id}
                                // name={String(product.id)}
                                // onChange={handleCheck}
                                // inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <span>{seasoning.text}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="unitsListSetting">
                <div className="foodstuffUnitsListPane">
                    <div className="optionsAndUnitsListTitle">Foddstuff<br/>Units</div>
                    {foodstuffUnits.map((foodstuffUnit) =>
                        <div className="listItem" key={foodstuffUnit.id}>
                            <Checkbox
                                key={foodstuffUnit.id}
                                // name={String(product.id)}
                                // onChange={handleCheck}
                                // inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <span>{foodstuffUnit.text}</span>
                        </div>
                    )}
                </div>
                <div className="seasoningUnitsListPane">
                    <div className="optionsAndUnitsListTitle">Seasoning<br/>Units</div>
                    {seasoningUnits.map((seasoningUnit) =>
                        <div className="listItem" key={seasoningUnit.id}>
                            <Checkbox
                                key={seasoningUnit.id}
                                // name={String(product.id)}
                                // onChange={handleCheck}
                                // inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <span>{seasoningUnit.text}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="checkButton">
                <Button id="button-cheked"
                    // onClick={this.handleClickToDelete}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default OptionsAndUnitsList;