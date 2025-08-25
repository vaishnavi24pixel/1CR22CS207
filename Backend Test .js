import express from "express"
const app=new express();
app.listen(5000,()=>{
})
app.get("/api/notes",(req,res)=>{
    res.send("abcd");
});
function Log(stack,level,packag,message){
    console.log("sucessfully shortened url")
}
app.post("/:url/:validity/:shorturl",(req,res)=>{
    
    log("backend","info","rote","shortened sucessfully");
    res.status(201).send({
        "shortLink":"https://localhost:5000/shorturl",
        "expiry":"2025-01-01T00:3000Z"
    })
});


//"clientID": "322c87e0-8946-4544-9030-d050d0ce3cfd",
   // "clientSecret": "NtzkhGsgaqrrQwCT"
   /**{
    "token_type": "Bearer",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2YXNoMjJjc0BjbXJpdC5hYy5pbiIsImV4cCI6MTc1NjEwMDY0MCwiaWF0IjoxNzU2MDk5NzQwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOGE5NjVmNzgtMmJmYy00MDZmLWE0ZDYtZGRiYTc0YzViYWNmIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmFpc2huYXZpIHNoYXJtYSIsInN1YiI6IjMyMmM4N2UwLTg5NDYtNDU0NC05MDMwLWQwNTBkMGNlM2NmZCJ9LCJlbWFpbCI6InZhc2gyMmNzQGNtcml0LmFjLmluIiwibmFtZSI6InZhaXNobmF2aSBzaGFybWEiLCJyb2xsTm8iOiIxY3IyMmNzMjA3IiwiYWNjZXNzQ29kZSI6InlVVlFYSyIsImNsaWVudElEIjoiMzIyYzg3ZTAtODk0Ni00NTQ0LTkwMzAtZDA1MGQwY2UzY2ZkIiwiY2xpZW50U2VjcmV0IjoiTnR6a2hHc2dhcXJyUXdDVCJ9.XejX2tYKXbza_zCDBIxKjaFpNYkpwc6dj_aCzBIkJE8",
    "expires_in": 1756100640
} */
