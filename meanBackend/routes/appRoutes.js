var express = require('express');
var router = express.Router();
var Article = require('../models/dataSchema');


router.post('/create',(req,res,next) => {
    var newArticle = new Article({
        title:req.body.title,
        author:req.body.author,
        markdown:req.body.markdown,
        like:req.body.like,
        dislike:req.body.dislike,
        // title:req.body.title,

    });
    newArticle.save((err,article)=>{
        if(err)
        res.status(500).json({errmsg :err});
        res.status(200).json({msg : article});
    });
    // res.status(200).json({msg:'Post request is working'})
});


router.get('/read',(req,res,next) => {
    
    Article.find({},(err,articles)=>{
        if(err)
        res.status(500).json({errmsg :err});
        res.status(200).json({msg : articles});

    });
    // res.status(200).json({msg:'get request is working'})
});

router.put('/update',(req,res,next) => {
    // console.log(req.body.like)
    Article.findById(req.body.id,(err,article)=>{
        if(err)
        res.status(500).json({errmsg :err});
        article.title=req.body.title;
        article.author=req.body.author;
        article.markdown=req.body.markdown;
        article.like=req.body.like;
        article.dislike=req.body.dislike;
        article.save((err,article) => {
        if(err)
            res.status(500).json({errmsg :err});
        res.status(200).json({msg : article});
        });
    })
});

router.delete('/delete/:id',(req,res,next) => {
    Article.findByIdAndDelete({_id:req.params.id},(err,article)=>{
            if(err)
                res.status(500).json({errmsg :err});
            res.status(200).json({msg : article});
        });    
    // Article.findOneAndRemove({_id:req.params.id},(err,article)=>{
    //     if(err)
    //         res.status(500).json({errmsg :err});
    //     res.status(200).json({msg : articles});
    // });    

});

module.exports=router;