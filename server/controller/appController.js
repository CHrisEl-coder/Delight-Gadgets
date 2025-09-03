import productRoutes from "../routes/productRoutes.js";
import userRoutes from "../routes/userRoutes.js"
import auth from "../routes/auth.js"

const appController = (app) => {
    app.get('/', (req, res) => {
        res.send('Api is running smoothly, and appController is steady')
    });

    app.get('/health', (_req, res) => res.json({ ok: true }));

    app.use("/delight/products", productRoutes);
    app.use("/delight/auth", auth);
    app.use("/delight/users", userRoutes)
};


export default appController;