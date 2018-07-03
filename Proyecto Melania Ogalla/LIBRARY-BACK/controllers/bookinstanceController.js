const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
exports.bookinstanceList = (req, res) => {

BookInstance.find()
    .populate('book')
    .exec((err, list_bookinstances) => {
        if (err) { return next(err); }

        res.status(200).send({ bookinstanceList: listBookinstances });
    });
};

// Display detail page for a specific BookInstance.
exports.bookinstanceDetail = (req, res, next) => {
    let id = req.params.id;

    return BookInstance.find({ book : id }).then ((results)=> {
        let bookinstances = results;

        if (bookinstances.length === 0 ){
            return res.status(404).send('Instances not found');
        }
        return res.status(200).send({
            bookinstances
        })
    }).catch((err)=> {
        return next(err)
    })

};

// Handle BookInstance create on POST.
exports.bookinstanceCreatePost = (req, res, next) => {
    let data= req.body;
    let instance = new BookInstance(data);

    instance.save((err,saveInstance)=> {
        if (err){
            next(err);
        }
        return res.status(200).send(saveInstance);
    })};


// Display BookInstance delete form on GET.
exports.bookinstanceDeleteDelete = (req, res, next) => {
        let id = req.params.id;

        return BookInstance.find({ bookinstances : id }).then ((results)=> {

            let bookinstances = results;

            if(!bookinstances){
                return res.status(404).send('Instance not found');
            }

            return BookInstance.findByIdAndRemove(id).then(()=>{ return res.status(200).send('Deleted')} )
        }).catch((err)=> {
            return next(err)
        })
};


// Display BookInstance update form on GET.
exports.bookinstanceUpdatePut = (req, res, next) => {

    let id = req.params.id;
    let data= req.body;
    data._id = id;

    let bookinstance = new BookInstance(data);


    BookInstance.findByIdAndUpdate(id, bookinstance, {})
        .then((updatedBookInstance) => {
            if (!updatedBookInstance) {
                return res.status(404).send('BookInstance not found');
            }
            return res.status(200).send('UpdatedInstance');

        }).catch((err)=>{
        return next(err);
    })
};

