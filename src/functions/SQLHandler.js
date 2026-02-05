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

        #Hello world fourth commit to main branch directly
        #Hello world sixth commit to main branch directly
         #Hello world seventh commit to main branch directly   
           #Hello world eighth commit to main branch directly  
        #  #Hello world ninth commit to main branch directly  
         #  #Hello world 10th commit to main branch directly
        #local 11th change.. 12th.. 13th
           #  #Hello world 14th commit to main branch directly
        #local 16th change
        #  #Hello world 15th commit to main branch directly
        #17th commit from IDE
         #  #Hello world 18th commit to main branch directly
          #  #Hello world 19th commit to main branch directly
        #20 th change from IDE
         #  #Hello world 21s commit to main branch directly
    #  #Hello world 22nd commit  IDE
    #  #Hello world 24th commit  IDE
           #  #Hello world 25  commit to main branch directly to DEV
        #hello world 27th undo commit example.
            #Tag 29th example....
        #Tag V1.2.0 30th example....
        #Tag V1.2.0 31th example....
        #Rebase example
    }

});
