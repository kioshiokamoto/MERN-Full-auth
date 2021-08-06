const ShoppingCar = require("../models/shoppingCarModel");
const Shop = require("../models/shopModel");
const Posts = require("../models/postModel");
const shoppingCarCtrl = {
  addToCar: async (req, res) => {
    try {
      const { usuario, productos, monto_total } = req.body;

      const checkUser = await ShoppingCar.findOne({ usuario });
      if (checkUser) {
        await ShoppingCar.deleteOne({ usuario });
      }

      const nuevoCarrito = new ShoppingCar({
        usuario,
        productos,
        monto_total,
      });
      await nuevoCarrito.save();
      res
        .status(201)
        .json({ msg: "Post creado correctamente", datos: nuevoCarrito });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getCartItems: async (req, res) => {
    try {
      const { usuario } = req.params;

      const shoppingCartCompressed = await ShoppingCar.findOne({ usuario });

      let productos = await Promise.all(
        shoppingCartCompressed.productos.map(async ({ producto, cantidad }) => {
          const productWithData = await Posts.find({ _id: producto });
          return {
            cantidad,
            productWithData: productWithData[0],
          };
          //   productos = [...productos, { cantidad, productWithData }];
        })
      );

      res.status(200).json({
        msg: "Se retorna informacion de carrito",
        datos: {
          productos,
          monto_total: shoppingCartCompressed.monto_total,
          usuario: shoppingCartCompressed.usuario,
        },
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  buyArticles: async (req, res) => {
    try {
      console.log('body: ',req.body)
      const { usuario, productos } = req.body;

      let checkUser = await Shop.findOne({ usuario });
      if (checkUser) {
        checkUser.productos = [...checkUser.productos, ...productos];
        await checkUser.save();
        res.status(200).json({
          msg: "Se registra compras",
          datos: checkUser,
        });
      } else {
        const newShop = new Shop({
          usuario,
          productos,
        });
        await newShop.save();
        res.status(200).json({
          msg: "Se registra compras",
          datos: newShop,
        });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getPurchasedArticles: async (req, res) => {
    try {
      const { usuario } = req.params;

      const purchasedArticlesCompressed = await Shop.findOne({ usuario });

      let productos = await Promise.all(
        purchasedArticlesCompressed.productos.map(
          async ({ producto, cantidad, precio }) => {
            const productWithData = await Posts.find({ _id: producto });
            return {
              cantidad,
              precio_venta: precio,
              productWithData: productWithData[0],
            };
            //   productos = [...productos, { cantidad, productWithData }];
          }
        )
      );

      res.status(200).json({
        msg: "Se retorna informacion de carrito",
        datos: {
          productos,
          usuario: purchasedArticlesCompressed.usuario,
        },
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = shoppingCarCtrl;
