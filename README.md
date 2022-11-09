[![Known Vulnerabilities](https://snyk.io/test/github/mendixlabs/TabPageSelector/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mendixlabs/TabPageSelector?targetFile=package.json)
[![Support](https://img.shields.io/badge/Mendix%20Support%3A-Community-green.svg)](https://docs.mendix.com/community/app-store/app-store-content-support)

## TabPageSelector
Use this pluggable widget widget to dynamically set the active tab page. The default Tab Container in mendix apps does not have facility to select and open tab page dynamically, by using this widget you can dynamically open tab page.

## Features
- Dynamically open tab page
- Get tab page number on which user has clicked
- Tested on Mendix 8.18.19, 9.1.1, 9.6.0, 9.7.0 and 9.15.1

## Usage
- Create a Mendix app
- Add a Data View
- Add a Tab Container inside the Data View
- Add the this widget inside the Data View
- Configure the widget by docuble clicking on it:
    - Enter the name of the target Tab Container
    - Select the attribute to determine tab page number. The first tab page number is always 1.
- Run the app, now based on attribute the tab page will be selected by default.

## Issues, suggestions and feature requests
Suggestions, feedbacks and issues are always welcome :) [here](https://github.com/mendixlabs/TabPageSelector/issues)
