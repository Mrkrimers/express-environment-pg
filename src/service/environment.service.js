const { getAllEnvironmentDB, getElementByIdDB, postCreateEnvironmentDB, putUpdateEnvironmentDB, deleteEnvironmentDB, patchEnvironmentDB } = require(`../repository/environment.repository`)

async function getAllEnvironment() {
    const data = await getAllEnvironmentDB();
    if (!data.length) throw new Error(`DB is empty`);
    return data;
};

async function getElementById(id) {
    const data = await getElementByIdDB(id);
    if (!data.length) throw new Error(`ID not found`);
    return data;
}

async function postCreateEnvironment(label, category, priority) {
    const data = await postCreateEnvironmentDB(label, category, priority);
    if (!data.length) throw new Error(`object not created`);
    return data;
}

async function putUpdateEnvironment(id, label, category, priority) {
    const data = await putUpdateEnvironmentDB(id, label, category, priority);
    if (!data.length) throw new Error(`ID not found`);
    return data;
}

async function deleteEnvironment(id) {
    const data = await deleteEnvironmentDB(id);
    if (!data.length) throw new Error(`Id not found`);
    return data;
}

async function patchEnvironment(id, clientData) {
    const data = await patchEnvironmentDB(id, clientData);
    if (!data.length) throw new Error(`Id not found`);
    return data;
}



module.exports = {
    getAllEnvironment,
    getElementById,
    postCreateEnvironment,
    putUpdateEnvironment,
    deleteEnvironment,
    patchEnvironment
}