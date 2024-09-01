# Form Validator

This is a simple form done in Vanilla JS for purposes of showcasing the options within Vanilla that can be used for form validation on the front end of a web application. In this particular example we did a sign in web feature. 

## Project Overview

This project leverages no APIs not already built in. Howver, it does leverage several different built in vanilla features from querySelector and eventListeners. We also leverage the Regex in order to validate emails. As to the latter, this can be done many ways and this is just one of them. 
  - Excellent resource for email validation is StackOverflow, however many others exist. 

## Features
  - show failure functions able to indicate to the user that an improper input was made. 
  - conditional color for proper and inproper inputs. 
  - conditional inproper input instruction rendering

  ## Getting Started

### Prerequisites

To run this project locally, I recommend using the **Live Server** extension in VSCode. It’s a straightforward and enjoyable way to serve your project.

- **Live Server Extension**: [ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Instructions

1. **Install Live Server**: If you haven't installed the Live Server extension, you can do so from the VSCode marketplace.
2. **Open the Project**: Open the `index.html` file in your VSCode.
3. **Start the Server**:
   - Right-click on the `index.html` file and select **Open with Live Server**.
   - Alternatively, click on the **Go Live** button in the bottom right corner of VSCode.
4. **Access the Application**: Your browser should automatically open with a local server running on port `5500`.

If you prefer using another local server like MAMP, feel free to do so.

# Customization
This is a small open source project, so feel free to clone away and modify to your hearts content. I claim no rights over this code. 

## License
This project is not licensed, welcome to use and modify as much or as little as you would like after a clone. 

## Upcoming features to add:
  1. We would like to add character trackers with small tags to the html and have them be dynamic as changes are input by the user. 
  2. Fix "bug" that allows Confirm Password to register as correct if no initial password was entered. 
  3. Long Term: Mini backend using ExpressJS  and Postgres to register the user and go directly to a homepage. This will be purely for aesthetic purposes considering this is just meant as a template and testing ground for minor FE features. 