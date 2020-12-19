import React from 'react';

import { BloodPressureInput } from 'ui/BloodPressureInput';

import { InputsData } from './AppContainer';

interface Props {
    handleInputsData: (data: InputsData) => void;
}

export const Inputs = ({ handleInputsData }: Props) => {
    const labels = ['1:', '2:', '3:'];

    return (
        <>
            {labels.map((item, index) => (
                <BloodPressureInput label={item} key={index} handleData={handleInputsData} />
            ))}
        </>
    );
};
