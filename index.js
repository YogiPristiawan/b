const moment = require("moment")

function tomorrow() {
  return moment().add(1, "d").format()
}

module.exports = {
  tomorrow
}
