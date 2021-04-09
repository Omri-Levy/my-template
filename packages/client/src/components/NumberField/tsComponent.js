/* eslint-disable */
const fs = require(`fs`);
const path = require(`path`);
/* eslint-enable */
const fileName = path.basename(path.dirname(__filename));
// create tests file
fs.writeFile(
  `./${fileName}.test.tsx`,
  `describe(\`${fileName}\`, () => {
	it(\`${fileName} temp\`, () => {
		expect(true).toBe(true);
	});
});`,
  (err) => {
    if (err) {
      console.error(err);
      console.log(`error at ${fileName}.test.tsx`);
    }

    console.log(`created ${fileName}.test.tsx`);
  }
);

// create types file
fs.writeFile(`./types.d.ts`, ``, (err) => {
  if (err) {
    console.error(err);
    console.log(`error at types.d.ts`);
  }

  console.log(`created types.d.ts`);
});

// create component file
fs.writeFile(
  `index.tsx`,
  `import { FunctionComponent } from 'react';

const ${fileName}: FunctionComponent = () => {
	return (
		<div>
			<h1>${fileName}</h1>
		</div>
	);
};

export default ${fileName};
`,
  (err) => {
    if (err) {
      console.error(err);
      console.log(`error at ${fileName}.tsx`);
    }

    console.log(`created ${fileName}.tsx`);
  }
);

// create component story
fs.writeFile(
  `${fileName}.stories.tsx`,
  `import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import ${fileName} from '.';

export default {
  title: \`${fileName}\`,
  component: ${fileName},
};

const Template: Story<ComponentProps<typeof ${fileName}>> = (args) => (
  <${fileName} {...args} />
);

export const ${fileName}Story = Template.bind({});

${fileName}Story.args = {};
${fileName}Story.decorators = [ContainerDecorator];
`,
  (err) => {
    if (err) {
      console.error(err);
      console.log(`error at ${fileName}.tsx`);
    }

    console.log(`created ${fileName}.tsx`);
  }
);
