// app.js
import { createApp } from '@sveltejs/kit';

import { routes } from './app.routes.js';

const app = createApp({
    routes
});

export default app;