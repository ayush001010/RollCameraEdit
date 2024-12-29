const userModel = require('../modules/RCEdB_T', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function saveData() {
    const newTestimonial = [
        {
            NameOfTestimonial: 'Client Name',
            Testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' 
        },
        {
            NameOfTestimonial: 'Client Name',
            Testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' 
        },
        {
            NameOfTestimonial: 'Client Name',
            Testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' 
        },
        {
            NameOfTestimonial: 'Client Name',
            Testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' 
        },
    ];

    try{
        const exisitingData = await userModel.find();
        if (exisitingData.length == 0) {
            const savedExperties = await userModel.insertMany(newTestimonial);
            console.log("Successfully", savedExperties)  
        }
        
    } catch (err) {
        console.error('Error', err);
    }   
}

saveData();