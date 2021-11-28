# productManagement
product management
# sql scripts for table creation
> CREATE TABLE products (
    pklProductId bigint(20) NOT NULL AUTO_INCREMENT,
    vsProductName varchar(100) DEFAULT NULL,
    vsProductDesc varchar(100) DEFAULT NULL,
    vsStatus varchar(100) DEFAULT NULL,
    PRIMARY KEY (pklProductId)
    );


> CREATE TABLE login_details (
  pklLoginId bigint(20) NOT NULL AUTO_INCREMENT,
  vsLoginName varchar(100) DEFAULT NULL,
  vsPassword varchar(100) DEFAULT NULL,
  PRIMARY KEY (pklLoginId)
);

> CREATE TABLE cutomer_details (
  pklCustId bigint(20) NOT NULL AUTO_INCREMENT,
  vsCustName varchar(100) NOT NULL,
  vsMobile varchar(20) NOT NULL,
  fklLoginId bigint(20) DEFAULT NULL,
  PRIMARY KEY (pklCustId)
    );

# Api 
1. **/app** : _Get product list_ 
2. **/app/saveProduct** : _Save product_
3. **/app/deleteProduct** : _Delete product_
4. **/app/updateProduct** : _Update product_
5. **/app/saveCustomer** : _User Registration_
6. **/app/login** : _Login_
