# Homework 4

Run the app that you had created last week (**homework 3)** on the Heroku platform.

1. Sign up on Heroku
    1. [https://signup.heroku.com/](https://signup.heroku.com/)
        1. Check and confirm account creation inside your email
2. Go to the “Getting Started on Heroku” page
    1. [https://devcenter.heroku.com/start](https://devcenter.heroku.com/start)
    2. Click on the Node.js
    3. You should have already installed Node.js and npm in the previous weeks
        4. If not, please install them
            1. **Package.json** file should be under the webapp directory, located at the root of your app, not in a subfolder. (npm init)
3. Click on the button “**I’m ready to start**”
4. Download and install Heroku CLI
    1. Note that it requires Git.
5. Open your terminal (i.e git bash, visual studio code, etc) and type “**heroku login**” command
    1. This command will open “**Log in to the Heroku CLI**” and click on “**Log in**”
    2. Close the heroku webpage (dashboard) and go back your terminal
    3. Accept the terms and you will be directed to dashboard ([https://dashboard.heroku.com/apps](https://dashboard.heroku.com/apps))
    4. It should state in the CLI that you have logged into your account.
        You can use **Ctrl-C** to end the process. 
6. Clone a local version of the sample application that you can then deploy to Heroku

    ```bash
    git clone <https://github.com/heroku/node-js-getting-started.git>
    cd node-js-getting-started

    ```

    1. Create a remote repository

    ```bash
    heroku create

    ```

    2. Deploy your code

    ```bash
    git push heroku main 

    ```

    3. Ensure that at least one instance of the app is running

    ```bash
    heroku ps:scale web=1

    ```

    4. Open your first web app

    ```bash
    heroku open

    ```

    5. Congratulations! You just created your sample cloud app.

    Now you’re ready to create your first Heroku app. In this step, you will prepare a sample application that’s ready to be deployed to Heroku.

7. Update your “**webapp.js**” code
    1. Update the line of **app.listen(8002)**; with the code below, so, Heroku can assign any available port during runtime:

    ```bash
    //If the code runs on Heroku, assign a dynamic port number
    let port = process.env.PORT;

    //If it runs locally assign 8002 static port
    if (port == null || port == "") {
      port = 8002;
    }
    app.listen(port);
    ```

8. Add a new file to your “**webapp**” repository,
    1. Create the file named “**Procfile**” with no extensions in the filename (don't use .txt, .js etc.) and you will see the **heroku** icon in your code console.
    2. Content of the file should have the following one line

    ```bash
    web: node webapp.js

    ```

    3. Specify the version of node. (Hint: You can check it with "node --version" command)

    ```bash
    "engines": {
        "node": "12.x"
      }
    ```

    It should be added into package.json

    ```bash
    {
      "name": "node-example",
      "version": "1.0.0",
      "description": "This example is so cool.",
      "main": "web.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "example",
        "heroku"
      ],
      "author": "jane-doe",
      "license": "MIT",
      "dependencies": {
        "express": "^4.9.8"
      },
      "engines": {
        "node": "12.x"
      }
    }
    ```

9. Run the following npm command. Change index.js to webapp.js when asked. Update other optional information as you wish.

```bash
npm init
```

10. Run the following git commands in your webapp folder:

    ```bash
    git init
    git add .
    git commit -m “first commit”

    ```

    ```bash
    heroku login 
    # may not be needed if you are already logged in

    heroku create 
    # will create a new app for you 

    git push heroku master 
    # It will deploy the code to Heroku servers.
    # If everything works OK. It should finish with:
    # "Verifying deploy... done."

    heroku open 
    # will open your web app

    ```

11. You have your app running on the web!!! 
12. If there are any problems check “heroku logs”, that might help.
    1. For example: If you see “npm ERR! missing script: start”
        1. Try: [https://stackoverflow.com/questions/34631300/why-do-i-obtain-this-error-when-deploying-app-to-heroku](https://stackoverflow.com/questions/34631300/why-do-i-obtain-this-error-when-deploying-app-to-heroku)
