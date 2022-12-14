const express = require("express");
const router = express.Router();

const { protectRoute } = require("../../middleware/auth");
const CompanyController = require("../../controllers/company-controller");

router.get("/", protectRoute, CompanyController.get_companies_handler);

router.post("/", protectRoute, CompanyController.create_company_handler);

router.put("/:id", protectRoute, CompanyController.update_company_handler);

router.put("/addConnection/:id", protectRoute, CompanyController.update_company_handler);

router.put("/addPosition/:id", protectRoute, CompanyController.update_company_handler);

router.delete("/:id", protectRoute, CompanyController.delete_company_handler);


module.exports = router;