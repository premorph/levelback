import swaggerJsdoc from 'swagger-jsdoc'
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Documentacion  levelFood',
        version: '1.0.1',
    },
    servers: [
        {
            url: 'http://localhost:3001/api',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            },
        },
        schemas: {
            authLogin: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                },
            },
            authRegister: {
                type: 'object',
                required: ['email', 'password', 'age', 'name'],
                properties: {
                    name: {
                        type: 'string',
                    },
                    age: {
                        type: 'integer',
                    },
                    email: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                },
            },
            track: {
                type: 'object',
                required: [
                    'name',
                    'album',
                    'cover',
                    'artist',
                    'duration',
                    'mediaId',
                ],
                properties: {
                    name: {
                        type: 'string',
                    },
                    album: {
                        type: 'string',
                    },
                    cover: {
                        type: 'string',
                    },
                    artist: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                            },
                            nickname: {
                                type: 'string',
                            },
                            nationality: {
                                type: 'string',
                            },
                        },
                    },
                    duration: {
                        type: 'object',
                        properties: {
                            start: {
                                type: 'integer',
                            },
                            end: {
                                type: 'integer',
                            },
                        },
                    },
                    mediaId: {
                        type: 'string',
                    },
                },
            },
            storage: {
                type: 'object',
                properties: {
                    url: {
                        type: 'string',
                    },
                    filename: {
                        type: 'string',
                    },
                },
            },
        },
    },
}

/**
 * Opciones
 */
const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
}

const openApiConfiguration = swaggerJsdoc(options)
export { openApiConfiguration }
