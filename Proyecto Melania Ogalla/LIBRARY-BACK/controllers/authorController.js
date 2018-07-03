const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

// Display list of all Authors.
exports.authorList = (req, res) => {

    Author.find()
        .sort([['family_name', 'ascending']])
        .exec((err, list_authors) => {
            if (err) { return next(err); }
            res.status(200).send({ authorList: list_authors });
        });
};

// Display detail page for a specific Author.
exports.authorDetail = (req, res, next) => {
    let id = req.params.id;

    return Promise.all([
        Author.findOne({_id: id}),
        Book.find({ author : id }),
    ]).then ((results)=> {
        let author = results [0];
        let instances = results [1];

        if(!author){
            return res.status(404).send('Author not found');
        }
        return res.status(200).send({
            author,
            author_books: instances
        })
    }).catch((err)=> {
        return next(err)
    })

};


// Handle Author create on POST.
exports.authorCreatePost = (req, res, next) => {
    let data= req.body;
    let author = new Author(data);


    author.save((err,savedAuthor)=> {
        if (err){
            next(err);

        }
        return res.status(200).send(savedAuthor);

    })};

// Display Author delete form on GET.
exports.authorDeleteDelete = (req, res, next) => {
    let id = req.params.id;

    return Promise.all([
        Author.findOne({_id: id})
            .populate('author')
            .populate('genre')
            .exec(),
        BookInstance.find({ book : id }), //buscas un libro y buscas si tiene duplicados
    ]).then ((results)=> {
        let author = results [0];
        let instances = results [1];

        if(!author){
            return res.status(404).send('Author not found');
        }
        if (instances.length > 0 ){
            return res.status(400).send('Author has book instances')
        }
        return Author.findByIdAndRemove(id).then(()=>{ return res.status(200).send(id)} )
    }).catch((err)=> {
        return next(err)
    });
};




// Display Author update form on GET.
exports.authorUpdatePut = (req, res, next) => {
    let id = req.params.id;
    let data= req.body;
    data._id = id;

    let author = new Author(data);


    Author.findByIdAndUpdate(id, author, {new:true}) // Esto es un modelo de mongoose mirar documentación
        .then((updatedAuthor) => {
            if (!updatedAuthor) {
                return res.status(404).send('Author not found');
            }

            return res.status(200).send(updatedAuthor);

        }).catch((err)=>{
        return next(err);
    })
};

