require(`dotenv`).config();
const PORT = process.env.PORT;

const app = require(`./src/app`);

app.listen(PORT, () => {
    console.log(`server is run on PORT ${PORT}`);
})


