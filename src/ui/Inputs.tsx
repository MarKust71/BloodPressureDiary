import React from 'react';

import { BloodPressureInput } from 'ui/BloodPressureInput';

type Props = {
    values: {
        sys: string;
        dia: string;
        pul: string;
    };
    handleChange: (field: string) => void;
};

export const Inputs = ({ values, handleChange }: Props) => {
    const labels = ['1:', '2:', '3:'];
    return (
        <>
            {labels.map((item, index) => (
                <BloodPressureInput label={item} key={index} values={values} handleChange={handleChange} />
            ))}
        </>
    );
};
