import React from 'react';
import { ChangeEvent } from 'react';

import { BloodPressureInput } from 'ui/BloodPressureInput';

import { InitialValues } from './AppContainer'

export interface Props {
    values: InitialValues,
    handleChange: (e: ChangeEvent<any>) => void
}

export const Inputs = ({values, handleChange}: Props) => {
    const labels = ['1:', '2:', '3:'];
    return (
        <>
            {labels.map((item, index) => (
                <BloodPressureInput label={item} key={index} values={values} handleChange={handleChange} />
            ))}
        </>
    );
};
