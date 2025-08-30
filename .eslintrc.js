module.exports = {
  root: true,
  env: {
    node: true,      // ← Permite 'module', 'require', 'process', etc.
    browser: true    // ← Para que entienda window, document, etc.
  },
  extends: [
    'plugin:vue/vue3-essential',  // Reglas básicas de Vue 3
    'eslint:recommended'          // Reglas recomendadas de ESLint
  ],
  parserOptions: {
    parser: '@babel/eslint-parser', // Usa Babel para parsear
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    // Puedes personalizar reglas aquí si quieres
    // Ejemplo: 'no-console': 'warn'
  }
}