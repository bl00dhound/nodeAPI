# Simple chat-API

 #### Install project:
 * ```git clone https://github.com/bl00dhound/nodeAPI```
 * ```cd nodeAPI```
 * ```npm install```
 
 #### Import database:
 * ```mongorestore -d api ./repositorie/api```

 #### Run:
 * ```npm start```
 
 
 ### REST API
 #### http://localhost:9009/api
 
 Operation | Verb | Route 
 --- | --- | ---
 get user by id | GET | user/:userId
 get all users | GET | user
 add new user | POST | user
 update user | PUT | user/:userId
 delete user | DELETE | user/:userId
 get message | GET | message/:messageId
 get all message | GET | message
 add new message | POST | message
 update message | PUT | message/:messageId
 delete message | DELETE | message/:messageId
 get users by sender id | GET |user/:id/search
 
 
