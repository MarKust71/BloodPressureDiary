import React from 'react';

import { BloodPressureInput } from 'ui/BloodPressureInput';

export const Inputs = () => {
    const labels = ['1:', '2:', '3:'];
    return (
        <>
            {labels.map((item, index) => (
                <BloodPressureInput label={item} key={index} />
            ))}
        </>
    );
};
