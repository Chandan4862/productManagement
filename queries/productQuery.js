const { deleteProduct } = require("../handlers/productsHandler");

let query = {
    saveProduct: `
    INSERT INTO products(
    vsProductName,
    vsProductDesc,
    vsStatus ) VALUES (?, ? , ? ) `,
    /*-----------------------------------------------------------------------*/
    getProductList: `SELECT 
    p.pklProductId AS productId,
    p.vsProductName AS productName,
    p.vsProductDesc AS productDescription
    FROM products p ORDER BY p.vsProductName`,
    /*-----------------------------------------------------------------------*/
    deleteProduct: `DELETE FROM products
    WHERE pklProductId = ? `,
    /*-----------------------------------------------------------------------*/
    updateProduct: `UPDATE products p
    SET p.vsProductName = ?, p.vsProductDesc = ?, p.vsStatus = ?
    WHERE p.pklProductId = ?`,
    /*-----------------------------------------------------------------------*/
}

module.exports = exports = query;