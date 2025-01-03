const userModel = require('../modules/RCEdB_C', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function saveData() {
    const newClient = [
        {
            ClientImage: "http://rollcameraedit.onrender.com/images/OurClients/image.png",
            ClientName: "ClientName"
        },
        {
             ClientImage: "http://rollcameraedit.onrender.com/images/OurClients/image.png",
            ClientName: "ClientName",
            ClientAbout: "Client About LINk"
        },
        {
             ClientImage: "http://rollcameraedit.onrender.com/images/OurClients/image.png",
            ClientName: "ClientName",
            ClientAbout: "Client About LINk"
        },
        {
             ClientImage: "http://rollcameraedit.onrender.com/images/OurClients/image.png",
            ClientName: "ClientName",
            ClientAbout: "Client About LINk"
        },
        {
            ClientImage: "http://rollcameraedit.onrender.com/images/OurClients/image.png",
            ClientName: "ClientName",
            ClientAbout: "Client About LINk"
        },
        {
             ClientImage: "http://rollcameraedit.onrender.com/images/OurClients/image.png",
            ClientName: "ClientName",
            ClientAbout: "Client About LINk"
        },
        {
             ClientImage: "http://rollcameraedit.onrender.com/images/OurClients/image.png",
            ClientName: "ClientName",
            ClientAbout: "Client About LINk"
        },
        {
             ClientImage: "http://rollcameraedit.onrender.com/images/OurClients/image.png",
            ClientName: "ClientName",
            ClientAbout: "Client About LINk"
        },
        {
             ClientImage: "http://rollcameraedit.onrender.com/images/OurClients/image.png",
            ClientName: "ClientName",
            ClientAbout: "Client About LINk"
        },
        {
             ClientImage: "http://rollcameraedit.onrender.com/images/OurClients/image.png",
            ClientName: "ClientName",
            ClientAbout: "Client About LINk"
        },
    ];

    try{
        const exisitingData = await userModel.find();
        if (exisitingData.length == 0) {
            const savedExperties = await userModel.insertMany(newClient);
            console.log("Successfully", savedExperties)  
        }
        
    } catch (err) {
        console.error('Error', err);
    }   
}

saveData();