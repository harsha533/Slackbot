const slackbot=require('slackbots');
const axios=require('axios');

const bot=new slackbot({
    token:'xoxb-689682123413-711949871767-IGwwassqA2RPE5aRbHmw0nAg',
    name:'hellobot'
});


bot.on('start',()=>{
    const params={
        icon_emoji:':smiley'
    };

    //bot.postMessageToChannel('random','Get ready to laugh with @hellobot!',params);
   var name= bot.getUsers();
   console.log(name);
})