const { Schema, model } = require("mongoose");

const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String,
    default: 'regular',
    enum: [
      'regular',
      'admin',
    ]
  }
},

);

UserSchema.pre('save', function(next){
    bcrypt.genSalt(10).then(salts=>{
        bcrypt.hash(this.password,salts).then(hash=>{
            this.password =hash;
            next();
        }).catch(error=>next(error));
    }).catch(error => next(error));
});

 /*UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
*/
module.exports = model("User", UserSchema);