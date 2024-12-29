const userModel = require('../modules/RCEdB_C', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function saveData() {
    const newClient = [
        {
            ClientImage: "http://192.168.1.11:3000/images/OurClients/image.png",
            ClientName: "ClientName"
        },
        {
             ClientImage: "http://192.168.1.11:3000/images/OurClients/image.png",
            ClientName: "ClientName"
        },
        {
             ClientImage: "http://192.168.1.11:3000/images/OurClients/image.png",
            ClientName: "ClientName"
        },
        {
             ClientImage: "http://192.168.1.11:3000/images/OurClients/image.png",
            ClientName: "ClientName"
        },
        {
            ClientImage: "http://192.168.1.11:3000/images/OurClients/image.png",
            ClientName: "ClientName"
        },
        {
             ClientImage: "http://192.168.1.11:3000/images/OurClients/image.png",
            ClientName: "ClientName"
        },
        {
             ClientImage: "http://192.168.1.11:3000/images/OurClients/image.png",
            ClientName: "ClientName"
        },
        {
             ClientImage: "http://192.168.1.11:3000/images/OurClients/image.png",
            ClientName: "ClientName"
        },
        {
             ClientImage: "http://192.168.1.11:3000/images/OurClients/image.png",
            ClientName: "ClientName"
        },
        {
             ClientImage: "http://192.168.1.11:3000/images/OurClients/image.png",
            ClientName: "ClientName"
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