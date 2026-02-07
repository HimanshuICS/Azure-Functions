const { app } = require('@azure/functions')    ;

app.http('SQLHandler', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
        #Hello world pull request 5.
        #Hello world pull request 5 created
        #prepare for the rebase from the master.
            #learn cherry pick 1
            #lern cherry pick 2
        #new branch..dev2
sdsds
        #another commit in dev
        Another commit for the pull request,
            Commit for DEV branch

        Commit for dev branch 1
    }
});
