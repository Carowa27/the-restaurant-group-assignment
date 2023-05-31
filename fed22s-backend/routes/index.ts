const router = express.Router();

const cartRoutes = require("./cartRoutes");
const productRoutes = require("./productRoutes");

router.use("/cart", cartRoutes);
router.use("/products", productRoutes);

module.exports = router;
