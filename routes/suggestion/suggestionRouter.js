const express = require('express')
const suggestionController = require('./controller/suggestionController')
const router = express.Router()

router.get('/', function(req, res){
    // suggestionController.getAllSuggestion({}, function(err, payload){
    //     if(err){
    //         res.status(500).json({
    //             message: "Error! Something went wrong!",
    //             error: err.message
    //         })
    //     }
    //     else{
    //         res.json({
    //             message: 'Success!',
    //             payload
    //         })
    //     }
    // })
    res.send('Welcome to Suggestion-Box HW')
})

router.get('/all-suggestions', function(req, res){
    suggestionController.getAllSuggestion({}, function(err, payload){
        if(err){
            res.status(500).json({
                message: "Error! Something went wrong!",
                error: err.message
            })
        }
        else{
            res.json({
                message: 'Success!',
                payload
            })
        }
    })
})

router.post('/create-suggestion', function(req, res){
    suggestionController.createSuggestion(req.body, function(err, createdSuggestion){
        if(err){
            res.status(500).json({
                message: "Error! Something went wrong!",
                error: err.message
            })
        }
        else{
            res.json({
                message: 'Suggestion Created!',
                createdSuggestion
            })
        }
    })
})

router.get('/single-suggestion/:id', function(req, res){
    suggestionController.getSingleSuggestion(req.params.id || {}, function(err, singleSuggestion){
        if(err){
            res.status(500).json({
                message: "Error! Something went wrong!",
                error: err.message
            })
        }
        else{
            res.json({
                message: 'Suggestion found!',
                singleSuggestion
            })
        }
    })
})

router.put('/update-suggestion/:id', function(req, res){
    suggestionController.updateSuggestion(req.params.id, req.body, function(err, updatedSuggestion){
        if(err){
            res.status(500).json({
                message: "Error! Fail to update!",
                error: err.message
            })
        }
        else{
            res.json({
                message: "Successfully  updated!",
                updatedSuggestion
            })
        }
    })
})

router.delete('/delete-suggestion/:id', function(req, res){
    suggestionController.deleteSuggestion(req.params.id, function(err, deletedSuggestion){
        if(err){
            res.status(500).json({
                message: "Error! Failed to delete!",
                error: err.message
            })
        }
        else{
            res.json({
                message: "Successfully deleted!",
                deletedSuggestion
            })
        }
    })
})

router.get('/by-author-suggestion/', function(req, res){
    suggestionController.getSuggestionsByAuthor(req.query.author, function(err, payload){
        if(err){
            res.status(500).json({
                message: "Error! Failed to find!",
                error: err.message
            })
        }
        else{
            res.json({
                message: "Success!",
                payload
            })
        }
    })
})

module.exports = router;