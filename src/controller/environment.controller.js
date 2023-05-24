const route = require(`express`).Router();
const { getAllEnvironment, getElementById } = require(`../service/environment.service`)
const { buildResponse } = require(`../helper/buildResponse`);

route.get(`/`, async (req, res) => {
    const data = await getAllEnvironment();

    buildResponse(res, 200, data);
});

route.get(`/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getElementById(id);

        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 200, error.message);
    }
});

module.exports = route;