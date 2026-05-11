type RoutingConfigType = { 
    routes: {
        path: string;
        component: string
    }[]
}

const routingConfig: RoutingConfigType = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config: RoutingConfigType) => {};

createRoutes(routingConfig);
