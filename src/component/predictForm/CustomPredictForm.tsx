import React from 'react'
import {InputText} from "primereact/inputtext"
import { Button } from 'primereact/button';

/*
  show 1x text input fields "Inputs"
	  show 1x text input fields "Outputs"
	  show 1x text input field "Max. iterations"
	  show 1x twxt input field "Normalization min. value"
	  show 1x text input field "Normalization max. value"
	  show 1x text input field "Learning rate"
	  show 1x text input field "Max. error"
	  show 1x text input field "Momentum"
	  show 1x file upload field "Train data CSV file"
	  show 1x file upload field "Test data CSV file"
*/
function CustomPredictForm() {
  
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
                <label htmlFor="iterationsMax">Max. iterations</label>
                <div>
                    <InputText id="iterationsMax" name="iterationsMax" />
                </div>
            </div>
            
            <div>
                <label htmlFor="normalizationMin">Normalization min. value</label>
                <div>
                    <InputText id="normalizationMin" name="normalizationMin" />
                </div>
            </div>
            
            <div>
                <label htmlFor="normalizationMax">Normalization max. value</label>
                <div>
                    <InputText id="normalizationMax" name="normalizationMax" />
                </div>
            </div>
            
            <div>
                <label htmlFor="learningRate">Learning rate</label>
                <div>
                    <InputText id="learningRate" name="learningRate" />
                </div>
            </div>
            
            <div>
                <label htmlFor="maxError">Max. error</label>
                <div>
                    <InputText id="maxError" name="maxError" />
                </div>
            </div>
            
            <div>
                <label htmlFor="momentum">Momentum</label>
                <div>
                    <InputText id="momentum" name="momentum" />
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
                    <input type="file" name="testData" />
                </div>
            </div>

            <Button label="Submit" />
        </form>
    )
}

export default CustomPredictForm
