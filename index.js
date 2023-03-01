const Parse = require('parse/node');
Parse.serverURL = 'https://learningaboutb4a.b4a.io';
Parse.initialize('x4uHx8hJECtAPiKo4Z2f8IK9OUKRtcuUBBaUBHM9','BzNK4dwZ1UvFcgsyQum6jktmOFUrxr4EcgaS4Mp7');

const main = async ()=>{
  const query = new Parse.Query('Genre');
  query.exists('typeDateTime');
  const subscribe = await query.subscribe();

  let contacts = {};
  const printContacts = ()=>{
    console.log('printContacts+++');
    Object.keys(contacts).forEach(id=>{
      console.log(contacts[id].toJSON());
      console.log(contacts[id].get('typeDateTime'))
      console.log(typeof contacts[id].get('typeDateTime'))
    });
    console.log('printContacts---');
  };

  subscribe.on('open', async ()=>{
    console.log('open...');
    contacts = (await query.find()).reduce((contacts,contact)=>({
      ...contacts,
      [contact.id]: contact
    }),contacts);
    printContacts();
  });
  subscribe.on('create',(data)=>{
    console.log(`Data: ${data.id} | create...`);
    contacts[data.id]=data;
    printContacts();
  });
  subscribe.on('update',(data)=>{
    console.log(`Data: ${data.id} | update...`);
    contacts[data.id]=data;
    printContacts();
  });
  subscribe.on('enter',(data)=>{
    console.log(`Data: ${data.id} | enter...`);
    contacts[data.id]=data;
    printContacts();
  });
  subscribe.on('leave',(data)=>{
    console.log(`Data: ${data.id} | leave...`);
    delete contacts[data.id];
    printContacts();
  });
  subscribe.on('delete',(data)=>{
    console.log(`Data: ${data.id} | delete...`);
    delete contacts[data.id];
    printContacts();
  });
  subscribe.on('closed',()=>{
    console.log('closed...');
  });  
};
main();