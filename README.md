#What is a Fintech App ?

Fintech is a short term for financial technology.Therefore a fintech app is one dealing with financial services.

#Project Introduction

In this project,moneytary data of various companies from different sectors for the past 5 years is collected from www.moneycontrol.com and stored in a database.
This data is used to calculate and compare the economic profit ratio of each company which is represented in the form of line charts.

# Quickstart - Build your own Docker image#

Build the Docker image using the following command

```bash
$ docker build -t nodejs-express:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 8080:8080 nodejs-express:<tag>
```

# Quickstart - git based pipeline

Follow the steps mentioned below for git based pipeline

1. Ensure that you have a git project
2. Edit `app/src/server.js`
3. Commit your changes

    ```bash
    $ git add .
    $ git commit -m "message"
    ```

4. Push the changes to git

    ```bash
    $ git push <remote> master
    ```

# Advanced usage

### **Port**

Default Port for application is `8080`

