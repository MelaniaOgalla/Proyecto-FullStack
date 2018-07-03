const Book = require('../models/book');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

// Display list of all Genre.
exports.genreList = (req, res) => {
    Genre.find()
        .sort([["name", "ascending"]])
        .exec((err, listGenres) => {
            if (err) { return next(err); }
            res.status(200).send({ genreList: listGenres });
        });
};


// Display detail page for a specific Genre.
exports.genreDetail = (req, res, next) => {
    let id = req.params.id;

    return Promise.all([
        Genre.findOne({_id: id}),
        Book.find({ genre : id }),
    ]).then ((results)=> {
        let genre = results [0];
        let instances = results [1];

        if(!genre){
            return res.status(404).send('Genre not found');
        }
        return res.status(200).send({
            genre,
            genre_books: instances
        })
    }).catch((err)=> {
        return next(err)
    })

};

// Handle Genre create on POST.
exports.genreCreatePost = (req, res, next) => {
    let data= req.body;
    let genre = new Genre(data);
    genre.save((err,savedGenre)=> {
        if (err){
            next(err);
        }
        return res.status(200).send(savedGenre);
    })};



// Handle Genre delete on POST.
exports.genreDeleteDelete = (req, res, next) => {
    let id = req.params.id;


    return Promise.all([
        Genre.findOne({_id: id})
            .populate('author')
            .populate('genre')
            .exec(),
        BookInstance.find({ book : id }), //buscas un libro y buscas si tiene duplicados
    ]).then ((results)=> {
        let genre = results [0];
        let instances = results [1];

        if(!genre){
            return res.status(404).send('Genre not found');
        }
        if (instances.length > 0 ){
            return res.status(400).send('Genre has book instances')
        }
        return Genre.findByIdAndRemove(id).then(()=>{ return res.status(200).send(id)} )
    }).catch((err)=> {
        return next(err)
    });
};

// Display Genre update form on GET.
exports.genreUpdatePut = (req, res,next) => {
    let id= req.params.id;
    let data=  req.body;
    data._id = id;

    let genre=new Genre(data);

    Genre.findByIdAndUpdate(id,genre,{new:true})
        .then((updatedGenre)=>{
            if(!updatedGenre){
                return res.status(404).send('genre not found');
            }
            return res.status(200).send(updatedGenre);
        }).catch((err)=>{
        return next(err);
    });
};

