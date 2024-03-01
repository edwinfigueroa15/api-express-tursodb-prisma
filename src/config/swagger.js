import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Api con Express y Turso + Prisma',
    description: 'Una API donde usamos la base de datos sqllite llamada Turso y el ORM Prisma en Express'
  },
  consumes: ['application/json'],
  produces: ['application/json'],
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: ''
    },
  ],
  tags: [
    {
      name: 'Rol',
      description: ''
    },
    {
      name: 'User',
      description: ''
    },
  ],
  components: {
    schemas: {
      RolSchema: {
        name: '',
        description: ''
      },
    }
  }
};

const outputFile = './swagger.json';
const routes = ['../routes/rol.routes.js', '../routes/user.routes.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc);