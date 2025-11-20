// import routes
const express = require("express");
// import hero section routes
const herosectionRoutes = require("./herosection.route");
// import install routes
const installRoutes = require("./install.routes");
// import about route
const aboutSection = require("./about.routes")

// initialize router
const router = express.Router();

// define routes
// install route
router.use(installRoutes);
// hero section route
router.use("/herosection", herosectionRoutes);
// about section route
router.use("/aboutsection",aboutSection)

// export the router
module.exports = router;