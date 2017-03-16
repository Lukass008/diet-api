const { dbUser, dbPassword } = require('./credentials')

const mongoUrl = `mongodb://${dbUser}:${dbPassword}@ds159517.mlab.com:59517/diet_api`

module.exports = {
  mongoUrl
}
// gcloud compute firewall-rules create default-allow-mongo --allow tcp:8080 --source-ranges 0.0.0.0/0 --target-tags mongodb --description "Allow mongodb access to all IPs"
