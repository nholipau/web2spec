# Web2Spec
An <b>AI-Powered</b> Automation library that allows test engineers to generate spec files from given urls.

With this approach, <b>test automation engineers</b> can:
- Achieve faster time to value.
- Focus on what matters, instead of suffering for web scraping.
- Streamline the quality of software deploy.

## Recomendations

1. One shouldn't expect from <b>web2spec</b> to create a perfect test automation pipeline, the goal is to have a fast MVP and increment with the value generated.
2. Test Automation Engineers should act as the human in the middle, ensuring stability and quality on the execution and validations. 

## Requirements
1. You should have <b>NodeJS</b> installed.
2. You should have <b>Python3</b> installed.
3. You should have a <b>Gemini API Key</b>. (Gemini is the core of this tool for now, but it's possible to include other LLMs in the future).
4. <b>Web2Spec</b> is currently available for <b>WebdriverIO</b>, <b>Cypress</b> and <b>Playwright</b>.

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

```bash
  PowerShell: $env:GEMINI_API_KEY = "YOUR_API_KEY"
  Linux: export GEMINI_API_KEY="YOUR_API_KEY"
  CMD (Prompt de Comando - Windows): set GEMINI_API_KEY=YOUR_API_KEY 
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

## Authors
Beatriz Santos (idea) - [Linkedin](https://www.linkedin.com/in/beatriz-santos-19a2731a0) / [Github]() 

Paulo Soares (idea, architecture and implementation) - [Linkedin](https://www.linkedin.com/in/costapsoares) / [Github]()

If you liked, have any questions or suggestions, feel free to reach out to us on Linkedin 😊

## Collaborators

[]