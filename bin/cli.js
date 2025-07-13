#!/usr/bin/env node

import { spawn } from 'child_process';
import fetch from 'node-fetch';

const url = process.argv[2];
if (!url) {
  console.error('❌ Informe uma URL.\nUso: npx web2spec <url>');
  process.exit(1);
}

console.log(`🌐 Baixando HTML de: ${url}...`);
const res = await fetch(url);
const html = await res.text();

console.log('🤖 Enviando para o Gemini...');

const python = spawn('python', ['python/processor.py', url]);

let output = '';
python.stdout.on('data', (data) => {
  output += data.toString();
});

python.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

python.on('close', (code) => {
  if (code !== 0) {
    console.error(`Processo Python saiu com código ${code}`);
    return;
  }
  console.log('\n📄 Spec recebida:\n');
  console.log(output);
});

// envia HTML para stdin do Python
python.stdin.write(html);
python.stdin.end();
