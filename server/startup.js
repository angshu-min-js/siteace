if (Meteor.isServer) {
    Meteor.startup(function () {
        if (!Sites.findOne()){
            console.log("No websites yet. Creating starter data.");
            Sites.insert({
                title: "Craftloom",
                url: "http://www.craftloom.com",
                description: "Marketplace of Crafts",
                createdOn: new Date(),
                upvotes: 0,
                downvotes: 0
            });
            Sites.insert({
                title: "Google",
                url: "http://www.google.com",
                description: "Search Anything here",
                createdOn: new Date(),
                upvotes: 0,
                downvotes: 0
            });
            Sites.insert({
                title: "Coursera",
                url: "http://www.coursera.org",
                description: "Universal access to the world's best education.",
                createdOn: new Date(),
                upvotes: 0,
                downvotes: 0
            });
            Sites.insert({
                title: "Facebook",
                url: "http://www.facebook.com",
                description: "Social Networking site",
                createdOn: new Date(),
                upvotes: 0,
                downvotes: 0
            });
        }
    });
}
