# Web2Spec
An <b>AI-Powered</b> Automation library that allows test engineers to auto generate spec files from given urls.

With this approach, <b>test automation engineers</b> can:
- Achieve faster time to value.
- Focus on what matters, instead of suffering for web scraping.
- Streamline the quality of software deploy.

## Workflow + Architecture
Web2Spec is divided in the following workflows:
1. Fetching the HTML by the URL
2. Sending the document to the LLM
3. Generating a test script document based on LLM's response
4. Additionally, web2spec can automatically run the test scripts (This version supports only WebdriverIO for autorun)

## Recomendations

1. There shouldn't be any expectation for <b>web2spec</b> to create a perfect test automation pipeline, the goal is to have a fast MVP and increment with the value generated.
2. Test Automation Engineers should act as the human in the middle, ensuring stability and quality on the execution and validations.
3. Please, don't use <b>Web2spec</b> to scrap elements on webpages that didn't authorize it. 

## Requirements
1. You should have <b>NodeJS</b> installed.
2. You should have <b>Python3</b> installed.
3. You should have a <b>Gemini API Key</b>. (Gemini is the core of this tool for now, but it's possible to include other LLMs in the future).
4. <b>Web2Spec</b> is currently available for <b>WebdriverIO</b>, <b>Cypress</b> and <b>Playwright</b>.

## LLM Prompt
```bash
You are a test engineer. Based on the HTML below, generate a {framework} spec file that includes:


1. Useful selectors (by ID, class, or attributes)

2. Possible interactions that a user can perform

Send me a ready to use file with the test scripts, describes and its. Not comments of examples.

Just create tests for elements you consider important, like titles, texts, forms and etc. Leave aside menu items and not necessary items. This sould be an mvp 

The navigation should be to url: ${url}.

Before every test, it should navigate to the given url.

Encapsulate common functions like returning home, for future reuse.

HTML:
{html}
```

## Installation

1. Install <b>web2spec</b> from a terminal:

```bash
  npm install web2spec
  npx web2spec-init
  cd web2spec
  cd python
  pip install -r requirements.txt
```
2. Add your own <b>GEMINI_API_KEY</b> as an environment variable

<b>Powershell</b>
```bash
  $env:GEMINI_API_KEY = "YOUR_API_KEY"
```

<b>Linux</b>
```bash
  export GEMINI_API_KEY="YOUR_API_KEY"
```

<b>CMD (Command Prompt - Windows)</b>
```bash
  set GEMINI_API_KEY=YOUR_API_KEY 
```

## Execution

Execute <b>Web2Spec</b> by running the following command: 

```bash
  npx web2spec <url>
```

Example:
```bash
  npx web2spec https://the-internet.herokuapp.com/dynamic_controls
```

### Parameters
You can set the parameter <b>autorun</b> to auto execute the specs (this version supports autorun only for webdriverio)

Example:
```bash
  npx web2spec <url> autorun
```

### Output
<b>Web2Spec</b> will create the folder <b>ai_files</b> and generate the spec files inside of this folder.

## Authors
Beatriz Santos (idea) - [Linkedin](https://www.linkedin.com/in/beatriz-santos-19a2731a0) / [Github](https://github.com/Beatryz10) 

Paulo Soares (idea, architecture and implementation) - [Linkedin](https://www.linkedin.com/in/costapsoares) / [Github](https://github.com/nholipau/)

If you like, have any questions or suggestions, feel free to reach out to us on Linkedin 😊

## Collaborators

[]