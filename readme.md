## Running the Program and Tests

1. Clone the repository to your local machine.
2. Open a terminal or command prompt and navigate to the project's root directory.
3. Install the required dependencies by running the following command: `npm install`.
4. Update the connection URI in the `config/db.js` file with your MongoDB connection details.
5. Run the program by executing the following command: `npm start`. This will start the server, and you should see a message indicating the server is running on a specific port.
6. To run the tests, execute the following command: `npm test`. The tests will be executed, and you should see the test results in the terminal.

## Adding the Connection URI

To add the required connection URI for MongoDB, follow these steps:

1. Open the `config/db.js` file in a text editor.
2. Locate the line that contains the MongoDB connection URI, which looks like this:
   ```javascript
   await mongoose.connect('mongodb://localhost/mydatabase', {
     useNewUrlParser: true,
     useUnifiedTopology: true
   });
