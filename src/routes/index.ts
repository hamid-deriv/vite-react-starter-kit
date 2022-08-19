/* -------------------------------------------------------------------------- */
/* ROUTES MAP                                                                 */
/* -------------------------------------------------------------------------- */
/**
 * Layouts will be imported here and are available by Layout instance
 */
import * as Layout from '@/layouts';

/**
 * Components
 */
import App from '@/components/App';

/**
 * Routes
 */
const routes = [
    {
        name     : 'App',
        path     : '/',
        layout   : Layout.DefaultLayout,
        component: App,
        children : []
    }
];

export default routes;
