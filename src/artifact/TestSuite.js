import Logger from "../utility/Logger.js";

import BuildingTest from "./Building.test.js";
import BuildingCategoryTest from "./BuildingCategory.test.js";
import BuildingTypeTest from "./BuildingType.test.js";
import RaceTest from "./Race.test.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);
LOGGER.setInfoEnabled(false);

QUnit.start();