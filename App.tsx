import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { AppContainer } from 'ui/AppContainer';

const App = () => {
    return (
        <PaperProvider>
            <AppContainer />
        </PaperProvider>
    );
};

export default App;
