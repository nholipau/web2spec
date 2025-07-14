#!/usr/bin/env node
import { readFileSync } from 'fs';
import { spawn } from 'child_process';
import fetch from 'node-fetch';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Caminho absoluto para o script Python dentro do pacote
const frameworkUrl = './wdio.conf.js';
const pythonScript = join(__dirname, '../python/processor.py');
const configFile = join(__dirname, '../web2spec.json');

const url = process.argv[2];
const autorun = process.argv[3];
if (!url) {
  console.error('❌ Please provide a URL.\nUsage: npx web2spec <url>');
  process.exit(1);
}

let framework = 'webdriverdio';
try {
  const config = JSON.parse(readFileSync(configFile, 'utf-8'));
  framework = config.framework || framework;
} catch {
  console.warn('⚠️ No setup found. Using "webdriverdio" as default.');
}

console.log(`🌐 Downloading HTML from: ${url}...`);
const res = await fetch(url);
const html = await res.text();

console.log('🤖 AI Generation...');

let output = '';

function runPythonScript(urlpar) {
  return new Promise((resolve, reject) => {
    if(typeof(urlpar) == 'undefined'){
      urlpar = url;
    }
    const python = spawn('python', [pythonScript, framework, urlpar]);

    python.stdout.on('data', (data) => {
      output += data.toString();
    });

    python.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    let output = '';

    python.stdout.on('data', (data) => {
      output += data.toString();
    });

    python.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    python.on('close', (code) => {
      if (code !== 0) {
        return reject(new Error(`Processo Python saiu com código ${code}`));
      }

      console.log('\n📄 Spec received:\n');
      console.log(output);
      resolve(output);
    });

    python.stdin.write(html);
    python.stdin.end();
  });
}

runPythonScript()
  .then((output) => {
    if (framework === 'webdriverio' && autorun) {
      const wdio = spawn('npx', ['wdio', 'run', frameworkUrl, `--spec=../${output}`], {
        cwd: './wdio',
        stdio: 'inherit',
        shell: true
      });

      wdio.on('exit', (code) => {
        if (code === 0) {
          console.log('✅ Testes WDIO executados com sucesso!');
        } else {
          console.error(`❌ WDIO falhou com código ${code}`);
        }
      });
    }
  })
  .catch((err) => {
    console.error(err.message);
  });