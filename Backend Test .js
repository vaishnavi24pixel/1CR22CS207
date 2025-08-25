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
app.use("/",getlink);
app.use("/",defaultgen);


