const Suggestion = require('../model/Suggestion')

module.exports = {
    createSuggestion: function(body, callback){
        const createdSuggestion = new Suggestion({
            title: body.title.toLowerCase(),
            author: body.author.toLowerCase(),
            suggestion: body.suggestion.toLowerCase(),
            likes: body.likes, 
            anonymous: body.anonymous
        })

        createdSuggestion.save(function(err, savedSuggestion){
            if(err){
                callback(err, null)
            }
            else{
                callback(null, savedSuggestion)
            }
        })
    },
    getAllSuggestion: function(body, callback){
        Suggestion.find(body, function(err, payload){
            if(err){
                callback(err, null)
            }
            else{
                callback(null, payload)
            }
        })
    },
    getSingleSuggestion: function(id, callback){
        Suggestion.findById(id, function(err, payload){
            if(err){
                callback(err, null)
            }
            else{
                callback(null, payload)
            }
        })
    },
    updateSuggestion: function(id, body, callback){
        Suggestion.findByIdAndUpdate(id, body,{new:true}, function(err, updatedSuggestion){
            if(err){
                callback(err, null)
            }
            else{
                callback(null, updatedSuggestion)
            }
        })
    },
    deleteSuggestion: function(id, callback){
        Suggestion.findByIdAndDelete(id, function(err, deletedSuggestion){
            if(err){
                callback(err, null)
            }
            else{
                callback(null, deletedSuggestion)
            }
        })
    },
    getSuggestionsByAuthor: function(author, callback){
        Suggestion.find({author: author }, function(err, payload){
            if(err){
                callback(err, null)
            }
            else{
                callback(null, payload)
            }
        })
    }
}