const intro =introJs();
intro.setOptions({
    steps:[
        {
            element:"#introduction",
            intro:'welcome to our new website!lets\'take a tour'
        },
        {
            element:'#step-one',
            intro:'Search and view locality here '
            
            },
        {
            element:'#step-two',
            intro:'fill the form for account login '   
        },
        {
            element:'#step-three',
            intro:'click to sign in'
        }
    ]
})
intro.start();