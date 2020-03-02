import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login.js';
import Book from './pages/Book'
import List from './pages/List';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book
    })
);

export default Routes;