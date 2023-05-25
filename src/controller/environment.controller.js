const route = require(`express`).Router();
const { getAllEnvironment, getElementById, postCreateEnvironment, putUpdateEnvironment, deleteEnvironment, patchEnvironment } = require(`../service/environment.service`)
const { buildResponse } = require(`../helper/buildResponse`);
const { isValidEnvironmentId, isValidEnvironmentBody } = require(`../helper/validation`);

route.get(`/`, async (req, res) => {
    const data = await getAllEnvironment();

    buildResponse(res, 200, data);
});

route.get(`/:id`, isValidEnvironmentId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getElementById(id);

        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})

route.post(`/`, isValidEnvironmentBody, async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = await postCreateEnvironment(label, category, priority);

        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.put(`/:id`, isValidEnvironmentId, isValidEnvironmentBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = await putUpdateEnvironment(id, label, category, priority);

        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})

route.delete(`/:id`, isValidEnvironmentId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteEnvironment(id);

        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})

route.patch(`/:id`, isValidEnvironmentId, async (req, res) => {
    try {
        const { id } = req.params;
        const clientData = req.body;
        const data = await patchEnvironment(id, clientData);

        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})


module.exports = route;