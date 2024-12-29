const userModel = require('../modules/RCEdB_E', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function saveData() {
    const newExperty = [
        {
            ExpertiesTitle: 'Title Space',
            ExpertiesInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' 
        },
        {
            ExpertiesTitle: 'Title Space',
            ExpertiesInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' 
        },
        {
            ExpertiesTitle: 'Title Space',
            ExpertiesInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' 
        },
        {
            ExpertiesTitle: 'Title Space',
            ExpertiesInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' 
        }
    ];

    try{
        const exisitingData = await userModel.find();
        if (exisitingData.length == 0) {
            const savedExperties = await userModel.insertMany(newExperty);
            console.log("Successfully", savedExperties)  
        }
        
    } catch (err) {
        console.error('Error', err);
    }   
}

saveData();