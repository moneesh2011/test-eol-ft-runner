## Sample project using eol-ft-runner
**eol-ft-runner**  ==>  `Selenium + Appium + Cucumber-js`

Github repository: https://www.github.com/moneesh2011/eol-ft-runner

#### Install
``` shell
git clone <this_repository>
cd project/
npm install
```

### Run test
``` shell
npm run execute:ft
```
`config.json` file inside the test folder is mandatory to set the path of the feature & step-definition files. 
The above command runs the test in Chrome browser. You can run in Firefox/Safari using the below command:
``` shell
npm run ft -- --config=config.json --browser=firefox --tags=@sample --cores=3
```
Please refer to this [ReadMe](https://github.com/moneesh2011/eol-ft-runner.git) for more details on eol-ft-runner package.