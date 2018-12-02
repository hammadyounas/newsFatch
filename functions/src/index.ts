import * as functions from 'firebase-functions';
// import * as functions from 'firebase-functions';
import { FireStore } from './db/firestore';
import * as _cors from 'cors';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
    FireStore.checkdb().then((data:any) =>{
        // response.send(data);
        if(data.isNewsFatch = true){
            FireStore.saveArticle().then(data =>{
                response.send(data);
            }).catch(err =>{
                response.send(err);
            })
            
        }
    }).catch(err=>{
        response.send(err);
    })
    // response.send({status:'ok'})
});
