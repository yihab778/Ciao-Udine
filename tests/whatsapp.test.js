import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanNumber, waLink, parseInvite, messages } from '../public/js/whatsapp.js';

test('phone numbers are normalised to digits with country code', () => {
  assert.equal(cleanNumber('+39 333 123 4567'), '393331234567');
  assert.equal(cleanNumber('0039 333-123-4567'), '393331234567');
  assert.equal(cleanNumber('+20 100 123 4567'), '201001234567');
  assert.equal(cleanNumber('123'), '');
  assert.equal(cleanNumber(''), '');
});

test('wa.me links carry the encoded message', () => {
  const l = waLink('+39 333 123 4567', 'Ciao! Ho finito la lezione 🎉');
  assert.ok(l.startsWith('https://wa.me/393331234567?text='));
  assert.equal(decodeURIComponent(l.split('text=')[1]), 'Ciao! Ho finito la lezione 🎉');
  assert.ok(waLink('', 'x').startsWith('https://wa.me/?text='), 'without a number WhatsApp lets her choose the contact');
});

test('invite links prefill the partner contact', () => {
  assert.deepEqual(parseInvite('name=Youssef&wa=%2B393331234567'), { name: 'Youssef', wa: '393331234567' });
  assert.equal(parseInvite(''), null);
});

test('messages are in simple Italian and include the right details', () => {
  assert.match(messages.lesson('Youssef', { title: { it: 'Buongiorno!' } }), /Youssef.*Buongiorno!/);
  assert.match(messages.question('Youssef', 'la camera', 'la chambre', 'la camara'), /la camera[\s\S]*la camara/);
  assert.match(messages.progress('Youssef', 'https://x.y/#/p/abc'), /https:\/\/x\.y\/#\/p\/abc/);
});
