let query = {
    verifyUsernameAndPassword : `
    SELECT
    ld.pklLoginId AS loginId, ld.vsLoginName AS loginName
    FROM cutomer_details cd
    INNER JOIN login_details ld ON ld.pklLoginId = cd.fklLoginId
    WHERE ld.vsLoginName = ? AND ld.vsPassword = ?
    `
};

module.exports = exports = query;