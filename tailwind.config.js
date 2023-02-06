module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      animation: {
        'appear-then-fade': 'appear-then-fade 4s both',
      },
      keyframes: {
        'appear-then-fade': {
          '0%, 100%': { opacity: '0' },
          '5%, 60%': { opacity: '1' }
        }
      }
    }
  }
}
