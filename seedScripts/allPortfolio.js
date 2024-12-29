const userModel = require('../modules/RCEdB_P2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function saveData() {
    const portfolio = [
        {   
            ProjectClient: 'Title',
            ProjectImage:  "http://192.168.1.11:3000/images/Porfolio/flat-lay-photography-concept-black-background.jpg",
            ProjectTitle: "Name",
            ProjectDiscription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nisi ipsum illum reiciendis recusandae error, officiis alias aliquam! Unde rerum voluptate tempora minus iure ab, est architecto laboriosam et, sed magni doloribus deserunt deleniti totam nostrum blanditiis, porro nemo alias nam velit possimus hic! Itaque nam eum beatae facilis. Quibusdam?",
        },
        {   
            ProjectClient: 'Title',
            ProjectImage:  "http://192.168.1.11:3000/images/Porfolio/flat-lay-photography-concept-black-background.jpg",
            ProjectTitle: "Name",
            ProjectDiscription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nisi ipsum illum reiciendis recusandae error, officiis alias aliquam! Unde rerum voluptate tempora minus iure ab, est architecto laboriosam et, sed magni doloribus deserunt deleniti totam nostrum blanditiis, porro nemo alias nam velit possimus hic! Itaque nam eum beatae facilis. Quibusdam?",
        },
        {   
            ProjectClient: 'Title',
            ProjectImage:  "http://192.168.1.11:3000/images/Porfolio/flat-lay-photography-concept-black-background.jpg",
            ProjectTitle: "Name",
            ProjectDiscription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nisi ipsum illum reiciendis recusandae error, officiis alias aliquam! Unde rerum voluptate tempora minus iure ab, est architecto laboriosam et, sed magni doloribus deserunt deleniti totam nostrum blanditiis, porro nemo alias nam velit possimus hic! Itaque nam eum beatae facilis. Quibusdam?",
        },
        {   
            ProjectClient: 'Title',
            ProjectImage:  "http://192.168.1.11:3000/images/Porfolio/flat-lay-photography-concept-black-background.jpg",
            ProjectTitle: "Name",
            ProjectDiscription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nisi ipsum illum reiciendis recusandae error, officiis alias aliquam! Unde rerum voluptate tempora minus iure ab, est architecto laboriosam et, sed magni doloribus deserunt deleniti totam nostrum blanditiis, porro nemo alias nam velit possimus hic! Itaque nam eum beatae facilis. Quibusdam?",
        },
        {   
            ProjectClient: 'Title',
            ProjectImage:  "http://192.168.1.11:3000/images/Porfolio/flat-lay-photography-concept-black-background.jpg",
            ProjectTitle: "Name",
            ProjectDiscription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nisi ipsum illum reiciendis recusandae error, officiis alias aliquam! Unde rerum voluptate tempora minus iure ab, est architecto laboriosam et, sed magni doloribus deserunt deleniti totam nostrum blanditiis, porro nemo alias nam velit possimus hic! Itaque nam eum beatae facilis. Quibusdam?",
        },
        {   
            ProjectClient: 'Title',
            ProjectImage:  "http://192.168.1.11:3000/images/Porfolio/flat-lay-photography-concept-black-background.jpg",
            ProjectTitle: "Name",
            ProjectDiscription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nisi ipsum illum reiciendis recusandae error, officiis alias aliquam! Unde rerum voluptate tempora minus iure ab, est architecto laboriosam et, sed magni doloribus deserunt deleniti totam nostrum blanditiis, porro nemo alias nam velit possimus hic! Itaque nam eum beatae facilis. Quibusdam?",
        },
        {   
            ProjectClient: 'Title',
            ProjectImage:  "http://192.168.1.11:3000/images/Porfolio/flat-lay-photography-concept-black-background.jpg",
            ProjectTitle: "Name",
            ProjectDiscription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nisi ipsum illum reiciendis recusandae error, officiis alias aliquam! Unde rerum voluptate tempora minus iure ab, est architecto laboriosam et, sed magni doloribus deserunt deleniti totam nostrum blanditiis, porro nemo alias nam velit possimus hic! Itaque nam eum beatae facilis. Quibusdam?",
        },
        {   
            ProjectClient: 'Title',
            ProjectImage:  "http://192.168.1.11:3000/images/Porfolio/flat-lay-photography-concept-black-background.jpg",
            ProjectTitle: "Name",
            ProjectDiscription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nisi ipsum illum reiciendis recusandae error, officiis alias aliquam! Unde rerum voluptate tempora minus iure ab, est architecto laboriosam et, sed magni doloribus deserunt deleniti totam nostrum blanditiis, porro nemo alias nam velit possimus hic! Itaque nam eum beatae facilis. Quibusdam?",
        },
        {   
            ProjectClient: 'Title',
            ProjectImage:  "http://192.168.1.11:3000/images/Porfolio/flat-lay-photography-concept-black-background.jpg",
            ProjectTitle: "Name",
            ProjectDiscription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nisi ipsum illum reiciendis recusandae error, officiis alias aliquam! Unde rerum voluptate tempora minus iure ab, est architecto laboriosam et, sed magni doloribus deserunt deleniti totam nostrum blanditiis, porro nemo alias nam velit possimus hic! Itaque nam eum beatae facilis. Quibusdam?",
        },
        
    ]
    try{
        const exisitingData = await userModel.find();
        if (exisitingData.length == 0) {
            let savePortfolio = await userModel.insertMany(portfolio);
            console.log("successful", savePortfolio); 
        }
    }
    catch(err){
        console.log("Error", err);
    }
}

saveData();
