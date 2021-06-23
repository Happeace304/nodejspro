const express = require('express');
const authRoute = require('./auth.route');
const router = express.Router();

const defaultApiRoute= '/api';
const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  }
];

defaultRoutes.forEach((route) => {
    const routePath= defaultApiRoute+ route.path;
    
    router.use(routePath, route.route);
});


module.exports = router;