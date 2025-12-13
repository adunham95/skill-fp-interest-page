import fs from 'fs';
import path from 'path';

const SLICES_DIR = path.resolve('./src/lib/slices');
const OUTPUT_FILE = path.resolve('./slice-inventory.txt');

function readJSON(filePath) {
	try {
		return JSON.parse(fs.readFileSync(filePath, 'utf8'));
	} catch {
		return null;
	}
}

function indent(level) {
	return '  '.repeat(level);
}

function describeField(key, field, level = 0) {
	let lines = [];
	const label = field.config?.label ? ` — ${field.config.label}` : '';
	const repeat = field.config?.repeat === true ? ' (repeating)' : '';

	lines.push(`${indent(level)}- ${key} (${field.type})${repeat}${label}`);

	// Handle Group fields recursively
	if (field.type === 'Group' && field.config?.fields) {
		for (const [childKey, childField] of Object.entries(field.config.fields)) {
			lines.push(...describeField(childKey, childField, level + 1));
		}
	}

	return lines;
}

let output = [];
output.push('PRISMIC SLICE INVENTORY');
output.push('========================\n');

const sliceDirs = fs
	.readdirSync(SLICES_DIR)
	.filter((name) => fs.statSync(path.join(SLICES_DIR, name)).isDirectory());

for (const sliceName of sliceDirs) {
	const slicePath = path.join(SLICES_DIR, sliceName);
	const modelPath = path.join(slicePath, 'model.json');
	const model = readJSON(modelPath);

	output.push(`SLICE: ${sliceName}`);
	output.push('------------------------');

	if (!model) {
		output.push('⚠️  No model.json found\n');
		continue;
	}

	output.push(`ID: ${model.id}`);
	output.push(`Type: ${model.type}`);
	output.push(`Description: ${model.description || '—'}`);
	output.push('');

	for (const variation of model.variations || []) {
		output.push(`  VARIATION: ${variation.name} (${variation.id})`);

		// Primary fields
		if (variation.primary && Object.keys(variation.primary).length > 0) {
			output.push('    Primary Fields:');
			for (const [key, field] of Object.entries(variation.primary)) {
				output.push(...describeField(key, field, 3));
			}
		}

		// Items fields
		if (variation.items && Object.keys(variation.items).length > 0) {
			output.push('\n    Items (Repeating Slice Fields):');
			for (const [key, field] of Object.entries(variation.items)) {
				output.push(...describeField(key, field, 3));
			}
		}

		output.push('');
	}

	output.push('\n');
}

fs.writeFileSync(OUTPUT_FILE, output.join('\n'));
console.log(`✅ Slice inventory written to ${OUTPUT_FILE}`);
