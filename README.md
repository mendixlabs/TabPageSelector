[![Known Vulnerabilities](https://snyk.io/test/github/mendixlabs/TabPageSelector/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mendixlabs/TabPageSelector?targetFile=package.json)
[![Support](https://img.shields.io/badge/Mendix%20Support%3A-Community-green.svg)](https://docs.mendix.com/community/app-store/app-store-content-support)

## TabPageSelector
Use this pluggable widget widget to dynamically set the active tab page. The default Tab Container in mendix apps does not have facility to select and open tab page dynamically, by using this widget you can dynamically open tab page.

## Features
- Dynamically open tab page
- Get tab page number on which user has clicked
- Tested on Mendix 8.18.19, 9.1.1, 9.6.0, 9.7.0, 9.11.0 and 9.15.1

## Demo and Playground
Try-out this widget by visiting https://tabselectorwidgetapp-sandbox.mxapps.io/

## Usage
- Add a Data View and set the data source (this data source should have a attribute which will determine the number of active tab page)
- Add a Tab Container inside the Data View
- Add the this widget inside the Data View
- Configure the widget by docuble clicking on it:
    - Enter the name of the target Tab Container
    - Select the attribute to determine tab page number. The first tab page number is always 1.
- Run the app, now based on attribute the tab page will be selected by default.

## Limitations
This widget should be used inside a data container, we cannot use Microflow as data source to determine active page number this is due to limitation from Mendix pluggable widgets. As of now there is no direct way to get return value form Microflow in pluggable widgets. See https://forum.mendix.com/link/questions/95035

## Issues, suggestions and feature requests
Suggestions, feedbacks, contributions and issues are always welcome :) [here](https://github.com/mendixlabs/TabPageSelector/issues)