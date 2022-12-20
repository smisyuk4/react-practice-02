import { Component } from 'react';
import { Card } from 'components/Card';
import { MyCart } from "components/MyCart"
import {
    ContainerApp,
    MainTitle,
    Shop,
    Wrap,
} from './App.styled';

export class App extends Component {
    state = {};

    render() {
        return (
            <ContainerApp>
                <MainTitle>Sweet shop</MainTitle>
                <Shop>
                    <Wrap>
                        <h2>Order card</h2>
                        <Card />
                    </Wrap>
                    <Wrap>
                        <h2>My cart</h2>
                        <MyCart />
                    </Wrap>
                </Shop>
            </ContainerApp>
        );
    }
}



