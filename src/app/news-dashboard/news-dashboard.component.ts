import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),

};
@Component({
  selector: 'news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.css']
})
export class NewsDashboardComponent implements OnInit {
  color = 'accent';
  news: Array<any> = [];
  checked = false;
  fatchTimer;

  constructor(public http: HttpClient, public db: AngularFirestore) {
   
  }
  ngOnInit() {
  }
  toggle(val) {
    this.checked = !this.checked;
    if (this.checked == true) {
      this.fatchTimer = setInterval(() => {
        this.news = [];
        this.http.get('https://newsapi.org/v2/top-headlines?country=ve&category=sports&apiKey=c57f8a11cbc44ca5bf7a1772deb2de2c',
          httpOptions).subscribe((data: any) => {
            let arr = data.articles;
            arr.forEach(obj => {
              if (obj.urlToImage != null) {
                if (this.news.indexOf(obj) === -1) {
                  this.news.push(obj);
                }
              }
            });
            this.db.collection<any>("articles").snapshotChanges().pipe(
              map(actions => actions.map(a => {
                const data = a.payload.doc.data() as any;
                const id = a.payload.doc.id;
                return { id, ...data };
              })
              )
            ).subscribe((data:any)=>{
              data.forEach(art =>{
                this.db.collection<any>("articles").doc(`${art.id}`).delete();
              })
            })
            this.news.forEach(doc => {
              this.db.collection<any>("articles").add(doc).then(docRef => {
                console.log('document added to items collection: ',docRef);
              })
                .catch(function (error) {
                  console.error('Error adding document to items collection: ' + error.message);
                })
            })

          })
      }, 30000)
    } else if (this.checked == false) {
      clearInterval(this.fatchTimer);
    }
    console.log("val of toggle ->", this.checked);

  }

}
