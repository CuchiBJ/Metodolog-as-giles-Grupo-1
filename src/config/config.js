module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.DB || 'mongodb+srv://nahu:nahu123@cluster0.me2pt.mongodb.net/<dbname>?retryWrites=true&w=majority',
    SECRET_TOKEN: process.env.SECRET_TOKEN || '123'
}