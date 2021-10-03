<p align="center">
    <img src="https://raw.githubusercontent.com/raycharius/slack-block-builder/master/docs/resources/images/logo-horizontal.png" alt="Logo" width="600px">
</p>

<p align="center">
    <h3 align="center">A lightweight Slack app to demo the features of <a href="https://github.com/raycharius/slack-block-builder">Block Builder</a></h3>
</p>

<p align="center">
    Take a look at how Block Builder can be used together with Slack's <a href="https://github.com/slackapi/bolt-js">BoltJS</a>
</p>

***

This repository is a lightweight Slack app, built with the the [**Block Builder** library](https://github.com/raycharius/slack-block-builder), and Slack's very own [BoltJS](https://github.com/slackapi/bolt-js). It's a simple implementation whose goal is to demo some of the more complex features of **Block Builder**, such as the `Paginator` an `Accordion` components and how to handle them in pair with [BoltJS](https://github.com/slackapi/bolt-js).

The rest of this document walks you through setting up and running the app. It does assume that you are familiar with cloning and downloading GitHub repositories.

### :office: &nbsp; Adding The App To Your Workspace

This Slack app can easily be added to your own workspace and used locally using the Socket Mode:

* Locate the `manifest.yml` file in the root of this repository
* Copy the contents to your clipboard
* Follow the [instructions laid out by Slack](https://api.slack.com/reference/manifests) to install an app via a manifest.
* Go into the app's *Basic Information* and click **Install to Workspace**. 

### :wrench: &nbsp; Adding The App Tokens

* Create a file called `.env` in the root of the repository.
* Copy over the contents of `.env.example` to the file.
* Go into the *OAuth and Persmissions* section of the app in Slack's dashboard, and copy the *Bot User OAuth Token* to the clipboard.
* Paste that value to `BOT_TOKEN` in the `.env` file.
* Go into the *Basic Information* section of the app in Slack's dashboard, scroll down to *App-Level Token*.
* Click the **Generate Token and Scopes** button, give the token a name and create it, and copy the value to the clipboard.
* Paste that value to `APP_TOKEN` in the `.env` file.

### :whale: &nbsp; Starting The App With Docker (Or Not)

There is a Docker file included in the repository, which is the recommended way of hosting the app locally:

* Make sure that Docker is installed
* In the terminal, make sure you are in the root of the project
* Execute the `docker-compose up` command
* The app should be up and running and ready to accept payloads from your workspace

For those who do not wish to use Docker, just execute `npm run start`.

### :partying_face: &nbsp; Opening The Demo

* Open your Slack workspace
* Open any conversation or channel
* Use the `/block-builder` slash command to launch the app's main menu.
* Have fun!
   
