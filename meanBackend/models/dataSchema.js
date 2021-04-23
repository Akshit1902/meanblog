var mongoose = require('mongoose')

var articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
      },
    
      author: {
        type: String,
        required: true
      },
    
      markdown: {
        type: String,
        required: true
      },
    
      createdAt: {
        type: Date,
        default: Date.now
      },

      like: {
        type:Number,
        default:0
      },

      dislike: {
        type:Number,
        default:0
      }



});
module.exports = mongoose.model('article',articleSchema);