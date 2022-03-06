import React from 'react'
import { SettingType } from '../../domain/formSetting'
import CustomPredictForm from './CustomPredictForm'
import PredictForm from './PredictForm'

interface PredictFormTypedProps {
    setting: SettingType
}
function PredictFormTyped({setting}: PredictFormTypedProps) {
    switch(setting.id){
        case 1:
            return <PredictForm />
        case 2:
            return <CustomPredictForm />
        default: 
            return <>Invalid settings!</>
    }
}

export default PredictFormTyped
