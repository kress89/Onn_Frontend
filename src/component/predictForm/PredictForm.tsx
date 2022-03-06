import React from 'react'
import {InputText} from "primereact/inputtext"
import { Button } from 'primereact/button';

/*
    show 1x text input fields "Inputs"
    show 1x text input fields "Outputs"
    show 1x file upload field "Train data CSV file"
    show 1x file upload field "Test data CSV file"
*/
function PredictForm() {

    function handleSubmit(e: any) {
        e.preventDefault()
        //todo handle file uploading
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="inputs">Inputs</label>
                <div>
                    <InputText id="inputs" name="inputs" />
                </div>
            </div>
            
            <div>
                <label htmlFor="outputs">Outputs</label>
                <div>
                    <InputText id="outputs" name="outputs" />
                </div>
            </div>

            <div>
                <label htmlFor="trainData">Train data CSV file</label>
                <div>
                    <input type="file" name="trainData" />
                </div>
            </div>

            <div>
                <label htmlFor="testData">Test data CSV file</label>
                <div>
                    <input type="file" name="testData"/>
                </div>
            </div>

            <Button label="Submit" />
        </form>
    )
}

export default PredictForm
