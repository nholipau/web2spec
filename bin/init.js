#!/usr/bin/env node

import inquirer from 'inquirer';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Caminho absoluto para o script Python dentro do pacote
const configFile = join(__dirname, '../web2spec.json');

console.log('👋 Bem-vindo ao setup do Web2Spec!');

const answers = await inquirer.prompt([
  {
    type: 'list',
    name: 'framework',
    message: 'Which test framework you want me to generate files for? (web2spec will generate files for this framework)',
    choices: [
      { name: 'WebdriverIO', value: 'webdriverio' },
      { name: 'Cypress', value: 'cypress' },
      { name: 'Playwright', value: 'playwright' },
    ],
  },
]);

console.log(answers)

writeFileSync(configFile, JSON.stringify(answers, null, 2));
