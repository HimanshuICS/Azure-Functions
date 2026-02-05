const { app } = require('@azure/functions')    ;

app.http('SQLHandler', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };

        #Hello world second commit to main branch
        #Hello world third commit to main branch

    }

});
