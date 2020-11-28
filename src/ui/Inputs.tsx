import React from 'react';

import { PressureInput } from 'ui/PressureInput';

export const Inputs = () => {
    const labels = ['1:', '2:', '3:'];
    return (
        <>
            {labels.map((item, index) => (
                <PressureInput label={item} key={index} />
            ))}
        </>
    );
};
