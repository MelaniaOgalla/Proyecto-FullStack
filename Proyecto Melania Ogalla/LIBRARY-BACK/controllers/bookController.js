
const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

exports.index = (req, res, next)=> {

    return Promise.all([
        Book.count({}),
        BookInstance.count({}),
        BookInstance.count({status:'Available'}),
        Author.count({}),
        Genre.count({})
    ]).then ((results)=>{
        return res.status(200).send({
            book_count: results[0],
            book_instance_count: results[1],
            book_instance_available_count: results[2],
            author_count: results[3],
            genre_count: results[4]
        });
    }).catch((err)=>{
        return next(err);
    });
};

// Display list of all books.
exports.bookList = (req, res,next)=> {

    Book.find({}, 'title author isbn genre')
        .populate('author')
        .populate('genre')
        .exec(function (err, listBooks) {
            if (err) { return next(err); }

            res.status(200).send({bookList: listBooks});

        });
};

//Display one book.

exports.bookDetail = (req, res, next)=> {
    let id = req.params.id;

    return Promise.all([
        Book.findOne({_id: id})
            .populate('author')
            .populate('genre')
            .exec(),
        BookInstance.find({ book : id }),
    ]).then ((results)=> {
        let book = results [0];
        let instances = results [1];

        if(!book){
            return res.status(404).send('Book not found');
        }
        return res.status(200).send({
            book,
            book_instance: instances
        })
}).catch((err)=> {
        return next(err)
})
};


// Handle book create on POST.
exports.bookCreatePost = (req, res, next)=> {
    let data= req.body;
    let book = new Book(data);

    book.save((err,savedBook)=> {
        if (err){
            next(err);
        }
        return res.status(200).send(savedBook);
        })};


// Handle book delete on POST.
exports.bookDeleteDelete = (req, res, next)=> {

    let id = req.params.id;

    return Promise.all([
        Book.findOne({_id: id})
            .populate('author')
            .populate('genre')
            .exec(),
        BookInstance.find({ book : id }), //buscas un libro y buscas si tiene duplicados
    ]).then ((results)=> {
        let book = results [0];
        let instances = results [1];

        if(!book){
            return res.status(404).send('Book not found');
        }
        if (instances.length > 0 ){
            return res.status(400).send('Book has book instances')
        }
        return Book.findByIdAndRemove(id).then(()=>{ return res.status(200).send('Deleted')} )
    }).catch((err)=> {
        return next(err)
    });
};


// Handle book update on POST.
exports.bookUpdatePut = (req, res, next)=> {
    let id = req.params.id;
    let data= req.body;

    let book = new Book(data);


    Book.findByIdAndUpdate(id, book, {next:true}) // Esto es un modelo de mongoose mirar documentación
        .then((updatedBook) => {
            if (!updatedBook) {
                return res.status(404).send('Book not found');
            }

           return res.status(200).send('UpdatedBook');

        }).catch((err)=>{
           return next(err);
    })
};