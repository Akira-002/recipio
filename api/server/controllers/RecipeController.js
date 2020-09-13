import Util from '../utils/Utils';
import db from '../src/models';
const Product = db.products;
const Op = db.Sequelize.Op;

const util = new Util();

class RecipeController {

  static async getAllRecipes(req, res) {
    try {
      const name = req.query.name;
      var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
      const allProducts = await Product.findAll({ where: condition });
      if (allProducts.length > 0) {
        util.setSuccess(200, 'Products retrieved', allProducts);
        return util.send(res)
      } else {
        util.setSuccess(200, 'No product found');
        return util.send(res)
      }
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addProduct(req, res, next) {
    if (!req.body.name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newProduct = req.body;
    try{
      const foundProduct = await Product.findOne({ where: newProduct });
      (async (foundProduct) => {
        if (foundProduct) {
          util.setError(400, 'Already exist this product');
          return util.send(res);
        } else {
          const createProduct = await Product.create(newProduct)
          util.setSuccess(201, 'Product added!', createProduct);
          return util.send(res);
        }
      })(foundProduct).catch(next);
    } catch (error) {
        util.setError(400, error.message);
        return util.send(res);
    }
  }

  static async getAProduct(req, res, next) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try{
      const theProduct = await Product.findOne({
        where: { id: Number(id) }
      });
      (async (theProduct) => {
        if (!theProduct) {
          util.setError(404, `Cannot find product with the id ${id}`);
          return util.send(res);
        } else {
          util.setSuccess(200, 'Found product', theProduct);
          return util.send(res);
        }
      })(theProduct).catch(next);
    } catch (error) {
      util.setError(404, 'Fuckin sequelize', error);
      return util.send(res);
    }
  }


  static async deleteProduct(req, res, next) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }
    try {
      const productToDelete = await Product.findOne({
        where: { id: Number(id) }
      });
      (async (productToDelete, id) => {
        if (productToDelete) {
          const deletedProduct = await Product.destroy({
            where: { id: Number(id)}
          });
          util.setSuccess(200, 'Product deleted', deletedProduct);
          return util.send(res);
        } else {
          util.setError(404, `Product with the id ${id} cannot be found`);
          return util.send(res);
        }
      })(productToDelete, id).catch(next);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}


export default RecipeController;