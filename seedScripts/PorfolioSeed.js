const userModel = require('../modules/RCEdB_P', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function saveData() {
    const newPorfolio = [
        {
            ProjectTitle: 'Project Name',
            ProjectSubTitle: 'We have many clients in Agencies, Research Institute',
            ProjectDiscription: 'We have many clients in Agencies, Research Institute, Advertising and Television industries across the nation. Below are some of our precious clients.'
        },
        {
            ProjectTitle: 'Project Name',
            ProjectSubTitle: 'We have many clients in Agencies, Research Institute',
            ProjectDiscription: 'We have many clients in Agencies, Research Institute, Advertising and Television industries across the nation. Below are some of our precious clients.'
        },
        {
            ProjectTitle: 'Project Name',
            ProjectSubTitle: 'We have many clients in Agencies, Research Institute',
            ProjectDiscription: 'We have many clients in Agencies, Research Institute, Advertising and Television industries across the nation. Below are some of our precious clients.'
        },
        {
            ProjectTitle: 'Project Name',
            ProjectSubTitle: 'We have many clients in Agencies, Research Institute',
            ProjectDiscription: 'We have many clients in Agencies, Research Institute, Advertising and Television industries across the nation. Below are some of our precious clients.'
        },
        
    ];

    try{
        const exisitingData = await userModel.find();
        if (exisitingData.length == 0) {
            const savedExperties = await userModel.insertMany(newPorfolio);
            console.log("Successfully", savedExperties)  
        }
        
    } catch (err) {
        console.error('Error', err);
    }   
}

saveData();