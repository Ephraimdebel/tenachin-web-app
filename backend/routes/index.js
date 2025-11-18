// import routes
const express = require("express");
// import hero section routes
const herosectionRoutes = require("./herosection.route");
// import install routes
const installRoutes = require("./install.routes");

// initialize router
const router = express.Router();

// define routes
// install route
router.use(installRoutes);
// hero section route
router.use("/herosection", herosectionRoutes);

// export the router
module.exports = router;