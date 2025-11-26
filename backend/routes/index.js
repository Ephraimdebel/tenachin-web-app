// import routes
const express = require("express");
// import hero section routes
const herosectionRoutes = require("./herosection.route");
// import install routes
const installRoutes = require("./install.routes");
// import about route
const aboutSection = require("./about.routes")
// import feature routes
const featureRoutes = require("./feature.routes");
// import call to action routes
const callToActionRoutes = require("./calltoaction.routes");
// import services routes
const servicesRoutes = require("./services.routes");
// initialize router
const router = express.Router();

// define routes
// install route
router.use(installRoutes);
// hero section route
router.use("/herosection", herosectionRoutes);
// about section route
router.use("/aboutsection",aboutSection)
// feature section route
router.use("/featuresection", featureRoutes);
// call to action route
router.use("/calltoaction", callToActionRoutes);
// services route
router.use("/services", servicesRoutes);
// export the router
module.exports = router;