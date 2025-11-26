// services.controller.js
const{ getAllServices,
  createService,
  updateService,
  deleteService,
} = require("../services/services.service.js");

const getServicesController = async (req, res) => {
  try {
    const services = await getAllServices();
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createServiceController = async (req, res) => {
  try {
    const id = await createService(req.body);
    res.status(201).json({ success: true, message: "Service created", id });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateServiceController = async (req, res) => {
  try {
    await updateService(req.params.id, req.body);
    res.status(200).json({ success: true, message: "Service updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteServiceController = async (req, res) => {
  try {
    await deleteService(req.params.id);
    res.status(200).json({ success: true, message: "Service deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getServicesController,
  createServiceController,
  updateServiceController,
  deleteServiceController,
};