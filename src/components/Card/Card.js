import { Component } from 'react';
import { FormCard, LabelCard } from './Card.styled';
import donat from '../../image/orderCard/donat.JPG';

export class Card extends Component {
    render() {
        return (
            <FormCard>
                <h3>Cake</h3>
                <img src={donat} width="100" height="50" alt="donats"></img>
                <LabelCard>
                    write your name
                    <input name="name" />
                    if need draw on donats
                </LabelCard>

                <LabelCard>
                    count
                    <input type="number" name="count" />
                    (box 6 pcs)
                </LabelCard>

                <LabelCard>
                    color
                    <select name="color">
                        <option>choose color</option>
                        <option value="green">green</option>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="dark">dark</option>
                    </select>
                </LabelCard>

                <fieldset>
                    <legend>Select size cake</legend>
                    <LabelCard>
                        S
                        <input type="radio" name="size" value="s" checked />
                    </LabelCard>

                    <LabelCard>
                        M
                        <input type="radio" name="size" value="m" />
                    </LabelCard>

                    <LabelCard>
                        L
                        <input type="radio" name="size" value="l" />
                    </LabelCard>
                </fieldset>

                <fieldset>
                    <legend>Select extra tasty</legend>
                    <LabelCard>
                        crispy
                        <input
                            type="checkbox"
                            name="extraTasty"
                            value="crispy"
                        />
                    </LabelCard>

                    <LabelCard>
                        gold chocolate
                        <input
                            type="checkbox"
                            name="extraTasty"
                            value="goldChocolate"
                        />
                    </LabelCard>

                    <LabelCard>
                        nutella
                        <input
                            type="checkbox"
                            name="extraTasty"
                            value="nutella"
                        />
                    </LabelCard>

                    <LabelCard>
                        M&M's
                        <input type="checkbox" name="extraTasty" value="m&ms" />
                    </LabelCard>
                </fieldset>

                <button type="submit">Add to my cart</button>
                <button type="button">Clear order list</button>
            </FormCard>
        );
    }
}
