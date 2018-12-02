import * as path from "path";
import * as functions from 'firebase-functions';
// import { Credentials } from "google-cloud__storage";

let development = {

    serviceAccount: {
        "type": "service_account",
        "project_id": "a2todos-34196",
        "private_key_id": "a831419d0a047e2ec747edf5ffebe575039ad434",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoG0h7qIU/oaZI\nK4kwpx3FFwo3qrzqhC+1bgiX2Cwj/NUycgu9Qh8amjhYopJu8mHKoCdiQDzzgoTL\nhvX+X/wRL2HxY+AKSwinGc2wE1a0EnrZFGm6egkWsGgXNHnL6B0mf1o8Xq3CIafj\nGm7P4Szkfl7j7L+k3o7vWRB6ScTWZY0ScbMYAc0rFHxEuwfd71VG2VhNEQX/vq8M\n2p6UNzdeM0+Bf2CYKupRMjcDnFc41oZWTHlz6jix8eE/MvKaAVz+PbC1rXuOXfYb\nD22Foptmd4dDVbXYQoCBkMjD4HLr5kbULS6bsKQbvpT6wT0gmLgEo08mq0qWgirJ\n5RN8zLbTAgMBAAECggEADcVCYELTO32p6eKLF+2wnhr/jsTROeK/J70OPiYKo54L\n9thpxsSaWKsGb5hNp4H6acdJwp4hgA8SgruY/g/tzZiUjNoSGbXAzTNran+DDDgx\nUQP/jzN8+BtWQ4Rcb8whSyyGf0iAMlVgc9WP+z5mV4dUjZYwsrg6fDfPBj1xvuAr\nuBZAX9G+UQhA9CGawnfZ1kHn1qtfUozPZV6BXFKawB/tHT/RF/6cnX5R3h+yhtqO\n0N7AprCbvgn/p2g5zmOELu1hLknvGAOfSPlhd3zYbHY7q5a8d9Tpg9cFkWLiKEJs\n76qKkU6MqdoMHEe9JaHn0u6G2JZpwWywyeD5PZ/GwQKBgQDVwRdlsvZj1ebzMe3D\nP+iwnCmDWbnY5tdZKkhJ/g6D8Y4x41epjNNjAk6a7jHSsH3IRNkfbPsAG8HbvjNV\nRdSF1ulWH2S8UmAPjPOZAA/FpgnbSxrhewUMLGbwC7lyYfQ+OJdTk7BrNQ5eGQDf\njHW7yCuNRZXJs99qp3Av9FLcwQKBgQDJVKT60uH3Wd8eAD/We+bSiPxEaXizEtdd\nB4I/2f5ODsqVzQiJQFWp4AwNvrJfaC2+7hCL0EZAHSyH//2sUgmrPOd7h52JnUiu\nYH1TfaqullCHkfj5GkuToFBtt6FQQyb6p8UmBijN2gqm4S+2/shutpLmqce8W2DQ\np4K8WtD0kwKBgFhAepqAgv3BKLMr4BCG6FlSgEk82GBXHn4v2NzDydZr+ttaE61q\n+TOdljqdMXDdcXEoC8TPx+nJjAZfxu3kANSpYHkwSPT/xa1l8oUu41QlM1iY76Y8\nll7qTi25iX1SN/cggkn9Zg89PotXI2copMs8385Z9nfqjcmJC+agpz2BAoGAJevD\nh1rhJO3QkJ4LaCK+Pzl+CoSzL0eFOQiJB+3PcHRow/5ydSeg+vYwTwZ0InRE6Yl9\npFf+Y2UbViJpbWOmXpKCJ0pL6feuEOorsOYil+/IC0D7XDAPvCad/4xu3edIGD4x\nbBAM73j6OKSBkD49El1hHgEsldXAToy+myuf3/ECgYEAxncNBkldiokIQDVhEkaS\nF1EiNPJ7RZeilkCyii932CJE0FRBArdxTxZS2BZqNB6Robv0LkTFAsb/frQNjrXt\nllc/skq3YxPrGpRtEgCkT9uV+t6svZp7cDALUrYSbeR4jrBilEgQmRkS0fbH8wVE\nx2X/h/F+hs0elFyhGt8BCV4=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-eorkv@a2todos-34196.iam.gserviceaccount.com",
        "client_id": "106938634195661246272",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eorkv%40a2todos-34196.iam.gserviceaccount.com"
      }


}
let cred = development
interface credentials {
    serviceAccount: any
  } 
   export let  credentials:credentials = cred