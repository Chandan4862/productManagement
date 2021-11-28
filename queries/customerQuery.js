let query = {
    saveCustomer: `INSERT INTO 
    cutomer_details  (
    vsCustName , 
    vsMobile , 
    fklLoginId ) VALUES (? ,? , ?)`,
    saveLogin:`INSERT INTO login_details (vsLoginName, vsPassword)
     VALUES (?,?)`,


}

module.exports = exports = query