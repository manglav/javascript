// see https://github.com/gajus/eslint-plugin-flowtype

module.exports = {
  // Marks Flow type identifiers as defined.
  'flowtype/define-flow-type': 'error',
  // Requires that all function parameters have type annotations.
  'flowtype/require-parameter-type': 'off',
  // Requires that functions have return type annotation.
  'flowtype/require-return-type': 'off',
  // Makes sure that files have a valid @flow annotation.
  'flowtype/require-valid-file-annotation': ['warn', 'always'],
  // Enforces consistent spacing after the type annotation colon.
  'flowtype/space-after-type-colon': ['warn', 'always'],
  // Enforces consistent spacing before the type annotation colon.
  'flowtype/space-before-type-colon': ['warn', 'never'],
  // Enforces a consistent naming pattern for type aliases.
  'flowtype/type-id-match': ['warn', '^([A-Z][a-z0-9]+)+(Type|Props|State|Context)$'],
  // Marks Flow type alias declarations as used.
  'flowtype/use-flow-type': 'error',
  // Checks for simple Flow syntax errors.
  'flowtype/valid-syntax': 'error',
};
