const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('swagger-jsdoc');
const  PORT = process.env.PORT || 3000;


const options = {

    definition: {   
            
            openapi: '3.0.0',
            info: {
                title: 'CTFe API',
                version: '1.0.0',
                description: 'A web security challenge platform api',
            },

            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Development server',
                },
            ],
        },

    
    
       
    apis: ['./routes/api/*.yaml']
    
};
const specs = swaggerDocument(options);


const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get('/', (req, res) => {    
    
        res.send('Hello World');
});

app.listen(PORT, () => {    

    console.log(`Server running on port ${PORT}`);
});