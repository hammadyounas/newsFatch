import * as functions from 'firebase-functions'
import { user } from 'firebase-functions/lib/providers/auth';
import { resolve } from 'url';
import { credentials } from './../lib/config'
import { reject } from 'q';
var admin = require("firebase-admin");

var request = require('request');
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// const httpOptions = {
//     headers: new HttpHeaders({ 'content-type': 'application/json' })

//   };

admin.initializeApp({
    credential: admin.credential.cert(credentials.serviceAccount),
    databaseURL: "https://a2todos-34196.firebaseio.com"
});
const fire = admin.firestore()
export class FireStore {
    static checkdb() {
        // var docRef = fire.collection("news").doc("condition");
        // docRef.get().the
        var docRef = fire.collection("news");
        // console.log("docref =>",docRef)

        return new Promise((resolve, reject) => {
            // docRef.doc("condition").set()
            // fire.collection("news").doc('condition').set({ isNewsFatch: true })
            //     .then(function (docRef) {
            //         console.log('document added to items collection: ', docRef);
            //     })
            //     .catch(function (error) {
            //         console.error('Error adding document to items collection: ' + error.message);
            //     })
            fire.collection("news").get().then(QuerySnapshot => {
                console.log("doc with ref =>", QuerySnapshot);
                QuerySnapshot.forEach(data => {
                    console.log("id =>",data.id)
                    console.log("data of collection",data.data());
                    resolve(data.data());
                });
                // if (doc.exist) {
                //     console.log("27 doc data=>", doc.data());
                //     resolve(doc.data());
                // }
                // else {
                //     console.log("doc not found");
                //     reject("doc not found")
                // }
            }).catch(err => {
                console.log("error =>", err);
                reject(err)
            })
        })
    }

    static saveArticle() {
        console.log("save article function");
        return new Promise((resolve,reject) =>{
            request('https://newsapi.org/v2/top-headlines?country=ve&category=sports&apiKey=c57f8a11cbc44ca5bf7a1772deb2de2c', function (error, response, body) {
                console.log("response =>",response);
            if (!error && response.statusCode == 200) {
                    console.log("60 reponse =>",response);
                    //here put what you want to do with the request
                }
            })
        })
       
        // const httpOptions = {
        //     headers: new HttpHeaders({ 'content-type': 'application/json' })

        // };

    }
}
export default fire;