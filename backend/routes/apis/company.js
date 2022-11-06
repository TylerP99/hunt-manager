const express = require("express");
const router = express.Router();

const CompanyController = require("../../controllers/company-controller");

router.get("/", CompanyController.get_company_handler);

router.post("/", CompanyController.create_company_handler);

router.put("/:id", CompanyController.update_company_handler);

router.delete("/:id", CompanyController.delete_company_handler);


module.exports = router;