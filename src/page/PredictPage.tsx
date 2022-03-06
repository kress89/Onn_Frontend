import React, { useState } from 'react'
import PredictFormTyped from '../component/predictForm/PredictFormTyped';
import { SettingsTypeEnum, SettingType } from '../domain/formSetting';
import { Dropdown } from 'primereact/dropdown';


function PredictPage() {
    const [setting, setSetting] = useState<SettingType>(SettingsTypeEnum[0])

    function settingOnChange(e: {value: any}) {
        setSetting(e.value)
    }

    return (
        <>
            <Dropdown optionLabel="name" value={setting} options={SettingsTypeEnum} onChange={settingOnChange} placeholder="Choose form type"/>
            <PredictFormTyped setting={setting}/>
        </>
    )
}

export default PredictPage
