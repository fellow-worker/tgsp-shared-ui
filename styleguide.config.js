var path  = require('path');

module.exports = {
    styleguideComponents: { Wrapper: path.join(__dirname, 'src/themes/ThemeProvider.js') },
    require: [
        path.join(__dirname, 'public/styles.css')
    ],
    title : "TGSP Shared UI component",
    sections : [
        { name: 'Branding', components: 'src/components/branding/**/[A-Z]*.jsx' },
        { name: 'Elements', components: 'src/components/elements/**/[A-Z]*.jsx' },
        { name: 'Structures', components: 'src/components/structures/**/[A-Z]*.jsx' },
        { name: 'Layouts', components: 'src/components/layouts/**/[A-Z]*.jsx' },
    ],
    styleguideDir : "dist",
    getComponentPathLine(componentPath) {
        let name = path.basename(componentPath, '.js').replace('.jsx','');
        let dir = path.dirname(componentPath)
        if(dir.startsWith('src/')) dir = dir.substring(4);
        return `import ${name} from 'tgsp-shared-ui/lib/${dir}';`
      }
};