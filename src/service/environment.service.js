const { getAllEnvironmentDB, getElementByIdDB } = require(`../repository/environment.repository`)

async function getAllEnvironment() {
    const data = await getAllEnvironmentDB();
    return data;
};

async function getElementById(id) {
    const data = await getElementByIdDB(id);
    return data;
}

module.exports = { getAllEnvironment, getElementById }