const express = require("express");
const router = express.Router();

const { authProtect } = require("../../middleware/auth");
const CompanyController = require("../../controllers/company-controller");

router.get("/", authProtect, CompanyController.get_companies_handler);

router.post("/", authProtect, CompanyController.create_company_handler);

router.put("/:id", authProtect, CompanyController.update_company_handler);

router.delete("/:id", authProtect, CompanyController.delete_company_handler);


module.exports = router;