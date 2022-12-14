const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    url: {
      type: String,
    },
    profession: {
      type: String,
    },
    interest: {
      type: String,
    },
    about: {
      type: String,
    },
    dob: {
      type: String,
    },
    show_dob: {
      type: Boolean,
    },
    gender_identity: {
      type: String,
    },
    show_gender: {
      type: Boolean,
    },
    link_linkedin: {
      type: String,
    },
    link_portfolio: {
      type: String,
    },
    link_github: {
      type: String,
    },
    matches: {
      type: Array,
    },
    favUsers: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
)
// when we login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  // It will work only when we login
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const model = mongoose.model('User', userSchema)

module.exports = model
