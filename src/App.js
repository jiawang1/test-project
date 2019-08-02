import React, {Component} from 'react';
import './App.css';

import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/ShellBar";
import "@ui5/webcomponents/dist/DatePicker";

class App extends Component {

    render() {
        return (
            <div className="app">
                <ui5-shellbar
                    primary-title="Corporate Portal"
                    secondary-title="secondary title">
                </ui5-shellbar>
                <ui5-button className="add-todo-element-width" type="Emphasized">Add Todo</ui5-button>
                <ui5-table className="demo-table" id="table">
                    <ui5-table-column slot="columns" width="12em">
                        <span style={{lineHeight: '1.4rem'}}>Product</span>
                    </ui5-table-column>

                    <ui5-table-column slot="columns" min-width="800" popin-text="Supplier">
                        <span style={{lineHeight: '1.4rem'}}>Supplier</span>
                    </ui5-table-column>

                    <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin>
                        <span style={{lineHeight: '1.4rem'}}>Dimensions</span>
                    </ui5-table-column>

                    <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin>
                        <span style={{lineHeight: '1.4rem'}}>Weight</span>
                    </ui5-table-column>

                    <ui5-table-column slot="columns">
                        <span style={{lineHeight: '1.4rem'}}>Price</span>
                    </ui5-table-column>

                </ui5-table>
                <ui5-datepicker id="myDatepicker1"/>
            </div>
        );
    }
}

export default App;
